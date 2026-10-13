import React, { useState } from 'react';
import './GallerySection.css';

export default function GallerySection() {
  const mapas = [
    {
      id: 1,
      titulo: 'Spawn Central da TW Network',
      tipo: 'Área Segura',
      descricao: 'O ponto de encontro principal de todos os jogadores, com acesso rápido a NPCs de teletransporte, caixas misteriosas e mercado central.',
      tags: ['Zona Protegida', 'NPCs Interativos', 'Caixas']
    },
    {
      id: 2,
      titulo: 'Minas Progressivas do RankUP',
      tipo: 'Área Económica',
      descricao: 'Setores subterrâneos temáticos divididos por escalões de rank, com taxas de regeneração rápida de blocos e minérios especiais.',
      tags: ['Regeneração Automática', 'Multiplicadores', 'Progressão']
    },
    {
      id: 3,
      titulo: 'Coliseu & Arenas de Batalha PvP',
      tipo: 'Zona de Combate',
      descricao: 'Cenários intensos dedicados a combates individuais e disputas entre clãs, com queda de itens e pontuação em tempo real.',
      tags: ['PvP Ativo', 'Eventos Diários', 'Ranking']
    },
    {
      id: 4,
      titulo: 'Mina & Ilha Privada VIP',
      tipo: 'Área Exclusiva',
      descricao: 'Ambiente com bónus acrescido na venda de mercadorias, forjas gratuitas e acesso exclusivo para membros com estatuto VIP.',
      tags: ['Bónus de Venda', 'Acesso Restrito', 'Loot Melhorado']
    }
  ];

  const [mapaAtivo, setMapaAtivo] = useState(mapas[0]);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Explore os <span className="highlight">Mapas da Rede</span></h2>
        <p>Conheça os principais cenários e estruturas construídas para acolher a sua jornada na TW Network.</p>
      </div>

      <div className="gallery-container">
        {/* Lista de seleção lateral */}
        <div className="gallery-sidebar">
          {mapas.map((mapa) => (
            <div
              key={mapa.id}
              className={`gallery-nav-card ${mapaAtivo.id === mapa.id ? 'ativo' : ''}`}
              onClick={() => setMapaAtivo(mapa)}
            >
              <div className="nav-card-topo">
                <span className="badge-tipo">{mapa.tipo}</span>
              </div>
              <h4>{mapa.titulo}</h4>
            </div>
          ))}
        </div>

        {/* Visualizador principal do mapa selecionado */}
        <div className="gallery-display">
          <div className="display-banner-placeholder">
            <div className="placeholder-overlay">
              <span className="banner-tag">{mapaAtivo.tipo}</span>
              <h3>{mapaAtivo.titulo}</h3>
            </div>
          </div>

          <div className="display-info">
            <p className="display-desc">{mapaAtivo.descricao}</p>

            <div className="display-tags">
              {mapaAtivo.tags.map((tag, index) => (
                <span key={index} className="tag-item">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}