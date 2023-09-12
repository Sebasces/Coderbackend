import { Router } from "express";

const productsRouter = Router ();

productsRouter.use(express.json())

//http://localhost:8080/api/products
productsRouter.get("/", (req,res) => {
    res.json({message:"listado de productos"})
})

productsRouter.get("/pID", async (req,res) =>{

res.json({message:"endpoint para obtener producto"})
}

)

export { productsRouter }