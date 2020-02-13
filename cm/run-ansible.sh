#!/bin/bash

# Exit on error
set -e

# Trace commands as we run them:
set -x

# Print error message and exit with error code 1
function die {
    echo "$1"
    exit 1
}

# Check the number of arguments
[ $# -ge 2 ] || die "usage: $0 <playbook> <inventory>"

PLAYBOOK=$1
INVENTORY=$2

VAULT_PWD=$3

if [ $VAULT_PWD = "lkhuran" ]
then
	echo "lkhuran" | ansible-playbook $PLAYBOOK -i $INVENTORY --ask-vault-pass
else
	ansible-playbook $PLAYBOOK -i $INVENTORY --ask-vault-pass
fi