SHELL=/bin/bash -e
.PHONY: help test

help:
	@echo "- make test         Run tests"

test:
	@npm run test
