'use strict';

import React from 'react';
// Propriedades esperadas para o componente ItemTabelaResumo
interface ItemTabelaProdutoProps {
  item: Produto;  // Objeto representando um item do resumo de pagamento
  index: number;  // Índice do item na lista
}

// Componente funcional ItemTabelaResumo
const ItemTabelaProduto: React.FC<ItemTabelaProdutoProps> = ({ item, index }) => {
  return (
    // Linha da tabela representando um item
    <tr>
      {/* Coluna com o número do item */}
      <td>{ item.id}</td>
      
      {/* Coluna com a descrição do item */}
      <td>{item.nome}</td>
      
      {/* Coluna com o valor do item, formatado com duas casas decimais */}
      <td>{item.preco.toFixed(2)}</td>
    </tr>
  );
};

// Exporta o componente ItemTabelaResumo
export default ItemTabelaProduto;