import express from 'express'
import ProductosRepo from "../../repositories/ProductosRepo.js";
import Producto from "./modelos/Producto.js";
import ProductoMostrable from './adaptadores/ProductoMostrable.js';
const apiProducts = express.Router()

const repo = new ProductosRepo();

const productos = []
function mostrarTodos(prods) {
    prods.forEach(p => productos.push(new ProductoMostrable(p).comoTextoPlano()))
}

function mostrar(prod) {
    console.log(new ProductoMostrable(prod).comoTextoPlano())
}

apiProducts.get('/api/productos', (req, res) => {
    res.send(mostrarTodos(await repo.getAll()))
})