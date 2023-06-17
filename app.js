const express = require('express');
const mysql = require('mysql')

const app =express();
const port= 3300;


const connection = mysql.createConnection({
    host: "Harish56q.mysql.pythonanywhere-services.com",
    user: "Harish56q",
    password: "root",
    database: "harish"
  });

connection.connect((err) =>{
if (err) throw err;
console.log(" connected to mysql server");
});

// app.set('view engine', 'ejs');

// app.use(express.urlencoded({ extended: false}));

// app.get('/', ( req,res) => {
//   res.render('form');
// });
  
// app.listen( port , () =>{
// console.log(" run succesfully ");
// });