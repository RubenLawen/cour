const express = require("express");
const getAllProduct = require("../models/getAllProduct");
var router = express.Router();

// endpoint will return home 
router.get('/', async (req,res) => {
    const allProduct = await getAllProduct();
    if(allProduct) return res.render("layout", {title: "Home | page d'accueil", content: "content/home", data: allProduct})
    return res.render("layout", {title: "Home | page d'accueil", content: "content/home", data: []})
});

module.exports = router