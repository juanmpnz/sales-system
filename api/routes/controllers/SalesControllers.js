const {Sale} = require("../../models");

const createSale = (req,res,next)=>{

    const {date,ticket,code,delivered,model,clientName,clientPhone,clientAddress,observations,paymentMethod,totalPrice,prePayment,restPay} = req.body

    Sale.create({date,ticket,code,delivered,model,clientName,clientPhone,clientAddress,observations,paymentMethod,totalPrice,prePayment,restPay })
        .then((sale) => {
          res.status(201).send(sale);
        })
        .catch((e) => res.send(e));
    }

    const getIndividualSale= (req,res,next) =>{
        Sale.findAll({where:{id: req.params.id}})
        .then((link)=> res.send(link))
        .catch((e) => res.send(e));
    }

    const getAll =(req,res,next)=>{
        Sale.findAll().then((sales)=>{
            res.status(200).send(sales)
        }).catch((e)=>e)
    }

module.exports = {
    createSale,
    getAll,
    getIndividualSale
  };
