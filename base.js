const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// link to the databse connection
const URL = 'mongodb+srv://heyrio:<PASSWORD>@cluster0-7cpbz.mongodb.net/test?retryWrites=true';

// name of the collection
const database = 'Crud-Data';

//////////////////////////////////////////////////////////////////////////




var userDataFinal = function getUserName(user){
    console.log(user);
}

module.exports = {userDataFinal};



////////////////////////////////////////////////////////////////////////


    // connects to the database
MongoClient.connect(URL, {useNewUrlParser: true}, (error, client)=>{
    if(error){
        return console.log('Could not connect to the database');
    }

    // creates a new collection 
    const db = client.db(database);

    // adds a document to the designated collection
    // db.collection('User').insertOne(userDataFinal);

    
console.log('Database is connected...')
});