import React, { useEffect, useState } from 'react';
import './ListaProduto.css';

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

const ListaProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('lista/produto');
                if (!response.ok) {
                    throw new Error('Erro ao obter produtos da API');
                }
                const data: Produto[] = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div>
            <h2>Lista de produtos</h2>

            <table className="resumo-tabela">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor(R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(produto => (
                        <tr key={produto.id}>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaProduto;
