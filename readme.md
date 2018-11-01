## Docker

Use the `docker/` directory and `docker-compose-up.sh` to launch the Docker container(s).

## Polymer Container

Use `docker/polymer-app/ssh-container.ssh` to ssh into the Polymer container. The `app/` directory is mapped to the container's  `/usr/src/app/` directory.

In the container you have a Node 10 environment with the Polymer CLI.

* To run the es6 build `polymer-app/serve-build-es6.sh` and navigate brower to `http://127.0.0.1:8000/`


### Polymer Commands

* `npm run build`
* `npm test`
* `npm start build/es6-bundled`

### To start a new project use

* `polymer init polymer-3-starter-kit`

## References

* https://www.polymer-project.org/3.0/start/install-3-0
