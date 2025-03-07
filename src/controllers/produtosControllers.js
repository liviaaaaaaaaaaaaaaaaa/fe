import Produto from "../models/usuario.js";

class ProdutoController{
    static async novoProduto(req, res){
        const {nome, email, senha} = req.body;

        //Validando dados
        if(!nome || !preco || !imagem || !link_produto || !categoria || !frete_gratis){
            return res.status(400).json({message: 'Nome, preco, imagem, link_produto, categoria, frete_gratis'})
        }
        try{
            const usuario = await Produto.novoProduto(nome, email, senha);
            res.status(201).json(Produto); //retorna o usuario criado com status
        }catch(error){
            console.error("erroao criar ousuario", error);
            res.status(500).json({message: 'Erro ao criar usuario', error: error.message})
        }
    }
}

export default ProdutoController;