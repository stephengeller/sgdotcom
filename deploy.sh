#!/usr/bin/env bash

set -e

yarn build && firebase deploy

git push