import React, { useState } from 'react';
import './CashShop.css';

export default function CashShop({ onAdicionarAoCarrinho }) {
  const [categoria, setCategoria] = useState('cash');

  const pacotesCash = [
    {
      id: 101,
      nome: '5.000 Cash',
      preco: 'R$ 10,00',
      icone: '🪙',
      bonus: null,
      descricao: 'Ideal para pequenas compras e itens essenciais no mercado in-game.'
    },
    {
      id: 102,
      nome: '15.000 Cash (+2.000 Bónus)',
      preco: 'R$ 25,00',
      icone: '💎',
      bonus: '+15% Bónus',
      descricao: 'Pacote mais popular para impulsionar construções e trocas comerciais.'
    },
    {
      id: 103,
      nome: '40.000 Cash (+10.000 Bónus)',
      preco: 'R$ 50,00',
      icone: '👑',
      bonus: '+25% Bónus',
      descricao: 'Quantidade recomendada para quem quer dominar o ranking económico.'
    }
  ];

  const pacotesChaves = [
    {
      id: 201,
      nome: '3x Chaves Épicas',
      preco: 'R$ 12,00',
      icone: '🗝️',
      bonus: null,
      descricao: 'Abra caixas especiais no spawn para receber armaduras e ferramentas raras.'
    },
    {
      id: 202,
      nome: '5x Chaves Supremas',
      preco: 'R$ 22,00',
      icone: '✨',
      bonus: 'Mais Vendido',
      descricao: 'Possibilidade elevada de obter itens lendários e encantamentos únicos.'
    },
    {
      id: 203,
      nome: 'Combo Caixa Misteriosa (10 Chaves)',
      preco: 'R$ 39,90',
      icone: '📦',
      bonus: 'Melhor Valor',
      descricao: 'Conjunto completo de chaves para abrir em grupo ou armazenar para eventos.'
    }
  ];

  const itensAtuais = categoria === 'cash' ? pacotesCash : pacotesChaves;

  return (
    <section className="cash-section">
      <div className="cash-header">
        <h2>Cash & <span className="highlight">Itens Especiais</span></h2>
        <p>Adquira saldo para utilizar na loja in-game ou desbloqueie chaves de caixas misteriosas.</p>
      </div>

      <div className="cash-tabs">
        <button
          className={`tab-filtro ${categoria === 'cash' ? 'ativo' : ''}`}
          onClick={() => setCategoria('cash')}
        >
          💎 Pacotes de Cash
        </button>
        <button
          className={`tab-filtro ${categoria === 'chaves' ? 'ativo' : ''}`}
          onClick={() => setCategoria('chaves')}
        >
          🗝️ Chaves & Caixas
        </button>
      </div>

      <div className="cash-grid">
        {itensAtuais.map((item) => (
          <div key={item.id} className="cash-card">
            {item.bonus && <div className="cash-badge">{item.bonus}</div>}
            
            <div className="cash-card-icon">{item.icone}</div>
            <h3 className="cash-card-nome">{item.nome}</h3>
            <p className="cash-card-desc">{item.descricao}</p>
            
            <div className="cash-card-preco">{item.preco}</div>

            <button
              className="btn-adicionar-cash"
              onClick={() => onAdicionarAoCarrinho(item)}
            >
              Comprar 🛒
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}