#!/bin/bash
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

if [ "$BRANCH_NAME" = "master" ]; then
    yarn nx run-many --target "$1" "${@:2}"
else
    yarn nx affected --target "$1" "${@:2}"
fi
