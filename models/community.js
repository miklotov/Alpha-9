var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function (sequelize, DataTypes){ 
  var Community = sequelize.define("Community", {
   // var Community = sequelize.define("community_db", {  
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    first_name: {
      type: DataTypes.STRING,
      required: true
    },
    last_name: {
      type: DataTypes.STRING,
      required: true
    },
    qty: {
      type: DataTypes.INTEGER,
      required: true
    },
    item: {
    type: DataTypes.STRING,
    required: false
    },
    email: {
      type: DataTypes.STRING,
      required: true
    }});
 // console.log(Community);
 Community.sync();
 module.exports = Community;
  return Community;
};
