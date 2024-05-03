import express from "express"
import pkg from "pg";

const app = express();

app.use(express.json()); // A aplicação irá entender e retornar as respostas em 'JSON'

const { Pool } = pkg;

const pool = new Pool({   // Conexão com o banco de dados
    user:'postgres' ,
    host:'localhost',
    database:'certidao_debito',
    password:'Senha_exemplo123',
    port: 5432
})

const clientes = [      // Array criado na própria aplicação
    {"id": 1, "nome": "Gabriel", "idade": "21"},
    {"id": 2, "nome": "João", "idade": "27"}];

app.get("/clientes", async ( request, response) =>{  // "/clientes" -> Rota
    const { rows } = await pool.query('SELECT * FROM clientes')
    return response.status(200).json(rows) 
})

app.post("/cliente", async (request, response) =>{
    const { nome, email, telefone } = request.body;  // Recebendo os dados do 'Request.body'
   //clientes.push({"nome": nome, "idade": idade}); --> Passando os dados para o Array 'clientes' pelo 'push' na tabela local
    const cliente = await pool.query('INSERT INTO cliente(nome, email, telefone) VALUES ($1, $2, $3)', [nome,email,telefone])
   return response.status(200).json(cliente);
})

app.put("/cliente/:id", async (request, response) =>{
    const { id } = request.params;
    const { nome, email, telefone } = request.body
    const cliente = await pool.query('UPDATE clientes SET nome = $1, email = $2, telefone = $3 WHERE id = $4', [nome,email,telefone,id])
    return response.status(200).json({"nome": nome, "email": email, "telefone": telefone}); 
})

app.delete("/cliente/:id", async (request, response) =>{
    const {id} = request.params;
    const cliente = await pool.query('DELETE FROM clientes WHERE id = $1', {id})
    return response.status(204).send(); //.send autoriza enviar sem ter qualquer informação pendente

})

app.listen(3000, () => {
    console.log("Runningg server")

})