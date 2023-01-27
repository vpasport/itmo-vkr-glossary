FROM golang:1.18-alpine
WORKDIR /wallet-service
COPY / ./

RUN go mod download
RUN go build -o ./terms-back ./cmd
ENTRYPOINT [ "./terms-back" ]