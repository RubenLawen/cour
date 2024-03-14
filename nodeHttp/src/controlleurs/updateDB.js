const express = require("express");
const updateProduct = require("../models/updateProduct");
var router = express.Router();

// img endpoint who will return home 
router.get('/', async (req,res) => {
    const repons = await updateProduct()
    if(repons){
        return res.send("Base de donnée bien mise à jour")
    } else{
        return res.send("Problème dans l'update")
    }
});

module.exports = router