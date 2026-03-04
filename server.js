const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',     
    password: 'root',     
    database: 'rpv' 
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no MySQL:', err);
    } else {
        console.log('Conectado ao MySQL com sucesso!');
    }
});


app.post('/enviar', (req, res) => {
    const { nome, email, mensagem } = req.body;

    const sql = "INSERT INTO mensagens (nome, email, mensagem) VALUES (?, ?, ?)";
    
    db.query(sql, [nome, email, mensagem], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: 'Erro ao salvar mensagem' });
        } else {
            res.status(200).send({ message: 'Mensagem enviada com sucesso!' });
        }
    });
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});