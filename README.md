# sitmun-js

A universal client for the SITMUN public api written in Typescript

![https://img.shields.io/npm/v/@sitmun/sitmun-js](https://img.shields.io/npm/v/@sitmun/sitmun-js)

## Features

- Tiny <1KB size gzip
- Works in Node.js and in Browser
- Built-in Typescript support

## Usage

Import `sitmun-js` in the project and initialize with your user and password if required:

```js
import SitmunJs from '@sitmun/sitmun-js'

const SitmunJsClient = new SitmunJs({ basePath: 'https://sitmun-backend-core.herokuapp.com/' })

await SitmunJsClient.login(user, password)

SitmunJsClient.workspace().then((data) => {
    // data is of type Workspace
})

SitmunJsClient.workspaceApplication(applicationId, territoryId).then((data) => {
    // data is of type WorkspaceApplication
})
```
