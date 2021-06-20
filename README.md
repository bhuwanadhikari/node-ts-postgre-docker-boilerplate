
### Intro

This project works as boilerplate for a **node** server with **typescript**. I have used **postgresql** as the database and **typeorm**  which is a pretty good orm for typescript based node server. 

This boilerplate is **docker**ized so that you can spin up the server in any machine within an instant (you just need to have **docker** and **docker-compose** installed). Now, it's development ready but I will soon be updating on how to make the project production ready as well.

Live change in code is also reflected instantly so you do can start your development easily. 

### Tutorials 
Lets install **docker**  by going through following steps:

Update the existing packages

`sudo apt update`

Add GPG key for docker repo

`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

Now add repo to sources

`sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"`

Update after packages added

`sudo apt update`

Now install docker 

`sudo apt install docker-ce`

Check if docker daemon started

`sudo systemctl status docker`

If not you can do this:

`sudo service docker stop`

`sudo systemctl start docker`

If you want to run docker stuffs without typing sudo, you can do this:

` sudo gpasswd -a $USER docker`


Now lets install **docker-compose**
This command downloads docker-compose executable in `/usr/local/bin/docker-compose` which makes it globally available to execute as `docker-compose` command.

`sudo curl -L "https://github.com/docker/compose/releases/download/1.28.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
`

Make `docker-compose` executable

`	sudo chmod +x /usr/local/bin/docker-compose`

Check your `docker` and `docker-compose` version from following commands

`docker version`

`docker-compose version`

You can also run `hello-world` container to see if docker is working

` docker run hello-world`

Above tutorial is primarily made for ubuntu based system but you can follow [official docker docs](https://docs.docker.com/engine/install/) for your desired machine.

### Setting up the things
After you successfully clone the project,  to be able to run our dev environment we need to set environment variables, which is done by creating a `.env` file at the project root with the contents like in file `.env.example`. Those environment variables will be used by `docker-compose.yaml` file and are set in the respective containers. 

**Now,  you can run following command from your project root to spin the server up.** It will pull the necessary images from the docker hub and you will be ready for the development.

`docker-compose up --build -d`

There will be altogether 3 containers running, one for node server, one for postgresql server and the another for postgres admin.
The node server will be running at `localhost:8080` and you will also be able to access postgresql admin at `localhost:8000`.

To access the database through the pg-admin, you should login using pg-admin credentials you have set in .env file and also you have to connect to the postgres database by creating new server in the pg-admin panel stating name and credentials of the postgres. For host remember, that you have to set `postgres` not `localhost` and port as `5432`.

Postgresql will have `helldb` created as default as `dbscripts/01-init.sh` will run in default when `postgres` container spin up. 

To utilize the **hot reload** feature, you can do some changes in code and see if it's working or not.  This is possible because of  volume mapping feature in docker.  You can see the logs using following command.

`docker logs --follow node-ts-postgre `

or just 

`docker-compose up ` 

will show logs of all the containers in subsequent ups of containers.



You can stop all those running containers by the following command

`docker-compose down` 




