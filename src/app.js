import  express  from "express";
import { productManagerFiles } from "./persist/productManager.js";


const managerProductService = new productManagerFiles("./src/files/products.json");


const port = 8080;

const app = express ();

app.listen(port,()=>console.log("servidor funcionando"));

app.get("/products", async (req,res) =>{
    try {
        const { limit } = req.query;
        const limitNumber = parseInt(limit);
        const products = await managerProductService.getProducts();
        if (limit){ const productsLimit = products.slice(0,limitNumber);
            res.send(productsLimit)
        } else {
        res.send(products);
        }
    } catch (error) {
        res.send("error.message")
    }})

;