#!/usr/bin/env bash

set -e

yarn openapi --exportServices=false --input ./docs/openapi.yaml --output generated 
cp -r generated/models/*.ts src/models