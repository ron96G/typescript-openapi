#!/usr/bin/env bash

set -e

yarn openapi --exportServices=false --useUnionTypes --input ./docs/openapi.json --output generated 
cp -r generated/models/*.ts src/models