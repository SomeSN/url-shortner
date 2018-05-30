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

5. Open localhost:3000 in your browser.

6. Try the app :)

## Version Notes

2.0.0:
	- Moved database functionality to its own module. All database queries were replaced with calls to getExistingURL which queries the database and returns the query which is then run using query.exec.
	NOTE: This was done to facilitate making validation easier.

	- Validation functionality: Extremely expanded what is validated:
		- The length of the short URL must be at least 7 characters long. This is redundantly validated on both the client and server side.
		- The client side original URL validation has been removed for data saving purposes.
		- Server side original URL validation has been added. It checks to see whether the URL is a legal URL (starts with 'http' or 'localhost') and then attemps to fetch the website to make sure the URL destination exists.
		- If the user leaves the shortened URL are blank, then a random shortened URL will be generated. This cannot generate a URL that already exists in the database. If it fails to generate a new shortened URL 100 times it returns an internal server error and asks the client to either input a URL manually or try again.
		- It checks to see if the shortened URL already exists, and if it does, informs the user of this and reminds them where it redirects to.
	
	- Clean up refactoring such as removing unnecessary requires due to the consolidation of functionality into modules and removing redundant variables.

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
