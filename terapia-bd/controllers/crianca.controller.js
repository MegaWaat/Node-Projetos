const model = require("../models");

const crianca = model.CriancaModel;


const create = (request, response) => {
    const crData = {
      nome: request.body.nome,
      idade: request.body.idade,
      grau: request.body.grau,
      nomePais:request.body.nomePais,
      
    } .then((object) => {
        let result = object.dataValues;
        dataResponse = { ...dataResponse, ...result };
        response.status(200).send(dataResponse);
      })
}


//
//Lista todos os eventos acadêmicos
const getAll = (request, response) => {
    crianca.findAll({
      attributes: [
        "criancaId",
        "nome",
        "idade",
        "grau",
        "nomePais",
      ],
      raw: true,
      include: [
        {
          model: crianca,
          required: true,
          attributes: [],
        },
      ],
    })
      .then((object) => {
        console.log(object);
        response.status(200);
        response.send(object);
      })
      .catch((error) => response.status(400).send(error));
  };
  
  //Seleciona um evento acadêmico por ID
  const getById = (request, response) => {
    crianca.findByPk(request.params.id)
      .then((object) => {
        response.status(200).send(object.dataValues);
      })
      .catch((error) => {
        console.error(error);
        response.status(400).send(error);
      });
  };
  
  //Altera um evento acadêmico dado um ID
  const alterById = (request, response) => {
    const crData = {
        nome: request.body.nome,
        idade: request.body.idade,
        grau: request.body.grau,
        nomePais:request.body.nomePais,
    };
    crianca.update(paData, {
      raw: true,
      where: { criancaId: request.params.id },
    })
      .then((object) => {
        const crData = {
          criancaId: request.params.id,
          nome: request.body.nome,
           idade: request.body.idade,
           grau: request.body.grau,
             nomePais:request.body.nomePais,
        }
          .then((object) => {
            response
              .status(200)
              .send("Evento de id = " + request.params.id + " Atualizado!");
          })
          .catch((error) => {
            console.error(error);
            response.status(400).send(error);
          });
      })
      .catch((error) => {
        console.error(error);
        response.status(400).send(error);
      });
  };
  
  const deleteById = (request, response) => {
    crianca.destroy({
      where: { criancaId: request.params.id },
    })
      .then((object) => {
        if (object === 0) {
          response
            .status(200)
            .send("Nenhuma crianca foi encontrada para deletar!");
        } else {
          response
            .status(200)
            .send(
              "Crianca com id = " + request.params.id + " deletada!"
            );
        }
      })
      .catch((error) => {
        console.error(error);
        response.status(400).send(error);
      });
  };
  
  module.exports = {
    create,
    getAll,
    getById,
    alterById,
    deleteById,
  };