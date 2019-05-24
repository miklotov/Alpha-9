module.exports = function(sequelize, DataTypes){
	var User = sequelize.define("User", {
		       first_name: DataTypes.STRING,
			   last_name: DataTypes.STRING,
			   qty: DataTypes.INTEGER,
			   item: DataTypes.STRING,
			   email: DataTypes.STRING
		});
        return User;
}

// 2nd table for Security Alerts go here
// Replicate above, 2 fields for text and Ring video