//Import Mongo client
MongoClient = require('mongodb').MongoClient;
//Import Mongo Server
Server = require('mongodb').Server;
//Import Mongo DB
Db = require('mongodb').Db;

//Create a Db instance for the local database as discussed earlier.
var db = new Db('local', new Server('localhost', 27017));

//Create a Db instance for the local database as discussed earlier.
var db = new Db('local', new Server('localhost', 27017));

db.open(function(error, db) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connection to \'local\' Db is successful ');
        // getInputFromUser();
        getInputFromUserUsingReadline().then((result) => {
            console.log(`User entered : `+ result);
            createCatalogColl(result);
        }, (error) => {
            console.log(`Error encountered $error`);
        });
    }
});

//Create a collection called 'catalog'
function createCatalogColl(collectionName) {
    db.createCollection(collectionName, function(error, collection) {
        if (error) {
            console.log(error);
        } else {
            console.log("Collection created. Collection name: " + collection.collectionName);
            openCatalogCollection(collectionName);
        }
    });
}

function openCatalogCollection(collectionName) {
    db.collection(collectionName, (error, collection) => {
        if (error) {
        	console.log(error);
        } else {
            console.log("Collection opened : " + collection.collectionName);
            insertDocument(collection);
        }
    })
}

function insertDocument(collection) {
    var catalog = {
        "_id": '24',
        "journal": 'Harry Potter',
        "publisher": '24 publisher ',
        "edition": 'Best!',
        "title": 'Adams',
        "author": 'Adams'
    };

    collection.insertOne(catalog, (error,  result) => {
    	if(error) {
			console.log(error);
		}
		else {
			console.log(`Document inserted : ` + result);
		}
    });
}

function getInputFromUser() {
    var stdin = process.openStdin();

    stdin.addListener("data", (input) => {
        // note: 'input' is an object, and when converted to a string it will
        // end with a linefeed.  so we (rather crudely) account for that  
        // with toString() and then trim() 
        console.log("you entered:" + input.toString().trim());

        //createCatalogColl();
    });
}

function getInputFromUserUsingReadline() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // readline.question('What do you think of Node.js? ', (answer) => {
    //     // TODO: Log the answer in a database
    //     console.log(`Thank you for your valuable feedback: ${answer}`);

    //     readline.close();
    // });
    console.log(`Enter collection name`);
    readline.prompt();

    return new Promise((resolve, reject) => {
        readline.on('line', (input) => {
            return resolve(input) /*.split(" ")[0]*/ ;
            readline.close();
        });
    });

    readline.on('close', () => {
        console.log('Have a great day!');
        // process.exit(0);
    });
}