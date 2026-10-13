import React, { useState } from 'react';
import './GuiaComandos.css';

export default function GuiaComandos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('geral');
  const [comandoCopiado, setComandoCopiado] = useState(null);

  const categorias = [
    { id: 'geral', nome: 'Geral & Progresso' },
    { id: 'economia', nome: 'Economia & Vendas' },
    { id: 'terrenos', nome: 'Terrenos & Proteção' },
    { id: 'vips', nome: 'Vantagens VIP' }
  ];

  const comandosPorCategoria = {
    geral: [
      { comando: '/rankup', descricao: 'Avança para o próximo nível assim que atingir os requisitos.' },
      { comando: '/ranks', descricao: 'Apresenta a lista de todos os níveis disponíveis e os respetivos custos.' },
      { comando: '/mina', descricao: 'Teletransporta o jogador para a área de mineração adequada ao seu rank.' },
      { comando: '/spawn', descricao: 'Regressa ao ponto central seguro da rede TW Network.' },
      { comando: '/regras', descricao: 'Apresenta as normas e diretrizes de conduta do servidor.' }
    ],
    economia: [
      { comando: '/money', descricao: 'Consulta o saldo atual da sua carteira in-game.' },
      { comando: '/pay [jogador] [quantia]', descricao: 'Transfere moedas para a conta de outro jogador.' },
      { comando: '/loja', descricao: 'Abre a interface do mercado global para compra e venda de itens.' },
      { comando: '/leilao', descricao: 'Permite participar ou abrir licitações de artigos raros.' }
    ],
    terrenos: [
      { comando: '/terreno comprar', descricao: 'Adquire o lote de terreno onde o jogador se encontra.' },
      { comando: '/terreno convidar [jogador]', descricao: 'Concede permissão a um amigo para construir no seu lote.' },
      { comando: '/terreno kick [jogador]', descricao: 'Remove um jogador indesejado do seu terreno.' },
      { comando: '/terreno info', descricao: 'Apresenta as dimensões, limites e membros do terreno.' }
    ],
    vips: [
      { comando: '/fly', descricao: 'Ativa ou desativa a capacidade de voar em zonas permitidas.' },
      { comando: '/reparar', descricao: 'Restaura a durabilidade de armaduras e ferramentas sem custos.' },
      { comando: '/minavip', descricao: 'Acesso imediato às minas exclusivas com minérios de maior valor.' },
      { comando: '/kit vip', descricao: 'Resgata o conjunto periódico de recompensas do seu plano.' }
    ]
  };

  const copiarComando = (cmd) => {
    navigator.clipboard.writeText(cmd);
    setComandoCopiado(cmd);
    setTimeout(() => {
      setComandoCopiado(null);
    }, 1800);
  };

  return (
    <section id="guia" className="guia-container">
      <div className="guia-header">
        <h2>Guia de <span className="highlight">Comandos & Dicas</span></h2>
        <p>Consulte os principais atalhos in-game para acelerar a sua evolução no RankUP.</p>
      </div>

      <div className="guia-tabs">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            className={`tab-btn ${categoriaAtiva === cat.id ? 'ativa' : ''}`}
            onClick={() => setCategoriaAtiva(cat.id)}
          >
            {cat.nome}
          </button>
        ))}
      </div>

      <div className="comandos-lista">
        {comandosPorCategoria[categoriaAtiva].map((item, index) => (
          <div key={index} className="comando-card">
            <div className="comando-info">
              <code className="comando-codigo">{item.comando}</code>
              <p className="comando-desc">{item.descricao}</p>
            </div>
            <button
              className={`btn-copiar-cmd ${comandoCopiado === item.comando ? 'sucesso' : ''}`}
              onClick={() => copiarComando(item.comando)}
              title="Copiar comando"
            >
              {comandoCopiado === item.comando ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}