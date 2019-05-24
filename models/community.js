var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function (sequelize, DataTypes){ 
  var Community = sequelize.define("Community", {
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
    email: {
      type: DataTypes.STRING,
      required: true
    }});
 // console.log(Community);
 Community.sync();
 module.exports = Community;
  return Community;
};
