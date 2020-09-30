const express = require("express");
const { request } = require("http");
const model  = require("./models");
const routes = require("./routes/eventoacademico.route.js");

const cors = require('cors');

const app= express();
const Endereco=model.EnderecoModel;
//EndPoint para criar um endereço
app.use(express.json());
app.use(cors({origin: "http://localhost:8080" }));
app.use("",routes);

app.post("/endereco",(request,response)=>{
  Endereco.create(request.body).then((object)=>{
      response.send(object);

  }).catch((error)=>{
    console.log(error);
    response.sendStatus(500);
  })
});
//end point para buscar um endereço ip
app.get("/endereco/:id,",(request,response)=>{
    const id = request.params.id;
    Endereco.findByPk(id)
});
//Inicialização do servidor
app.listen(8888,(request,response)=>{
    console.log("Estamos no ar e ao vivo");
});

