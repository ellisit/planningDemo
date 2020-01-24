const express = require('express')
const app = express()
const mysql = require('mysql');
//connexion en base de données
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'raie_creation'
  })

  // execute la query qaund on arrive sur la route  '' / ''
app.get('/', function (req, res) {
    // recupere tous les meeting 
    connection.query(`SELECT * FROM meeting `, ((err, result) => {
        console.log(result);
        res.send(result)
    }))
    
})

app.delete('/delete/:id', function(req,res) {
    //delete un meeting avec sont id
    connection.query(`DELETE FROM meeting WHERE id = ${req.params.id}]`, ((err, result) => {
        if (err){
            console.log(err);
        }
    }));
})

app.put('/modifier/:id', function(req,res){
    //modifie un meeting avec sont id 
    console.log(req.params);
    
    //connection.query(`UPDATE meeting SET completed = ? WHERE id = ${req.params.id} `)
});

app.post('/ajout', function (req, res) {
    // ajoute un eeting avec un id
    console.log(req.body);
    
    //connection.query(`INSERT INTO meeting (dateStart, dateEnd, description, salon_id, service_id, user_id) VALUES (${req.body}) `)
    res.send(req.body)
  })
  




app.listen(3000, function () {
  console.log('server started')
})