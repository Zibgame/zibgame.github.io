// ============================================================
// PORTFOLIO — Zibrian Cadinot
// main.js  (cursor glow + matrix rain + boot + reveal)
// ============================================================

// ── YEAR ──
document.getElementById("year").textContent = new Date().getFullYear();

// ── BOOT SCREEN ──
setTimeout(() => {
  const boot = document.getElementById("boot-screen");
  boot.classList.add("done");
  setTimeout(() => boot.remove(), 700);
}, 2600);

// ── MATRIX RAIN ──
const canvas = document.getElementById("matrix-canvas");
const ctx    = canvas.getContext("2d");
let W, H, cols, drops;
const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[]|/\\;:=+-*%$#@!?";

function initMatrix() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
  cols  = Math.floor(W / 18);
  drops = Array(cols).fill(1);
}

function drawMatrix() {
  ctx.fillStyle = "rgba(5,10,14,0.05)";
  ctx.fillRect(0, 0, W, H);
  ctx.font = "13px JetBrains Mono, monospace";
  for (let i = 0; i < drops.length; i++) {
    const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
    ctx.fillStyle = drops[i] * 18 < H * 0.3
      ? "rgba(0,255,149,0.9)"
      : "rgba(0,255,149,0.35)";
    ctx.fillText(ch, i * 18, drops[i] * 18);
    if (drops[i] * 18 > H && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

initMatrix();
window.addEventListener("resize", initMatrix);
setInterval(drawMatrix, 50);

// ── CURSOR GLOW ──
const glow = document.getElementById("cursor-glow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top  = e.clientY + "px";
});

// ── REVEAL ON SCROLL ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
