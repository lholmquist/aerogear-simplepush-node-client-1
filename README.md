# aerogear-simplepush-node-client

Node Sender API for the AeroGear SimplePush Server

## Getting Started

### Pre Reqs:
* node.js
* npm
* git

### Building

clone and install:

    $ git@github.com:aerogear/aerogear-simplepush-node-client.git

    $ cd aerogear-simplepush-node-client

    $ npm install

### Add to a Project

In your project do

    npm install path/to/aerogear-simplepush-node-client

### Using the CLI

You can also use the command line to send a message to the SimplePush Server

clone and install and link:

    $ git@github.com:aerogear/aerogear-simplepush-node-client.git

    $ cd aerogear-simplepush-node-client

    $ npm install

    $ npm link

    $ simple-push -u SIMPLE_PUSH_ENDPOINT -v SOME_VERSION_NUMBER

_if the -v flag is not provided, it will use new Date().getTime()_
