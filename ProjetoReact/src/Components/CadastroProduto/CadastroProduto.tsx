import React, {useState} from "react";
import "./CadastroProduto.css";
import produtoService from "../../Services/ProdutoService";

const  CadastroProduto = () => {
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        preco: 0 ,
       descricao : ''
    });

    
    const createProduto = (event: React.ChangeEvent<HTMLInputElement>)  => {
        const { name, value } = event.target;
        setProduto({
            ...produto, //metodo construtor
            [name]: value
        });
    };


    const handleSubmit = async (event: React.MouseEventHandler<HTMLButtonElement> | any) => {
        event.preventDefault();
            await produtoService.createProduto(produto);
        };

    return (      
    <>
    <h2>Cadastro de produtos</h2>
        <div className="ProdutoForm">
            <div className="ProdutoInputs">
                <form>
                    <div>
                        <label htmlFor="">Nome Produto: </label>
                        <input
                            type = "text"
                            name = "nome"
                            value = {produto.nome}
                            onChange = {createProduto}
                        />
                    </div>
                    <div>
                    <label htmlFor="">Preço: </label>
                        <input
                            type = "number"
                            name = "preco"
                            value = {produto.preco}
                            onChange = {createProduto}
                        />
                    </div>
                    <div>
                    <label htmlFor="">Descricao: </label>
                        <input
                            type = "text"
                            name = "descricao"
                            value = {produto.descricao}
                            onChange = {createProduto}
                        />
                    </div>
                    <button className="buttonMargin" onClick={handleSubmit}>Cadastrar</button>
                </form>
            </div>
        </div>
    </>
    );
}


export default CadastroProduto;