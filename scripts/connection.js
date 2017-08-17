MongoClient = require('mongodb').MongoClient;
var mongoClient = new MongoClient();

mongoClient.connect("mongodb://localhost:27017/test", function(error, db) {
    if (error)
        console.log(error);
    else
        console.log('Connected with MongoDB');
});