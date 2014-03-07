# Intro ##
Walmart Mobile mWeb Automation Test Framework

## Installation ##
* Install ChromeDriver  ```brew install chromedriver``` or download [here](http://chromedriver.storage.googleapis.com/index.html)  and add it to your PATH 
* Install [Node.js >= v0.10.25 and npm](http://nodejs.org/)
* Install all node package dependencies:

```bash
$ rm -rf node_modules
$ npm install
```

## Usage ##

* Run with [mocha](http://visionmedia.github.io/mocha/):

```bash
# run all tests
$ ./node_modules/.bin/mocha
# run single test suite
$ ./node_modules/.bin/mocha test/guestcheckout.js
```
