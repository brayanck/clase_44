const productDTO = require('../dto/product.dto')
class ProductRepository{
    constructor(dao){
        this.dao= dao
    }
    getProductById = async (idProducto) => {
        try {
            return await this.dao.getProduct(idProducto)
        } catch (err) {
            console.log(err);
            return null;
        }
    };
    deleteProduct = async (idProducto) => {
        try {
            return await this.dao.deleteProduct(idProducto)
        } catch (err) {
            console.log(err);
            return null;
        }
    };
    createProduct = async (Data) => {
        try {
            const product = new productDTO(Data);
            return await this.dao.saveProduct(product)
        } catch (err) {
            console.log(err);
            return null;
        }
    };
    paginacion = async (query, limit = 10, page = 1, sort) => {
        try {
            return await this.dao.paginacion(query, limit, page, sort)
        } catch (err) {
            console.log(err);
            return null;
        }
    };
    restaProduct = async (id, data) => {
        try {
            const updateProduct = await this.dao.restaProduct(id,data)
            return updateProduct
        } catch (err) {
            console.log(err);
            return null;
        }
    };
}
module.exports=ProductRepository