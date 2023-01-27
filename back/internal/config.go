package internal

import (
	"os"
	"time"

	"github.com/pkg/errors"
)

type Config struct {
	RedisPort    string
	RedisTimeout time.Duration
}

func InitConfig() (*Config, error) {
	redisPort, ok := os.LookupEnv("REDIS_PORT")
	if !ok {
		return nil, errors.New("REDIS_PORT not found")
	}
	redisTimeoutStr, ok := os.LookupEnv("REDIS_TIMEOUT")
	if !ok {
		return nil, errors.New("REDIS_TIMEOUT not found")
	}
	redisTimeout, err := time.ParseDuration(redisTimeoutStr)
	if err != nil {
		return nil, errors.Wrap(err, "parse redis timeout")
	}

	config := &Config{
		RedisPort:    redisPort,
		RedisTimeout: redisTimeout,
	}
	return config, nil
}
