## Docker

There are two setups in this repo, a Polymer App and a React App. Neither currently uses the backend-api.

## Run the Angular App with Datawasher API

* `dc-up-angular-compose.sh` to launch container
* `angular-app/ng-serve.sh` to launch the dev to `localhost:4200`
* `angular/ssh-container.sh` to log into the container
* The Datawasher API will auto launch to `https://localhost/create?limit=10&first_name=MOX_RFN`
* `datawasher-api/cp-dist-to-container.sh` will upload dist to the container

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
