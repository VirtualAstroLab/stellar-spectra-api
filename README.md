
<h1 align="center">Welcome to stellar-spectra-api :satellite:</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/VirtualAstroLab/stellar-spectra-api#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/VirtualAstroLab/stellar-spectra-api/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/VirtualAstroLab/stellar-spectra-api/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/VirtualAstroLab/stellar-spectra-api" />
  </a>
  <a href="https://hub.docker.com/repository/docker/VirtualAstroLab/stellar-spectra.api" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/docker/image-size/VirtualAstroLab/stellar-spectra.api?label=DockerHub" />
  </a>
</p>

> VirtualAstroLab/Stellar Spectra backend API

### Build Status

![Build](https://github.com/VirtualAstroLab/stellar-spectra-api/workflows/Build%20image/badge.svg)


### 🏠 [Homepage](https://github.com/VirtualAstroLab/stellar-spectra-api#readme)


## Technologies

- [NodeJs](https://nodejs.org/)
- [Restify](http://restify.com/)
- [MongoDB](https://www.mongodb.com/)
- [Winston](https://github.com/winstonjs/winston)
- [Jest](https://www.docker.com)
- [Cucumber](https://cucumber.io/)
- [Docker and docker-compose](https://www.docker.com/), for running the images without building the system.


## Prerequisites

- Node 14
- Port 3000 available (for Node serve API content)
- External conection enabled to use external database via MongoDB Atlas.
- [gpg](https://gnupg.org/) 

## Install and Running

First, clone locally this repository, then follow the instructions for running it from source or via docker-compose, along with the front end.

```sh
$ git clone https://github.com/VirtualAstroLab/stellar-spectra-api.git
$ cd ./stellar-spectra-api
```

### Unit tests

For the unit tests:

```sh
npm run test:unit
```

### Test Coverage Report

Code coverage report is located at [./reports/index.html](./reports/index.html) and can be re-generated via the command

```sh
npm run test:coverage
```

### Integration/E2E testing

For the integration/e2e tests, several `Gherkin` tests are provided using the BDD approach.The list of features can be found the the [main.feature](./test/e2e/features/stores/main.feature) file. In order to run those tests, one must first start the service in one shell window using npm:

```sh
source ./secrets/.DEV.env && npm run start
```

then run the tests on another shell (with .DEV.env loaded via `source ./secrets/.DEV.env`)

```sh
source ./secrets/.DEV.env && npm run test:e2e
```

### Smoke test

Once the application is deployed, it is possible to run a small script for smoke testing [provided](./test/e2e_restify.sh), to check if the service is online.

```sh
./test/e2e_restify.sh
```


## Running using docker-compose stack

It is also possible to run the full stack using a docker-compose file provided. It spins the api and the front end locally (although the database is still via MongoDB Atlas), enabling the user to access the front end without dependencies other that DockerHub and the database.

First decrypt `.DEV.docker.env` secrets into `.DEV.docker.env.gpg.decrypted` and move it to `.DEV.docker.env` using the `KEY` provided, as done before. 

```sh
$ ./bin/handle-secret.sh -f ./secrets/.DEV.docker.env.gpg -d --key <KEY>
$ mv ./secrets/.DEV.docker.env.gpg.decrypted ./secrets/.DEV.docker.env
```

Then, just run 

```sh
npm run stack:full:up
```
 and point your browser to 
 
 > http://localhost:8080/



## Author

👤 **Rodrigo de Souza <rsouza01@gmail.com>**

* Github: [@VirtualAstroLab](https://github.com/VirtualAstroLab)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/VirtualAstroLab/stellar-spectra-api/issues). You can also take a look at the [contributing guide](https://github.com/VirtualAstroLab/stellar-spectra-api/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Rodrigo de Souza <rsouza01@gmail.com>](https://github.com/VirtualAstroLab).<br />
This project is [MIT](https://github.com/VirtualAstroLab/stellar-spectra-api/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
