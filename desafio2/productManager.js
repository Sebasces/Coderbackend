
const fs = require ('fs');


class productManager {
    constructor (filePath){
        this.filePath = filePath;
    }
        fileExist (){return fs.existsSync(this.filePath);
        }
    ; 
    async getProducts () {
        try {
            if (this.fileExist ()){
                const contenidoFile = await fs.promises.readFile(this.filePath, "utf-8");
                const contenidoFileJson = JSON.parse (contenidoFile);
                return contenidoFileJson;
            }
         else {
            throw new Error ("no es posible leer el archivo")
        }
    }
        catch (error) {console.log (error.message);
            throw error;  
        }
    }
    async addProduct (code,title,description,price,thumbnail="imagen no disponible",stock){
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

}}


    const operations = async ()=> {
        try {
            const manager = new productManager ("./products.json");
            const products = await manager.getProducts ();
            console.log(products);
            await manager.addProduct(15,"producto prueba","Este es un producto prueba",200,"sin imagen",25);
            await manager.addProduct (16,"producto nuevo", "este es un producto nuevo",100,"sin imagen",25);
            await manager.addProduct(15,"producto prueba","Este es un producto prueba",200,"sin imagen",25);
            await manager.getPrductsByID (1);
            await manager.getPrductsByID (3);
            await manager.deleteProduct (2);
        } 
        catch (error) {console.log(error.message)
            
        }
    }

    operations ();

