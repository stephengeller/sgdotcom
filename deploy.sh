#!/usr/bin/env bash

set -e

eslint src --max-warnings 0

yarn build && firebase deploy

git push