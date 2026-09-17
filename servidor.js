const express = require("express");

const app = express();

let alunos = [
    {id: 1, nome: "Julia", curso: "Desenvolvimento de sistemas"},
    {id: 2, nome: "Fernanda", curso: "Redes de computadores"},
    {id: 3, nome: "Anna", curso: "Banco de dados"},
    {id: 4, nome: "Camily", curso: "Administração"},
    {id: 5, nome: "Maria", curso: "Desenvolvimento de sistemas"},
];

app.get("/",(req,res) =>{
    res.json({
        mensagem: "API Alunos funcionando"
    })
})

const PORTA = 3000;
app.listen(PORTA, ()=>{
    console.log("Servidor Iniciado com sucesso");
    console.log(`http://localhost:${PORTA}`);
} )