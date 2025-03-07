import express from 'express'
import ProdutoController from '../controllers/produtosControllers.js'

const router = express.Router();

router.post('/protudos', ProdutoController.novoProduto);

export default router;