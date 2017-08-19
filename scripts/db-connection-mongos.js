Db = require('mongodb').Db;
Server = require('mongodb').Server;
Mongos = require('mongodb').Mongos;

var mongos = new Mongos([new Server('localhost', 27017) /*, new Server('localhost', 50000)*/ ]);
var db = new Db('local', mongos);
db.open(function(error, db) {
    if (error) {
        console.log(error);
    } else {
        db.listCollections().toArray(function(error, items) {
            console.log(items);
            db.close();
        });
    }
});