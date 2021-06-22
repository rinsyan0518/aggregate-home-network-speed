#! /bin/bash

SCRIPT_DIR=$(cd $(dirname $0); pwd)
eval "$(cat ${SCRIPT_DIR}/.env <(echo) <(declare -x))"

ENDPOINT="https://script.google.com/macros/s/${GAS_SCRIPT_ID}/exec"

CSV_DATA=$(speedtest -f csv -s ${SERVER_ID})
echo ${CSV_DATA}
curl -L -H 'Content-Type:text/csv' -X POST -d "${CSV_DATA}" ${ENDPOINT}
