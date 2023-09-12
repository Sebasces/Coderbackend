import  express  from "express";
import { productsRouter } from "./routes/productsRoutes.js";
import { cartRouter } from "./routes/cartRoutes.js"
/*import { productManagerFiles } from "./persist/productManager.js";*/



/*const managerProductService = new productManagerFiles("./src/files/products.json");*/


const port = 8080;

const app = express ();

app.listen(port,()=>console.log(`servidor ejecutandose en el ${port}`));

app.use("api/products", productsRouter );
app.use("api/cart", cartRouter);

/*app.get("/products", async (req,res) =>{
    try {
        const { limit } = req.query;
        const limitNumber = parseInt(limit);
        let pId = req.params.pId;
        const idNumber= parseInt(pId)
        const products = await managerProductService.getProducts();
        if (pId) {products.find((element)=>element.id === idNumber)
            res.send(pId)}
        else if (limit){ const productsLimit = products.slice(0,limitNumber);
            res.send(productsLimit)}
         else {
        res.send(products);
        }
    } catch (error) {
        res.send("error.message")
    }})

    app.get("/products/:pID", async (req,res) =>{
        try {
            const products = await managerProductService.getProducts();
            const pID = parseInt(req.params.pID)
            const productoPid = products.find(p=>p.id === pID)
            
            if (productoPid) {res.send(productoPid)}
            else {res.send("el producto no existe")}
        }
            
         catch (error) {
            res.send("error.message")
        }})*/


;