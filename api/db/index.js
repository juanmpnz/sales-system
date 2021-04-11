const Sequelize = require('sequelize')

const db = new Sequelize({
 dialect: 'sqlite',
    storage: 'sqlite/system-mad.db' ,
    logging: false,  
  });


module.exports = db
