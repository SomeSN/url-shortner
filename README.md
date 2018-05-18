# URL Shortener

This application shortens URLs. If no short URL is given, it creates a random short URL for the user. It was built from scratch entirely with Javascript.


## Getting Started

Clone the repo: https://github.com/SomeSN/url-shortener.git to your desktop.

### Prerequisites
Node.js, npm, and MongoDB must be installed. If you need to install, please see below: 

### Installing

1. Make sure you have node.js and npm installed and running. If you do not have these installed, go to https://www.npmjs.com/get-npm for more information and instructions.  
If you are not sure if you have npm/node.js, type the following commands in your terminal to check:

For Node.js, in your terminal type:

node -v

For npm, in your terminal, type:

npm -v

To update the latest version of npm in your terminal type:

npm install npm@latest -g


2. You will need the following npm packages & their dependencies:     

    body-parser
    cors
    errorhandler
    express
    mongo
    mongoose
    morgan


3. Download and install (if you haven't already) MongoDB.

Follow the instructions here: https://docs.mongodb.com/manual/administration/install-community/

You may also with to install brew (but not mandatory): https://brew.sh/


## Deployment
You must run node.js and MongoDB simultaneously to run the app.

1. MongoDB is run globally, so in terminal (it doesn't matter where) type:

mongod

2. open a new terminal window and type:

 mongo

3. Now its time to run node.js

4. Open a third terminal window. Navigate to the
url-shortener/server folder. Then type:
node app.js

5. open index.html file in your browswer

6. Try the app :)

## Built With

* [MongoDB](https://docs.mongodb.com/) - Database Program
* [Homebrew](https://brew.sh/) - Dependency Management
* [Express](https://expressjs.com/) - Framework


## Authors
Team Members:
Noi @Noi-Git
Amm @Saranrat13
Megan @Miss-Megan
TK @SomeSN


## Acknowledgments

* Thank you Sarah Van Wart & Ricky Holtz for all your time and attention. We really appreciate it. You two are the best!
