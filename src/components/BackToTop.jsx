import React, { useState, useEffect } from 'react';
import './BackToTop.css';

export default function BackToTop() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const controlarVisibilidade = () => {
      if (window.scrollY > 400) {
        setVisivel(true);
      } else {
        setVisivel(false);
      }
    };

    window.addEventListener('scroll', controlarVisibilidade);
    return () => window.removeEventListener('scroll', controlarVisibilidade);
  }, []);

  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visivel) return null;

  return (
    <button 
      className="btn-back-to-top" 
      onClick={voltarAoTopo}
      title="Voltar ao início da página"
      aria-label="Voltar ao topo"
    >
      ▲
    </button>
  );
}