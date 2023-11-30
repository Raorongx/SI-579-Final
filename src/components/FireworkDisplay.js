import React, { useEffect, useRef } from 'react';

const FireworkDisplay = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const fireworks = [];
    const colors = ['#ff4d4d', '#4dff4d', '#4d4dff', '#ff4dff', '#4dffff', '#ffff4d'];

    class Firework {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 2 + 1;
        this.color = color;
        this.velocity = {
          x: Math.random() * 2 - 1,
          y: Math.random() * 2 - 1
        };
        this.alpha = 1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.01;
      }
    }

    function addFirework() {
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 30; i++) {
        fireworks.push(new Firework(canvas.width / 2, canvas.height, color));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      fireworks.forEach((firework, index) => {
        firework.update();
        if (firework.alpha <= 0) {
          fireworks.splice(index, 1);
        }
      });
    }

    addFirework();
    animate();
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />;
};

export default FireworkDisplay;
