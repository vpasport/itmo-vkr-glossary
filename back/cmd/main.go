package main

import (
	"context"
	"encoding/json"
	"github.com/pkg/errors"
	"log"
	"net/http"
	"terms-for-goss/internal"
)

type Handler struct {
	Storage *internal.Redis
	Config  *internal.Config
}

func (h *Handler) GetTerms(writer http.ResponseWriter, request *http.Request) {
	writer.Header().Set("Access-Control-Allow-Origin", "*")
	writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
	writer.Header().Set("Access-Control-Allow-Headers", "*")

	ctx := request.Context()

	storageCtx, cancel := context.WithTimeout(ctx, h.Config.RedisTimeout)
	defer cancel()
	termsData, err := h.Storage.GetTermsData(storageCtx)
	if err != nil {
		http.Error(writer, errors.Wrap(err, "get terms data from storage").Error(), http.StatusInternalServerError)
		return
	}

	err = json.NewEncoder(writer).Encode(termsData)
	if err != nil {
		http.Error(writer, errors.Wrap(err, "write terms data").Error(), http.StatusInternalServerError)
		return
	}

	writer.Header().Add("Content-Type", "application/json")
	writer.WriteHeader(http.StatusOK)
	return
}

func main() {
	config, err := internal.InitConfig()
	if err != nil {
		log.Fatal("error init config ", err.Error())
	}

	storage, err := internal.InitCache(config)
	if err != nil {
		log.Fatal("error init storage ", err.Error())
	}

	err = internal.InitStorageData(context.Background(), storage)
	if err != nil {
		log.Fatal("error init terms data ", err.Error())
	}

	handler := &Handler{
		Storage: storage,
		Config:  config,
	}

	http.HandleFunc("/api/mind-map", handler.GetTerms)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
