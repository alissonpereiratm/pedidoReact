'use strict';
import './ItemTabelaProduto.css';
import React from 'react';
import ProdutoService from '../../Services/ProdutoService';

// Propriedades esperadas para o componente ItemTabelaResumo
interface ItemTabelaProdutoProps {
  item: Produto;  // Objeto representando um item do resumo de pagamento
  index: number;  // Índice do item na lista
}

// Componente funcional ItemTabelaResumo
const ItemTabelaProduto: React.FC<ItemTabelaProdutoProps> = ({ item, index }) => {
  const handleExcluir = async (id: number) => {
    try {
      // Chama o método de exclusão do ProdutoService
      await ProdutoService.deleteProduto(id);
      // Adicione aqui a lógica para atualizar a lista após a exclusão, se necessário
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  };

  return (
    // Linha da tabela representando um item
    <tr>
      {/* Coluna com o número do item */}
      <td>{item.id}</td>
      
      {/* Coluna com a descrição do item */}
      <td>{item.nome}</td>
      
      {/* Coluna com o valor do item, formatado com duas casas decimais */}
      <td>{item.preco.toFixed(2)}</td>
      
      {/* Coluna com o botão ou ícone para excluir */}
      <td>
        <button className="botao" onClick={() => handleExcluir(item.id)}>Excluir</button>
       
      </td>
    </tr>
  );
};

// Exporta o componente ItemTabelaProduto
export default ItemTabelaProduto;
