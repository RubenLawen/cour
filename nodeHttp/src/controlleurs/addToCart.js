const express = require("express");
const { insertCart } = require("../models/actionCart");
const getAllProduct = require("../models/getAllProduct");
var router = express.Router();

// img endpoint who will add to cart 
router.post('/:id', async (req,res) => {
    const respons = await insertCart(parseInt(req.params.id))
    const allProduct = await getAllProduct()
    if(respons) return res.render("layout", {title: "Home | page d'accueil", content: "content/home", data: allProduct ? allProduct : [], respons: true})
    return res.render("layout", {title: "Home | page d'accueil", content: "content/home", data: allProduct ? allProduct : [], respons: false})
});

module.exports = router