### Drizzle Custom Components
This demo is using custom Drizzle components using Drizzle store and events.
It also fires flash message when data changed.

This repository is inspired by tutorial:
https://www.youtube.com/watch?v=ApJwXfWKl7Q&t
and
https://www.youtube.com/watch?v=xyoztqeYd6U

## Dependencies
- Ganache https://www.trufflesuite.com/ganache
- Node JS
- Yarn

## Init project

### Install dependencies

```cd frontend```

```yarn install```

### Deploy contracts to blockchain

```yarn deploy```

## Run project

Run Ganache with Quickstart Workspace

```cd frontend```

```yarn serve```

### Init Metamask account

Login to Metamask

Go to Ganache and copy private key of first account

Open Metamask

Switch to Ganache Network

Click Import account

Paste private key

Connect Account

Open app on http://localhost:8080/