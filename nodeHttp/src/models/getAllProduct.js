const mongoose = require('mongoose');
require('dotenv').config();
const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@portefoliot.syxdk4w.mongodb.net/shop`;
const productSchema = new mongoose.Schema({
    productId: Number,
    productName: String,
    productDescription: String,
    productImg: String,
    productPrice: Number
}, { collection: "product"})

const model = mongoose.model("shop", productSchema);

async function getAllProduct(){
    try {
        await mongoose.connect(url)
        return await model.find() 
    } catch (error) {
        return false   
    }
}

module.exports = getAllProduct