MongoClient = require('mongodb').MongoClient;
Db = require('mongodb').Db;
Server = require('mongodb').Server;
var mongoClient = new MongoClient();

//Create a 'new' db instance
var db = new Db('mongo', new Server('localhost', 27017));

//Connect to db using mongoclient
mongoClient.connect("mongodb://localhost:27017/test", function(error, db) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected with MongoDB');

        db.listCollections().toArray(function(err, items) {
            console.log('\ndb : ');
            console.log(db);
            console.log('\nitems : ');
            console.log(items);
            db.close();
        });

    }
});