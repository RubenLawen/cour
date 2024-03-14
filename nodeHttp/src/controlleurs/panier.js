const express = require("express");
const { getCart, insertCart, reduceCart, deleteCartElement } = require("../models/actionCart");
var router = express.Router();

// img endpoint who will add to cart 
router.get('/', async (req,res) => {
    const cart = await getCart()
    return await res.render("layout", {title: "Home | page d'accueil", content: "content/cart", data: cart ? cart : [], respons: false})
});

router.post('/add/:id', async (req,res) => {
    const respons = await insertCart(parseInt(req.params.id))
    const cart = await getCart()
    return await res.render("layout", {title: "Home | page d'accueil", content: "content/cart", data: cart ? cart : [], respons: respons ? "La quantité à bien été augmenté" : false})
});

router.post('/remove/:id', async (req,res) => {
    const respons = await reduceCart(parseInt(req.params.id))
    const cart = await getCart()
    return await res.render("layout", {title: "Home | page d'accueil", content: "content/cart", data: cart ? cart : [], respons: respons ? "La quantité à bien été réduite" : false})
});

router.post('/delete/:id', async (req,res) => {
    const respons = await deleteCartElement(parseInt(req.params.id))
    const cart = await getCart()
    return await res.render("layout", {title: "Home | page d'accueil", content: "content/cart", data: cart ? cart : [], respons: respons ? "L'article à bien été supprimé" : false})
});


module.exports = router