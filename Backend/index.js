const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

// var dbName = "myDatabase";
var dbName = "signupdb";

// var client = new MongoClient( 'mongodb://localhost:27017/corona-project', {useNewUrlParser:true});

// var client = new MongoClient('mongodb+srv://user_1:manasvin@mydatabase-tgcov.mongodb.net/dbName?retryWrites=true&w=majority', { useNewUrlParser: true },);

var client = new MongoClient('mongodb+srv://admin:corona19@cluster0-towpt.mongodb.net/dbname?retryWrites=true&w=majority', { useNewUrlParser: true },);



var connection;
client.connect((err, con) => {

    if (!err) {
        connection = con;
        console.log("database connected successfully");
    }
    else {
        console.log("database could not connect");
    }
})



const app = express();

app.use(cors());


app.get('/', (req, res) => {

    res.send({ status: "ok", data: "this is a test api" });
})




app.get('/user', (req, res) => {
    var id = req.query.id;
    res.send({ status: "ok", data: [{ name: "X", age: 78, id: id }, { name: "Y", age: 67 }] });
})


app.post('/sign-in', bodyParser.json(), (req, res) => {

    var collection = connection.db(dbName).collection('users');

    collection.find(req.body).toArray((err, docs) => {
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
}

)



app.post('/sign-up', bodyParser.json(), (req, res) => {

        var collection = connection.db(dbName).collection('users');

        collection.find({ email: req.body.email }).toArray((err, docs) => {
        if (!err && docs.length > 0) {
            res.send({ status: "id already exists", data: docs })
        }
        else {

            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success" });
                }
                else {
                    res.send({ status: "failed", data: err });
                }
            })

        }
    })

})




app.post('/corona-tracker', bodyParser.json(), (req, res) => {

    var collection = connection.db(dbName).collection('user_2');

    collection.find({ email: req.body.email }).toArray((err, docs) => {
    if (!err && docs.length > 0) {
        res.send({ status: "location already exists", data: docs })
    }
    else {

        collection.insert(req.body, (err, result) => {
            if (!err) {
                res.send({ status: "ok", data: "location saved" });
            }
            else {
                res.send({ status: "failed", data: err });
            }
        })

    }
})

})






app.post('/get-locations', bodyParser.json(), (req, res) => {

    var collection = connection.db(dbName).collection('user_2');

    collection.find().toArray((err, docs) => {
        if (!err) {
            res.send({ status: "ok", data: docs })
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
})




app.listen(3000, () => { console.log("server is listining on port 3000") });