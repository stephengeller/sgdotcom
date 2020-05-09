#!/usr/bin/env bash

RED="\033[31m"
PLAIN="\033[0m"

command -v firebase

if [[ $? -ne 0 ]]; then
    echo -e "${RED}Firebase CLI not found, please install globally to deploy."
    echo -e "$ yarn gloabl add firebase-tools${PLAIN}"
    exit 1
fi

echo "Building..."
yarn build

echo "Deploying..."
yarn deploy

echo "Deployed."
