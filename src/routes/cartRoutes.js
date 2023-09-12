import { Router } from "express";

const cartRouter = Router ();

//http://localhost:8080/api/cart/

cartRouter.get("/",(req,res) => {
    res.json ({message:"listado del carrito"})
})



export { cartRouter }