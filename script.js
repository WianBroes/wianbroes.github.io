(function () {
  const canvas = document.getElementById("trail");
  const ctx = canvas.getContext("2d");
  const hero = canvas.parentElement;
  const colors = ["#ff5d73", "#4fd1ff", "#ffd54f", "#8effa1", "#c48fff"];

  let width, height;
  function resize() {
    width = canvas.width = hero.clientWidth;
    height = canvas.height = hero.clientHeight;
    ctx.fillStyle = "#0f1115";
    ctx.fillRect(0, 0, width, height);
  }
  resize();
  window.addEventListener("resize", resize);

  const balls = Array.from({ length: 4 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 2.2,
    vy: (Math.random() - 0.5) * 2.2,
    r: 5 + Math.random() * 3,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  function step() {
    ctx.fillStyle = "rgba(15, 17, 21, 0.04)";
    ctx.fillRect(0, 0, width, height);

    for (const b of balls) {
      b.x += b.vx;
      b.y += b.vy;
      if (b.x < 0 || b.x > width) b.vx *= -1;
      if (b.y < 0 || b.y > height) b.vy *= -1;

      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = b.color;
      ctx.fill();
    }

    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();
