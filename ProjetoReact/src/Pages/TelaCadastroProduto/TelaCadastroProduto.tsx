import React, { useState, useEffect } from 'react';
import CadastroProduto from '../../Components/CadastroProduto/CadastroProduto';
import TabelaProduto from '../../Components/ItemProduto/ItemProduto';
import produtoService from '../../Services/ProdutoService';

import './TelaCadastroProduto.css';


const Produtos = () => {
  const [dadosDoProduto, setDadosDoProduto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Utiliza o serviço para buscar dados do produto
        const response = await produtoService.fetchProdutos();
        setDadosDoProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do banco de dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <nav></nav>
      </header>

      <body>
        <div className='cadastro'>
          <CadastroProduto />
        </div>
        <div className='lista'>
          <h2>Lista de Produtos</h2>
          <TabelaProduto dados={dadosDoProduto} />
        </div>
      </body>
    </>
  );
};

export default Produtos;
