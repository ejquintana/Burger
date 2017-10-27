const orm = require("../config/orm.js");

// An object that is exported to burgers-controller,js
//calling the functions from the orm.js file
var bORM = {
  	selectAll: (response) => {
  		orm.selectAll((data) => {
  			response(data);
  		});
  	},
    insertOne: (burger_name, response) => {
      orm.insertOne(burger_name, (data) => {
        response(data);
      });
    },
    updateOne: (id, response) => {
      orm.updateOne(id, (data) =>{
        response(data);
      });
    },
    deleteOne: (id, response) => {
      orm.deleteOne(id, (data) => {
        response(data);
      });
    }
}

module.exports = bORM;