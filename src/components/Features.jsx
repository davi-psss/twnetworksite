import React from 'react';
import './Features.css';

export default function Features() {
  const recursos = [
    {
      id: 1,
      icone: "⛏️",
      titulo: "RankUP Evolutivo",
      descricao: "Evolua de rank ao minerar, vender recursos e cumprir objetivos exclusivos com progressão equilibrada."
    },
    {
      id: 2,
      icone: "💰",
      titulo: "Economia Própria",
      descricao: "Mercado dinâmico, leilões entre jogadores e sistemas de valorização de itens em tempo real."
    },
    {
      id: 3,
      icone: "🏆",
      titulo: "Prémios em Dinheiro",
      descricao: "Os melhores colocados no ranking de cada temporada ganham recompensas reais via Pix."
    },
    {
      id: 4,
      icone: "⚔️",
      titulo: "Minijogos & Eventos",
      descricao: "Eventos diários automáticos, arenas PvP temáticas e desafios especiais para toda a comunidade."
    }
  ];

  return (
    <section id="guia" className="features-container">
      <div className="features-header">
        <h2>Porquê jogar na <span className="highlight">TW Network</span>?</h2>
        <p>Um ecossistema criado de raiz para proporcionar a melhor experiência de jogo no Minecraft.</p>
      </div>

      <div className="features-grid">
        {recursos.map((item) => (
          <div key={item.id} className="feature-card">
            <div className="feature-icon">{item.icone}</div>
            <h3 className="feature-title">{item.titulo}</h3>
            <p className="feature-desc">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}