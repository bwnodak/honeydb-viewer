# HoneyDB Viewer

HoneyDB is a community driven honeypot data aggregation site. This client is for displaying the last 24 hours of bad host activity in the HoneyDB network and providing geolocation details of those bad hosts.

Per the HoneyDB API docs:

> A bad host is a host on the Internet that has connected or attempted to connect to one of the honeypots that feed data to HoneyDB. In general, there is no legitimate reason for any host to connect to these honeypots. So those that do can be considered bad, and a potential threat. If you see connectivity from any of these hosts on your network it may be malicious and may require some investigation.

https://yonbeastie.github.io/honeydb-viewer/

[![Build Status](https://api.travis-ci.org/yonbeastie/honeydb-client.svg?branch=main)](https://travis-ci.org/github/yonbeastie/honeydb-client)

## Setup

- Run `yarn` to install all dependencies.
- Generate an API key at [HoneyDB](https://honeydb.io/login).
- Add a `.env` file to the project root mirroring the `.env.sample` file.
- Symlink the `.env` from the project root to all package directories, e.g. `ln -s ./.env ./pacakages/api/.env`.
- Run `yarn start` to begin. More avaialble scripts are described below.

## Available Scripts

In the project root, you can run:

### `yarn start`

Will start the `app` and `api` packages on ports 3000 and 4000, respectively.

The `app` package will automatically open in the default browser and auto-update on save.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
