class ProductManager {
  constructor(title, description, price, thumbnail, code, stock, id) {
    this.products = [];
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.id = id;
  }

  addProduct(product) {
    for (const element of this.products) {
      if (
        product.stock < 0 && 
        product.price < 0  &&
        product.code === ""  &&
        product.title === ""  &&
        product.description === "" &&
        product.thumbnail === ""
      ) 
        
      {
        return { error: "producto no valido" };
      } else if (element.code === product.code) {
        return { error: "producto existente" };
      }
    }
    product.id = Math.random().toString(9);
    this.products.push(product);
    return this.products;
  }
  getProducts() {
    return this.products;
  }
  getProductsById(id) {
    for (const element of this.products) {
      if (element.id === id) {
        return element.title;
      }
    }
    return { error: "producto no encontrado" };
  }
}

// const ProductManager = new ProductManager();
// console.log("Lista vacia");
// console.log(productManager.getProducts());
// console.log('Producto agregado');
// console.log(productManager.addProduct({title:'probando producto', description:'probando descrition', price: 'probando precio', thumbnail:'probando imagen', code:'probando codigo', stock:'probando stock'}));
// console.log('Lista con producto');
// console.log(productManager.getProducts());
// console.log('Producto agregado');
// console.log(productManager.addProduct({title:'probando producto', description:'probando descrition', price: 'probando precio', thumbnail:'probando imagen', code:'probando codigo', stock:'probando stock'}));
// console.log('Lista con producto');
// console.log(productManager.addProduct({title:'', description:'probando descrition', price: 'probando precio', thumbnail:'probando imagen', code:'probando codigo', stock:'probando stock'}));
// console.log('Buscar prod por id');
// console.log(productManages.getProductById(productManager.products[0].id));
// console.log('Buscar prod por id');
// console.log(productManages.getProductById('123'));
