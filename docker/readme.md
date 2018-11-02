## Docker

There are two setups in this repo, a Polymer App and a React App. Neither currently uses the backend-api.

## Run the Polymer App

* `dc-up-polymer-compose.sh` to launch container
* `polymer-app/serve-build-es6.sh` to launch the es6 build to `localhost:8000`
* `polymer-app/ssh-container.sh` to log into the container

## Run the React App

* `dc-up-react-compose.sh` to launch container
* `polymer-app/serve-build.sh` to launch the es6 build to `localhost:9000`
* `polymer-app/ssh-container.sh` to log into the container

## References

* Common commands - https://github.com/kyledinh/docker/blob/master/dev-guide.md
