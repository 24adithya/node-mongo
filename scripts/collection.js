//Import Mongo client
MongoClient = require('mongodb').MongoClient;
//Import Mongo Server
Server = require('mongodb').Server;
//Import Mongo DB
Db = require('mongodb').Db;


//Create a Db instance for the local database as discussed earlier.
var db = new Db('local', new Server('localhost', 27017));

db.open(function(error, db) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connection to \'local\' Db is successful ');
        displayCollections();
    }
});

function displayCollections() {
    //Open collections in DB
    db.collections(function(error, collections) {
        if (error) {
            console.log(error);
        } else {
            console.log("Collections in database local");
            console.log(collections);
            displaySingleConnectionDetails();
        }
    });
}

function displaySingleConnectionDetails() {
    //Open mongo db collection instance
    db.collection('mongodb', function(error, collection) {
        if (error) {
            console.log(error);
        } else {
            console.log("Got collection from local database, collection name: " + collection.collectionName);

            collection.isCapped(function(error, result) {
                console.log("Is collection capped?: " + result);
            });
            collection.count(function(error, result) {
                console.log("Document count in the collection: " + result);
            });

            createSingleColl();
        }
    });
}

//Create a collection called 'catalog'
function createSingleColl() {
    db.createCollection('catalog', function(error, collection) {
        if (error) {
            console.log(error);
        } else {
            console.log("Collection created. Collection name: " + collection.collectionName);
            renameSingleColl();
        }
    });
}

function renameSingleColl() {
    //Rename collection 'catalog' to 'catalogColl'
    db.renameCollection('catalog', 'catalogColl', function(error, collection) {
        if (error) {
            console.log(error);
        } else {
            console.log("Collection created. Collection name: " + collection.collectionName);
            dropSingleColl();
        }
    });
}

function dropSingleColl() { //Drop collection 'catalogColl'
    db.dropCollection('catalogColl', function(error, result) {
        if (error) {
            console.log(error);
        } else {
            console.log("Collection mongocoll dropped: " + result);
        }
    });
}