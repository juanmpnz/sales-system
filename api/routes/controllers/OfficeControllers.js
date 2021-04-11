const {Office} = require("../../models");

const createOffice = (req,res,next)=>{
    const {officeName} = req.body
    Office.create({officeName})
        .then((office) => {
          res.status(201).send(office);
        })
        .catch((e) => res.send(e));
}

const getOffice =(req,res,next)=>{
    Office.findAll().then((offices)=>{
        res.status(200).send(offices)
    }).catch((e)=>e)
}


module.exports = {
    createOffice,
    getOffice
  };
