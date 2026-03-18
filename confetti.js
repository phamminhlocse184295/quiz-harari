// === I5: CONFETTI ===
// Thuần canvas — không cần thư viện ngoài

function launchConfetti() {
  const existing = document.getElementById("confetti-canvas");
  if (existing) existing.remove();

  const canvas = document.createElement("canvas");
  canvas.id = "confetti-canvas";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  // Màu confetti — neutral/white palette khớp với shadcn theme
  const COLORS = [
    "#ffffff", "#a1a1aa", "#71717a",
    "#e4e4e7", "#f4f4f5", "#d4d4d8",
  ];

  const PARTICLE_COUNT = 90;
  const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x:       Math.random() * canvas.width,
    y:       Math.random() * canvas.height * -1, // spawn phía trên viewport
    w:       Math.random() * 8 + 4,
    h:       Math.random() * 4 + 2,
    color:   COLORS[Math.floor(Math.random() * COLORS.length)],
    speed:   Math.random() * 3 + 2,
    angle:   Math.random() * Math.PI * 2,
    spin:    (Math.random() - 0.5) * 0.2,
    drift:   (Math.random() - 0.5) * 1.5,
    opacity: 1,
  }));

  let frame;
  const START = performance.now();
  const DURATION = 2800; // ms

  function draw(now) {
    const elapsed = now - START;
    const progress = elapsed / DURATION;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let alive = false;
    particles.forEach((p) => {
      p.y      += p.speed;
      p.x      += p.drift;
      p.angle  += p.spin;
      p.opacity = Math.max(0, 1 - Math.pow(progress, 2));

      if (p.y < canvas.height + 20) alive = true;

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (alive && elapsed < DURATION + 500) {
      frame = requestAnimationFrame(draw);
    } else {
      cancelAnimationFrame(frame);
      canvas.remove();
    }
  }

  frame = requestAnimationFrame(draw);
}
