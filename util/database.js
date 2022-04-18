const Sequelize = require('sequelize');

const sequelize=new Sequelize('nodecomplete','root','Yash123$',{dialect:'mysql',host:'localhost'});
module.exports = sequelize;