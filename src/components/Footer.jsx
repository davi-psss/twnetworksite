import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-brand">
          <h3><span className="roxo">TW</span> Network</h3>
          <p>O servidor definitivo de RankUP com economia competitiva e minijogos exclusivos.</p>
          <span className="footer-ip">IP: <code>TWNetwork.com.br</code></span>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#guia">Guia & Recursos</a></li>
              <li><a href="#loja">Loja VIP</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Comunidade</h4>
            <ul>
              <li><a href="#discord">Discord (Em breve)</a></li>
              <li><a href="#regras">Regras do Servidor</a></li>
              <li><a href="#suporte">Suporte</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© 2026 TW Network — Desenvolvido por <strong>TW Studios</strong> (TeDabliukkkkk).</p>
        <p className="disclaimer">
          Não somos afiliados, associados ou aprovados pela Mojang Studios ou Microsoft.
        </p>
      </div>
    </footer>
  );
}