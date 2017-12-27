//const MongoClient = require('mongodb').MOngoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ImageApp', (err, db) => {
    if (err) {
     return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a42cbfd4ff0bcc345af38ef')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a2f6d54b178225e147fd0b3')
    }, {
        $set: {
            name: "Karen"
        }}, {
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
        console.log(result);
    })

//db.close();
});