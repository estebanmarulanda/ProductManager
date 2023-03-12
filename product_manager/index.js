const ProductManager = require('./ProductManager');

const productManager = new ProductManager('./products.json');

(async() => {
  console.log(await productManager.getProducts());
  console.log(await productManager.addProduct('Plancha', '#PLN01', 'Esta plancha elimina todas las arrugas de tu ropa!'));
  console.log(await productManager.updateProduct(1, {
    title: 'Plancha 2.0',
    description: "Nueva descripcion"
  }))

})()