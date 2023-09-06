
import fs from "fs";


class productManagerFiles {
    constructor (path){
        this.filePath = path;
    }
        fileExist (){return fs.existsSync(this.filePath);
        
        }
    ; 
    async getProducts () {
        try {
            if (this.fileExist ()){
                const contenidoString = await fs.promises.readFile(this.filePath, "utf-8");
                const products = JSON.parse (contenidoString);
                return products;
            }
         else {
            throw new Error ("no es posible obtener los productos")
        }
    }
        catch (error) {console.log (error.message);
            throw error;  
        }
    }
    /*async addProduct (code,title,description,price,thumbnail="imagen no disponible",stock){
        try {
            if (this.fileExist()){
                const contenidoFile = await fs.promises.readFile(this.filePath, "utf-8");
                const contenidoFileJson = JSON.parse (contenidoFile);
                let newId;
                if (contenidoFileJson.length==0){newId =1} 
                else {newId=contenidoFileJson[contenidoFileJson.length-1].id+1
                }
                const newProduct = {
                    id: newId, 
                    code,
                    title,
                    description,
                    price,
                    thumbnail,
                    stock,
                }
                const codeExist = contenidoFileJson.find((elem)=>elem.code === code);
                if (codeExist) {return console.log("El producto con ese codigo ya existe")} else {
                contenidoFileJson.push(newProduct)
                await fs.promises.writeFile(this.filePath,JSON.stringify(contenidoFileJson,null, "\t"));
                console.log("producto agregado")}
            }
            else {throw new Error ("no es posible guardar el producto")}
        } catch (error) {
            console.log(error.message)
        }
    }

/*
       async  getPrductsByID (idCode) {
        try {
            if (this.fileExist()){
                const contenidoFile = await fs.promises.readFile(this.filePath, "utf-8");
                const contenidoFileJson = JSON.parse (contenidoFile);
                const identity = contenidoFileJson.find((element)=>element.id === idCode)
                if(!identity) {console.log("el codigo no existe")} else {(console.log(identity.title))}
            }else {
                throw new Error ("no es posible leer el archivo")
            }
        }
            catch (error) {console.log (error.message);
                throw error;  
            }
        }
    

async updateProduct (id, product) {
    try {
        const contenidoFile = await fs.promises.readFile(this.filePath, "utf-8");
        const contenidoFileJson = JSON.parse (contenidoFile)
        let productIndex = contenidoFileJson.findIndex (prod=> prod.id == id)
        if (productIndex === -1) {return console.log ("producto no encontrado")}
        if (product.id) {return console.log("No se puede modificar dato")}
        contenidoFileJson[productIndex] = {...contenidoFileJson[productIndex], ...product }
        const productsString = JSON.stringify(contenidoFileJson, null, 2)
       await fs.promises.writeFile(this.filePath, productsString )
        console.log("producto modificado")
    } catch (error) {
        console.log("error",error.message)
    }
}




async deleteProduct (idDel) {
        try {   
        if (this.fileExist()){
            const contenidoFile = await fs.promises.readFile(this.filePath, "utf-8");
            const contenidoFileJson = JSON.parse (contenidoFile);
            const deleteItem = contenidoFileJson.filter((element)=>element.id !== idDel)
            contenidoFileJson.push(deleteItem)
            await fs.promises.writeFile(this.filePath,JSON.stringify(deleteItem,null, "\t"));
            console.log("producto eliminado")}
        
        else {
            throw new Error ("no es posible leer el archivo")
        }
        }
        catch (error) {console.log (error.message);
            throw error;  
        }

}*/
}

export  {productManagerFiles};


   