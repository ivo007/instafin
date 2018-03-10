[![Build Status](https://travis-ci.org/ivo007/instafin.svg?branch=master)](https://travis-ci.org/ivo007/instafin)

## Testing Instafin features ##

### Test Suite: Users

#### Test Suite: User Manipulation

**Test Case: Create user**

check that user is created

**Test Case: Edit user**

check validity of edited information

#### Test Suite: Loan Accounts

**Test case: create loan account with 12 installments**

check that the table body of the created loan has exactly 12 + 1 rows

### Test Suite: Administration

#### Testu Suite: Deposit Products

**Test Case: check that two action buttons are present** 

..

## Features

- testing made with WebDriver.IO and Mocha
- local testing using Selenium Standalone Server
- cloud testing using Sauce Labs
- CI done with GitHub and TravisCI, which runs the Sauce Labs as well


## Installation

First, do the install.

<code>$ yarn</code>

Configurate webdriverio. It is already configured to my liking, but you can tweak it to your own style. 

<code>$ /node_modules/.bin/wdio config</code>

Rename <code>.env.example</code> to <code>.env</code> and input your own credentials.

Run Selenium server standalone (make sure it's in separate terminal window)

<code>$ java -jar selenium-server-standalone-3.9.1.jar</code>

Run the test locally

<code>$ npm run-script test:local

Run the test on Sauce Labs

<code>$ npm test</code>
