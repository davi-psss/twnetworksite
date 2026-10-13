import React, { useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [copiado, setCopiado] = useState(false);
  const ipServidor = "TWNetwork.com.br";

  const copiarIP = () => {
    navigator.clipboard.writeText(ipServidor);
    setCopiado(true);
    // Volta ao texto normal depois de 2 segundos
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Sua Aventura na <span className="highlight">TW Network</span>
        </h1>
        <p className="hero-subtitle">
          O melhor servidor de RankUP com economia personalizada, minigames valendo prêmios e muito mais. Junte-se à nossa comunidade!
        </p>

        <div className="hero-buttons">
          <button 
            className={`btn-copiar ${copiado ? 'copiado' : ''}`} 
            onClick={copiarIP}
          >
            {copiado ? "✅ IP Copiado com Sucesso!" : `🎮 Copiar IP: ${ipServidor}`}
          </button>
          
          <a href="#loja" className="btn-loja">
            🛒 Acessar Loja
          </a>
        </div>

        <div className="server-status">
          <span className="status-dot"></span>
          <p>Servidor Online - Venha jogar e evoluir seu Rank!</p>
        </div>
      </div>
    </section>
  );
}