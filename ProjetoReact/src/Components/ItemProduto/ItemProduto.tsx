'use strict';

import React from 'react';
import './ItemProduto.css';
import ItemTabelaProduto from '../ItemTabelaProduto.tsx/ItemTabelaProduto';

// Definição das propriedades esperadas para o componente TabelaResumo
interface TabelaProdutoProps {
  dados: Produto[]; // Array de dados do resumo do pagamento
}

// Componente funcional TabelaResumo
const TabelaProduto: React.FC<TabelaProdutoProps> = ({ dados }) => {
  return (
    <div>
      {/* Tabela para exibir os produtos */}
      <table className="resumo-tabela">
        {/* Cabeçalho da tabela */}
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Valor(R$)</th>
          </tr>
        </thead>
        {/* Corpo da tabela com os dados */}
        <tbody>
          {/* Mapeia os dados para criar linhas da tabela usando o componente ItemTabelaProduto */}
          {dados.map((item, index) => (
            <ItemTabelaProduto key={index} item={item} index={index} />
          ))}
         
        </tbody>
      </table>
    </div>
  );
};

// Exporta o componente TabelaProduto
export default TabelaProduto;