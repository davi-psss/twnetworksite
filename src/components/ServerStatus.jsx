import React from 'react';
import { useServerPing } from '../hooks/useServerPing';
import { serverInfo } from '../data/serverData';
import './ServerStatus.css';

export default function ServerStatus() {
  const { online, totalOnline, capacidadeMaxima, versao, carregando, ultimaAtualizacao, atualizar } = useServerPing(serverInfo.ip);

  return (
    <section className="status-section">
      <div className="status-header">
        <h2>Estado da <span className="highlight">TW Network</span></h2>
        <p>Monitorização em tempo real da nossa infraestrutura e capacidade de rede.</p>
      </div>

      <div className="status-resumo-bar">
        <div className="resumo-item">
          <span className="resumo-label">Endereço IP:</span>
          <span className="resumo-valor ip-destaque">{serverInfo.ip}</span>
        </div>
        <div className="resumo-item">
          <span className="resumo-label">Versões:</span>
          <span className="resumo-valor">{versao}</span>
        </div>
        <div className="resumo-item">
          <span className="resumo-label">Jogadores na Rede:</span>
          <span className="resumo-valor online-count">
            {carregando ? 'A sincronizar...' : `${totalOnline} / ${capacidadeMaxima}`}
          </span>
        </div>
        <div className="resumo-item acoes-sync">
          <span className="resumo-label">Último Ping:</span>
          <div className="sync-box">
            <span className="hora-sync">{ultimaAtualizacao || '--:--:--'}</span>
            <button 
              className={`btn-atualizar-ping ${carregando ? 'girando' : ''}`} 
              onClick={atualizar}
              title="Atualizar ping agora"
            >
              🔄
            </button>
          </div>
        </div>
      </div>

      <div className="modos-grid">
        {serverInfo.modos.map((modo) => (
          <div key={modo.id} className={`modo-card ${!modo.online ? 'modo-offline' : ''}`}>
            <div className="modo-card-top">
              <span className="modo-tipo">{modo.tipo}</span>
              <span className={`modo-status-pill ${modo.online ? 'pill-online' : 'pill-offline'}`}>
                {modo.online ? '● Online' : '○ Manutenção'}
              </span>
            </div>

            <h3 className="modo-titulo">{modo.nome}</h3>
            <p className="modo-descricao">{modo.descricao}</p>

            <div className="modo-capacidade">
              <div className="capacidade-info">
                <span>Lotação:</span>
                <strong>{modo.jogadores} / {modo.maxJogadores}</strong>
              </div>
              <div className="barra-progresso-bg">
                <div 
                  className="barra-progresso-fill" 
                  style={{ width: `${modo.online ? (modo.jogadores / modo.maxJogadores) * 100 : 0}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}