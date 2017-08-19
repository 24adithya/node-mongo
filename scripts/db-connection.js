Db = require('mongodb').Db;
Server = require('mongodb').Server;
var db = new Db('local', new Server('localhost', 27017));
db.open(function(error, db) {
    if (error)
        console.log(error);
    db.listCollections().toArray(function(error, items) {
        console.log(items);
        db.close();
    });
});