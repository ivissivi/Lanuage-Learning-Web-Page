const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();

const saltRounds = 10;

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({
  key: 'userID',
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  },
}));

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'user_details',
});

app.post('/register', (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {

    if (err){
      console.log(err);
    }

    db.query('INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, hash],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send('Values inserted');
        }
      }
    );
  });

});

app.get('/login', (req, res) => {
  if (req.session.user) {
    res.send({loggedIn: true, user: req.session.user});
  } else {
    res.send({loggedIn: false});
  }
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query('SELECT * FROM users WHERE email = ?;', email,

    (err, result) => {
      if (err) {
        console.log({
          err: err
        });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({
              message: "Nepareizs e-pasts un / vai parole"});
          }
        });
      } else {
        res.send({
          message: "Lietotājs ar tādu e-pastu nepastāv"
        });
      }
    }
  );
});

app.listen(3001, () => {
  console.log('Server on port 3001');
});
