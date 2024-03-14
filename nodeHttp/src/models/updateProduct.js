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
const db = client.db("shop");

async function updateProduct(){
    try {
        await db.collection("product").drop()
        await data.map( async (el)=>{
            let article = {
                productId: el.productId,
                productName: el.productName,
                productDescription: el.productDescription,
                productImg: el.productImg,
                productPrice: el.productPrice
            }
            await db.collection("product").insertOne(article);
        })
        return true
    } catch (error) {
        return false
    }
}

module.exports = updateProduct