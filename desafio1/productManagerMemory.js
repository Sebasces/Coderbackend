
class productManager {
   constructor (){
       this.products = [];
       
   }; 
   getProducts () {
       console.log(this.products)
   };
   addProduct (code,title,description,price,thumbnail="imagen no disponible",stock){
       
       if (!title || !description || !price || ! stock) {console.log("los campos son obligatorios")
   };
       
       
       let newId;
       if (this.products.length==0){newId =1} 
       else {newId=this.products[this.products.length-1].id+1
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
       const codeExist = this.products.find((elem)=>elem.code === code);
       if (codeExist) {return console.log("El producto con ese codigo ya existe")} else {
       this.products.push(newProduct)}}
       
       getPrductsByID (idCode) {
           const identity = this.products.find((element)=>element.id===idCode)
        if(!identity) {console.log("el codigo no existe")} else {(console.log(identity.title))}
       
   
   
   }
}
const producto1 = new productManager();
producto1.getProducts();
producto1.addProduct (15,"producto prueba","Este es un producto prueba",200,"sin imagen",25);
producto1.addProduct (16,"producto nuevo", "este es un producto nuevo",100,"sin imagen",25);
producto1.getProducts ();
producto1.getPrductsByID (1);
producto1.getPrductsByID (3);
producto1.addProduct (16,"producto nuevo", "este es un producto nuevo",100,"sin imagen",25);
