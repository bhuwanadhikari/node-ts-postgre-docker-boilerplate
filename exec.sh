#!/bin/sh
echo "need to do more"
echo $1
if [ $1 = "server" ]
then
    docker exec -it node-ts-postgres /bin/sh
fi

if [ $1 = "postgre" ]
then
    docker exec -it postgres psql -U $2 $3
fi