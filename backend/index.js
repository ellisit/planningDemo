const express = require('express')
const app = express()
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'raie_creation'
  })

app.get('/', function (req, res) {
    
    connection.query(`SELECT * FROM meeting `, ((err, result) => {
        console.log(result);
        res.send(result)
    }))
    
})

app.delete('/delete/:id', function(req,res) {
    connection.query(`DELETE FROM meeting WHERE id = ${req.params.id}]`, ((err, result) => {
        if (err){
            console.log(err);
        }
    }));
})

app.put('/modifier/:id', function(req,res){
    console.log(req.params);
    
    //connection.query(`UPDATE meeting SET completed = ? WHERE id = ${req.params.id} `)
});

app.post('/ajout', function (req, res) {
    console.log(req.body);
    
    //connection.query(`INSERT INTO meeting (dateStart, dateEnd, description, salon_id, service_id, user_id) VALUES (${req.body}) `)
    res.send(req.body)
  })
  




app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})