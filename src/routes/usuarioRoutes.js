import express from 'express'
import UsuarioController from '../controllers/usuarioControllers.js'

const router = express.Router();

router.post('/usuarios', UsuarioController.novoUsuario);

export default router;