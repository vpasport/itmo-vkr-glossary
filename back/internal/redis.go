package internal

import (
	"bytes"
	"context"
	"encoding/gob"
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/pkg/errors"
	redis "github.com/redis/go-redis/v9"
)

const (
	initDataPath string = "init.json"
)

type Redis struct {
	rds *redis.Client
}

func InitCache(cfg *Config) (*Redis, error) {
	rdb := &Redis{
		rds: redis.NewClient(&redis.Options{
			Addr:     fmt.Sprintf("redis:%s", cfg.RedisPort),
			Password: "",
			DB:       0,
		}),
	}

	_, err := rdb.rds.Ping(context.Background()).Result()
	if err != nil {
		return nil, errors.Wrap(err, "error in ping redis")
	}

	return rdb, nil
}

func (r *Redis) GetTermsData(ctx context.Context) (*AllData, error) {
	gobData, err := r.rds.Get(ctx, DataRedisKey).Result()
	if err != nil {
		if err == redis.Nil {
			return nil, nil
		}

		return nil, errors.Wrap(err, "error in getting available currencies")
	}

	data := &AllData{}
	buf := bytes.NewBufferString(gobData)
	err = gob.NewDecoder(buf).Decode(data)
	if err != nil {
		return nil, errors.Wrap(err, "parse currency currency availability data")
	}

	return data, nil
}

func (r *Redis) SetTermsData(ctx context.Context, allTermsData *AllData) error {
	buf := bytes.NewBuffer(nil)
	err := gob.NewEncoder(buf).Encode(allTermsData)
	if err != nil {
		return errors.Wrap(err, "error in marshal data for redis")
	}
	saved, err := r.rds.Set(ctx, DataRedisKey, buf.String(), 0).Result()
	if err != nil {
		return errors.Wrap(err, "save available currencies")
	}

	if saved == "" {
		return errors.New("save no info")
	}

	return nil
}

func InitStorageData(ctx context.Context, storage *Redis) error {
	file, err := os.OpenFile(initDataPath, os.O_RDONLY, 0777)
	if err != nil {
		return errors.Wrap(err, "reading init file 3")
	}

	termsData := &AllData{}
	err = json.NewDecoder(file).Decode(termsData)
	if err != nil {
		return errors.Wrap(err, "reading file data")
	}

	log.Println(termsData)

	for _, edge := range termsData.Edges {
		edge.ClassName = EdgeClassName
	}

	err = storage.SetTermsData(ctx, termsData)
	if err != nil {
		return errors.Wrap(err, "writing data to storage")
	}

	return nil
}
