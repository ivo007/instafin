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


## Setup

### Global installation

Install Selenium Standalone package

<code>$ yarn global add selenium-standalone</code>

Download drivers

<code>$ selenium-standalone install</code>

Run Selenium (make sure it's in separate terminal window!)

<code>$ selenium-standalone start</code>

### Project installation

First, install all dependencies:

<code>$ yarn</code>

Configurate webdriverio. It is already configured to my liking, but you can tweak it to your own style. 

<code>$ /node_modules/.bin/wdio config</code>

Rename <code>.env.example</code> to <code>.env</code> and input your own credentials.

## Run the project

Run tests locally

<code>$ npm run-script test:local</code>

Run tests on Sauce Labs

<code>$ npm test</code>

For running tests on TravisCI, enable your forked repo in TravisCI and push some new code.

 Set these credentials in in Travis project settings as environmental variables:
 INSTAFIN_USERNAME, INSTAFIN_PASSWORD, SAUCE_USERNAME, SAUCE_ACCESS_KEY
[see documentation](https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings)


(detailed CI instructions TBD)
