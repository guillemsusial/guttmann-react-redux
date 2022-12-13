const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const bcrypt = require("bcryptjs")
const app = express();
const mysql = require("mysql");

const saltRounds = 10;

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'plataforma_guttmann'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res)=>{
    const name = req.body.name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    const birth_year = req.body.birth_year;
    const studies = req.body.studies;
    const sex = req.body.sex;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        const sqlInsert = "INSERT INTO user (name, last_name, email, encrypted_password, birth_year, studies, sex) VALUES (?,?,?,?,?,?,?)"
        db.query(sqlInsert, [name,last_name,email,hash,birth_year,studies,sex], (err, result) => {
            console.log(err);
        });
    });

    
});

app.listen(3001, () => {
    console.log("running on port 3001");
});