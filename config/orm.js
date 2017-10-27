const connection = require("./connection.js");

var orm = {
  //Select *
  selectAll: function(response) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, (err, data) => {
      if (err) throw err;
      response(data);
    });
  },
  //Insert Burger Name and status
  insertOne: function(burger, response) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
    connection.query(queryString, [burger, false], (err, data) => {
      if (err) throw err;
      response(data);
    });
  },
  //Add Burger via SQL
  updateOne: function(id, response) {
    var queryString = "UPDATE burgers SET ? WHERE ?";
    connection.query(queryString, [{ devoured: true }, { id:id }], (err, data) => {
      if (err) throw err;
      response(data);
    });
  },
  //Delete
  deleteOne: function(id, response) {
    var queryString = "DELETE FROM burgers WHERE ?";
    connection.query(queryString, [{ id:id }], (err, data) => {
      if (err) throw err;
      response(data);
    });
  }

};

module.exports = orm;