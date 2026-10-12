import { useEffect, useRef } from 'react';

export default function Snowfall() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate snowflakes
    const flakeCount = Math.floor(Math.min(width / 14, 75));
    const flakes = [];

    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        density: Math.random() * flakeCount,
        speed: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.7 + 0.3,
        swaySpeed: Math.random() * 0.02 + 0.005,
        swayOffset: Math.random() * Math.PI * 2,
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.01;

      for (let i = 0; i < flakes.length; i++) {
        const flake = flakes[i];
        
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
        ctx.shadowBlur = 4;
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
        ctx.fill();

        // Update positions
        flake.y += flake.speed;
        flake.x += Math.sin(angle + flake.swayOffset) * 0.7;

        // Reset if out of screen
        if (flake.y > height + 5) {
          flake.y = -5;
          flake.x = Math.random() * width;
        }
        if (flake.x > width + 5) {
          flake.x = -5;
        } else if (flake.x < -5) {
          flake.x = width + 5;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
      style={{ display: 'block' }}
    />
  );
}
