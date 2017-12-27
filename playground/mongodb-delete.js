//const MongoClient = require('mongodb').MOngoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ImageApp', (err, db) => {
    if (err) {
     return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat Lunch'
    // }).then((result) => {
    //     console.log(result);
    // })
    // db.collection('Users').deleteMany({
    //     name: 'Karen Posada'
    // }).then((result) => {
    //     console.log(result);
    // })
    //deleteOne
    // db.collection('Todos').deleteOne
    //     ({text: 'Eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // })
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5a3f3bdcdc3e3f0da880c585")
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    })


    //db.close();
});