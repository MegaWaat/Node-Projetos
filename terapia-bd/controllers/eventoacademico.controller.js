
const model  = require("../models");

const EventoAcademico=model.eventoacademicoModel;
//promesis
const create = (request,response) =>{
EventoAcademico.create(request.body).then((object)=>{
    response.send(object.dataValues);

}).catch((error)=>{
  console.error(error);
  response.status(400).send(error);
});
};

module.exports={
    create,
}