const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3300;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "djj"
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server!');
});

// Set up the view engine
app.set('view engine', 'ejs');

// Parse URL-encoded bo dies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Render the form
// app.get('/indexs', (req, res) => {
//   res.render('index.ejs');
// });
app.get('/', (req, res) => {
  res.render('index.ejs');
});


app.get('/cryptoo', (req, res) => {
  res.render('cryptoo.ejs');
});

app.get('/admin', (req, res) => {
  res.render('index.ejs');
});

app.get('/world', (req, res) => {
  res.render('world.ejs');
});
app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.get('/news', (req, res) => {
  res.render('news.ejs');
});
app.get('/about', (req, res) => {
  res.render('about.ejs');
});
app.get('/viewmsg', (req, res) => {
  res.render('viewmsg.ejs');
});
app.get('/chat', (req, res) => {
  res.render('chat.ejs');
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs');
});


app.get('/app',(req,res)=>{
res.render('app.ejs')

});
// Handle form submission
app.post('/', (req, res) => {
  const { name, number , gmails} = req.body;

  // Insert the data into the MySQL table/
  const sql = 'INSERT INTO webdb (name, number , gmails) VALUES (?, ?, ?)';
  connection.query(sql, [name, number , gmails], (err) => {
    if (err) throw err;
    console.log('Data inserted successfully!');
    res.redirect('/');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


















// const express = require('express');
// const mysql = require('mysql');

// const app = express();
// const port = 3000;

// // Create a MySQL connection
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "marklift"
// });

// // Connect to the MySQL server
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL server!');
// });

// // Set up the view engine
// app.set('view engine', 'ejs');

// // Parse URL-encoded bodies (as sent by HTML forms)
// app.use(express.urlencoded({ extended: false }));

// // Render the form
// app.get('/', (req, res) => {
//   res.render('form');
// });

// // Handle form submission
// app.post('/', (req, res) => {
//   const { name, number } = req.body;

//   // Insert the data into the MySQL table
//   const sql = 'INSERT INTO solution (name, number ) VALUES (?, ?)';
//   connection.query(sql, [name, number], (err) => {
//     if (err) throw err;
//     console.log('Data inserted successfully!');
//     res.redirect('/');
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });