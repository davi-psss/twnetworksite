import React, { useEffect, useRef } from 'react';

export default function Snowfall() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animacaoId;

    // Ajusta o tamanho do canvas para ocupar todo o ecrã
    const ajustarTamanho = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    ajustarTamanho();
    window.addEventListener('resize', ajustarTamanho);

    // Configuração dos flocos de neve
    const totalFlocos = 45;
    const flocos = Array.from({ length: totalFlocos }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      raio: Math.random() * 2 + 1, // Tamanho entre 1px e 3px
      velocidadeY: Math.random() * 1 + 0.5,
      velocidadeX: Math.random() * 0.5 - 0.25,
      opacidade: Math.random() * 0.5 + 0.3
    }));

    // Ciclo de animação contínuo
    const animar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flocos.forEach((floco) => {
        ctx.beginPath();
        ctx.arc(floco.x, floco.y, floco.raio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${floco.opacidade})`;
        ctx.fill();

        floco.y += floco.velocidadeY;
        floco.x += floco.velocidadeX;

        // Se o floco passar o fundo do ecrã, reinicia no topo
        if (floco.y > canvas.height) {
          floco.y = -5;
          floco.x = Math.random() * canvas.width;
        }

        // Se sair pelas laterais, reposiciona
        if (floco.x > canvas.width) floco.x = 0;
        if (floco.x < 0) floco.x = canvas.width;
      });

      animacaoId = requestAnimationFrame(animar);
    };

    animar();

    // Limpeza de eventos e animação ao desmontar o componente
    return () => {
      cancelAnimationFrame(animacaoId);
      window.removeEventListener('resize', ajustarTamanho);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // Permite clicar em botões por baixo da neve
        zIndex: 50,
      }}
    />
  );
}