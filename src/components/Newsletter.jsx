import React, { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [inscrito, setInscrito] = useState(false);

  const lidarInscricao = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      alert('Por favor, introduza um e-mail válido!');
      return;
    }

    setInscrito(true);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-card">
        <div className="newsletter-content">
          <span className="newsletter-tag">Fique por dentro</span>
          <h2>Receba Novidades & <span className="highlight">Cupões Exclusivos</span></h2>
          <p>
            Subscreva a newsletter oficial da TW Network para receber notificações de reinício de temporada, novos modos de jogo e descontos relâmpago na loja de VIPs.
          </p>

          {!inscrito ? (
            <form onSubmit={lidarInscricao} className="newsletter-form">
              <input
                type="email"
                placeholder="Introduza o seu melhor e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-inscrever">
                Subscrever 📬
              </button>
            </form>
          ) : (
            <div className="newsletter-sucesso">
              <span>🎉</span>
              <strong>Inscrição confirmada!</strong>
              <p>Obrigado por se juntar à TW Network. Verifique a sua caixa de entrada em breve.</p>
            </div>
          )}

          <div className="newsletter-comunidade">
            <span>Prefere conversar em tempo real?</span>
            <div className="comunidade-botoes">
              <a href="#discord" className="btn-social discord">
                Discord Oficial (Em breve)
              </a>
              <a href="#youtube" className="btn-social youtube">
                Canal Oficial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}