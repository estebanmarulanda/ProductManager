const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  async addProduct (title, code, description) {
    try {
      const products = await this.getProducts();
      const id = products.length + 1;
  
      if(!title || !code || !description) {
        throw new Error("Faltan propiedades para crear el nuevo producto.")
      }
  
      const codeExists = await this.getProductByCode(code);
      if(codeExists) {
        throw new Error(`El codigo ${code} ya existe.`);
      }
      
      const newProduct = {
        id, title, code, description
      }
      products.push(newProduct);
      await fs.promises.writeFile(this.path, JSON.stringify(products, null, 4))
      return newProduct;
    } catch (error) {
      console.error(error.message)
    }
  }

  async getProducts() {
    try {
      const fileExists = fs.existsSync(this.path);
      if(fileExists) {
        const fileBuffer = await fs.promises.readFile(this.path, 'utf-8');
        return JSON.parse(fileBuffer);
      }
      return []
    } catch (error) {
      console.error(error.message)
    }
  }

  async getProductById(id) {
    try {
      const products = await this.getProducts();
      return products.find(product => product.id === id);
    } catch (error) {
      console.error(error.message)
    }
  }

  async getProductByCode(code) {
    try {
      const products = await this.getProducts();
      return products.find(product => product.code === code);
    } catch (error) {
      console.error(error.message)
    }
  }


  async updateProduct(id, changes) {
    const { title, description } = changes;

    const products = await this.getProducts();
    const found = await this.getProductById(id);
    if(!found) {
      throw new Error('Producto no encontrado');
    }

    const index = products.findIndex(product => product.id = found.id);
    const productUpdated = {
      ...found,
      title,
      description
    }
    products[index] = productUpdated;

    await fs.promises.writeFile(this.path, JSON.stringify(products));

    return productUpdated
  }

}
module.exports = ProductManager;