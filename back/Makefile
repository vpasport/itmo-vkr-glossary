LOCAL_BIN:=$(CURDIR)/bin
GOLANGCI_BIN:=$(LOCAL_BIN)/golangci-lint

# install golangci-lint binary
.PHONY: install-lint
install-lint:
ifeq ($(wildcard $(GOLANGCI_BIN)),)
	$(info Downloading golangci-lint latest)
	GOBIN=$(LOCAL_BIN) go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
GOLANGCI_BIN:=$(LOCAL_BIN)/golangci-lint
endif

# run diff lint like in pipeline
.PHONY: .lint
.lint: install-lint
	$(info Running lint...)
	$(GOLANGCI_BIN) run --config=$(CURDIR)/.golangci.pipeline.yaml ./...

# golangci-lint diff master
.PHONY: lint
lint: .lint