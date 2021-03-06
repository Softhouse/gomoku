gomoku
======

An example application for experimenting with TDD and refactoring

##Installation

### Install node.js 6.10

Node.js is available at [http://nodejs.org/](http://nodejs.org/)

### Install command line tools

For all the installations below, you might need to be administrator/root. If the installations fail, use sudo (if in *nix) or elevate the cmd program to run as Administrator (if in Windows).

#### Grunt-cli

	npm install -g grunt-cli


This will install the command line for performing most build tasks, such as running unit tests and starting our app
in a local web server.

### Install local packages

	cd <path-to-gomoku-working-dir>
	npm install

This will install all local packages needed by our application.

### Test the installation

#### Running tests

	grunt karma

This should run our (single) unit test. This test run should fail with:


    ✖ 3 equals 2

#### Running web server and monitor file changes

	grunt

This will start our web server and begin monitor our files for changes.

Point your web browser to `http://localhost:3000`. You should see a game board with four game pieces positioned in
each corner.

Edit the file `gomoku/test/specs/failure.spec.js`, and change the line `expect(3).to.equal(2)` to
a valid assertion, and then save the file.

The change to the test should automatically be picked up by grunt, causing it to successfully re-run our tests.
