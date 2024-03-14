const { MongoClient } = require("mongodb");
const { data }= require('../../data.json')
require("dotenv").config();
const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@portefoliot.syxdk4w.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(
  url,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 }
);
const db = client.db("shop").collection("panier");

async function insertCart(id){
    try {
        const exist = await db.findOne({itemId: id})
        if(exist) return await db.updateOne(exist, {$set: {quantity: exist.quantity+1}})
        return await db.insertOne({ itemId: id, quantity: 1})
    } catch (error) {
        return false
    }
}

async function reduceCart(id){
    try {
        const exist = await db.findOne({itemId: id})
        if(exist) return await db.updateOne(exist, {$set: {quantity: exist.quantity-1}})
        return await db.insertOne({ itemId: id, quantity: 1})
    } catch (error) {
        return false
    }
}

async function deleteCartElement(id){
    try {
        return await db.deleteOne({itemId: id})
    } catch (error) {
        return false
    }
}

async function getCart(){
    try {
        let cart = await db.find().toArray();
        let cartElement = []
        for(let i = 0; i < cart.length; i++){
            const product = await client.db("shop").collection("product").findOne({productId: cart[i].itemId})
            product.quantity = cart[i].quantity
            await cartElement.push(product)
        }
        return cartElement
    } catch (error) {
        return false
    }
}

module.exports = { insertCart, getCart,reduceCart, deleteCartElement }
