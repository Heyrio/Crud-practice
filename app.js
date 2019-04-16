//This js file is the main running server

const express = require('express');
const ejs = require('ejs');
const app = express();
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const URL = 'mongodb+srv://heyrio:<password>@cluster0-7cpbz.mongodb.net/test?retryWrites=true';
const database = 'Crud-Data';



//including middleware so we can parse post requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


// Template engine for rendering is EJS
app.set('view engine', 'ejs');

//Specifies the directory of the static files to serve
app.use(express.static(__dirname + '/public/'));

//rendering the main home page
app.get('/',(req, res)=>{
	res.render('index');
	
})

//Opens a port to listen on
app.listen(3000,()=>{
	console.log('Server is now running...')
});

  
MongoClient.connect(URL, {useNewUrlParser: true}, (error, client)=>{
    if(error){
        return console.log('Could not connect to the database');
    }
	const db = client.db(database);
	
	app.post('/',(req, res)=>{
		var userName = req.body.name;
		db.collection('User').insertOne({ name: userName });
		res.render('index');
	});
console.log('Database is connected...')
});