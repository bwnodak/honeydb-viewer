# HoneyDB Client

HoneyDB is a community driven honeypot data aggregation site. This client is for displaying the last 24 hours of bad host activity in the HoneyDB network and providing geolocation details of those bad hosts.

Per the HoneyDB API docs:

> A bad host is a host on the Internet that has connected or attempted to connect to one of the honeypots that feed data to HoneyDB. In general, there is no legitimate reason for any host to connect to these honeypots. So those that do can be considered bad, and a potential threat. If you see connectivity from any of these hosts on your network it may be malicious and may require some investigation.

## Setup

Run `yarn` to install all dependencies.

Generate an API key at [HoneyDB](https://honeydb.io/login).

Add a `.env.local` file to the project root with the following environment variables to enable API access:

```
REACT_APP_API_ID="...generated-id..."
REACT_APP_API_KEY="...secret-key..."
```

Run `yarn start` to begin. More avaialble scripts are described below.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
