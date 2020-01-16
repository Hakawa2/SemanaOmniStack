const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

// Tipos de parâmetros:
//Query Params: request.query (Filtros, ordenação, paginação ...)
//Route Params: request.parms (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro )

//MongoDB (Não-relacional)

app.use(express.json());
app.use(routes);

mongoose.connect(
  "mongodb+srv://hakawa:alveshakawa12@cluster0-13acy.mongodb.net/week10?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

app.listen(3333);
