import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./CadastroProduto.css";
import produtoService from "../../Services/ProdutoService";

const CadastroProduto = () => {
  const [produto, setProduto] = useState({
    id: 0,
    nome: "",
    preco: 0,
    descricao: "",
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const createProduto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  const handleSubmit = async (
    event: React.MouseEventHandler<HTMLButtonElement> | any
  ) => {
    event.preventDefault();
    await produtoService.createProduto(produto);
  };

  const handleVoltar = () => {
    // Navigate back to the "/teste" route
    navigate("/teste1");
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
                type="text"
                name="nome"
                value={produto.nome}
                onChange={createProduto}
              />
            </div>
            <div>
              <label htmlFor="">Preço: </label>
              <input
                type="number"
                name="preco"
                value={produto.preco}
                onChange={createProduto}
              />
            </div>
            <div>
              <label htmlFor="">Descricao: </label>
              <input
                type="text"
                name="descricao"
                value={produto.descricao}
                onChange={createProduto}
              />
            </div>
            <button className="buttonMargin" onClick={handleSubmit}>
              Cadastrar
            </button>
            <button className="buttonVoltar" onClick={handleVoltar}>
              Voltar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CadastroProduto;
