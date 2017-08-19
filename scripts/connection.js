MongoClient = require('mongodb').MongoClient;
var mongoClient = new MongoClient();

mongoClient.connect("mongodb://localhost:27017/test", function(error, db) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Connected with MongoDB');

        db.listCollections().toArray(function(err, items) {
        	/*console.log('\ndb : ');
        	console.log(db);
            console.log('\nitems : ');
            console.log(items);*/
            console.log(items);
            db.close();
        });

    }
});