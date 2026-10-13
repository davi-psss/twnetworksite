import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ contagemCarrinho, onAbrirCarrinho }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <nav className="navbar" id="inicio">
      <div className="navbar-logo">
        <a href="#inicio" onClick={fecharMenu}>
          <h2><span className="roxo">TW</span> Network</h2>
        </a>
      </div>

      {/* Botão Hambúrguer para ecrãs móveis */}
      <button 
        className={`btn-hamburger ${menuAberto ? 'aberto' : ''}`} 
        onClick={alternarMenu}
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Lista de navegação */}
      <ul className={`navbar-links ${menuAberto ? 'ativo' : ''}`}>
        <li>
          <a href="#inicio" onClick={fecharMenu}>Início</a>
        </li>
        <li>
          <a href="#guia" onClick={fecharMenu}>Comandos</a>
        </li>
        <li>
          <a href="#loja" className="destaque" onClick={fecharMenu}>Loja VIP</a>
        </li>
        <li>
          <a href="#regras" onClick={fecharMenu}>Regras</a>
        </li>
        <li>
          <a href="#suporte" onClick={fecharMenu}>Suporte</a>
        </li>
        <li className="nav-item-carrinho">
          <button 
            className="btn-carrinho-nav" 
            onClick={() => {
              fecharMenu();
              onAbrirCarrinho();
            }}
          >
            🛒 Carrinho {contagemCarrinho > 0 && <span className="badge-carrinho">{contagemCarrinho}</span>}
          </button>
        </li>
      </ul>
    </nav>
  );
}