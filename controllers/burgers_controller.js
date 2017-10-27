const express = require("express");
const bORM = require("../models/burger.js");

const router = express.Router();

//Select *
router.get("/", (req, res) => {
    bORM.selectAll ((data) => {
        res.render("index", {burger:data});
    });
});

//Add burger
router.post("/", (req, res) => {
    bORM.insertOne(req.body.burger, (result) => {
        console.log(result);
        res.redirect("/");
  });
});

//Burger Status
router.put("/:id", (req,res) => {
    bORM.updateOne(req.params.id, (result) => {
        console.log(result);
        res.redirect("/");
  });
});

//Delete Burger
router.delete("/:id", (req,res) => {
    bORM.deleteOne(req.params.id, (result) => {
      res.redirect("/");
    });
});

module.exports = router;