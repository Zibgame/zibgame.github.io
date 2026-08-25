// Optional Vim-style navigation: j/k scroll, h/l sections, gg/G edges, zt/zz/zb alignment.
let vimPendingKey = "";
let vimPendingTimer = 0;
let vimTargetY = window.scrollY;
let vimScrollFrame = 0;

function vimScrollTo(targetY) {
  const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  vimTargetY = Math.max(0, Math.min(targetY, maxY));
  if (vimScrollFrame) return;

  function step() {
    const current = window.scrollY;
    const distance = vimTargetY - current;
    if (Math.abs(distance) < 2.5) {
      window.scrollTo(0, vimTargetY);
      document.documentElement.style.scrollBehavior = "";
      vimScrollFrame = 0;
      return;
    }
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, current + distance * .24);
    vimScrollFrame = requestAnimationFrame(step);
  }
  vimScrollFrame = requestAnimationFrame(step);
}

function vimScrollBy(distance) {
  if (!vimScrollFrame) vimTargetY = window.scrollY;
  vimScrollTo(vimTargetY + distance);
}

function vimSections() {
  return [...document.querySelectorAll("main > section")];
}

function nearestVimSection(position = window.scrollY) {
  return vimSections().reduce((closest, section) =>
    Math.abs(section.offsetTop - position) < Math.abs(closest.offsetTop - position) ? section : closest
  );
}

function setVimPending(key) {
  clearTimeout(vimPendingTimer);
  vimPendingKey = key;
  vimPendingTimer = setTimeout(() => { vimPendingKey = ""; }, 450);
}

document.addEventListener("keydown", event => {
  const target = event.target;
  if (target.matches("input, textarea, select, [contenteditable='true']") || document.querySelector("dialog[open]")) return;
  if (event.altKey || event.metaKey) return;

  const key = event.key;
  if (event.ctrlKey && !["d", "u", "f", "b"].includes(key)) return;
  const halfPage = window.innerHeight / 2;
  const fullPage = window.innerHeight * .9;

  if (vimPendingKey === "g" && key === "g") {
    event.preventDefault();
    vimPendingKey = "";
    vimScrollTo(0);
    return;
  }

  if (vimPendingKey === "z" && ["t", "z", "b"].includes(key)) {
    event.preventDefault();
    const section = nearestVimSection();
    const offsets = {
      t: section.offsetTop,
      z: section.offsetTop - window.innerHeight / 2 + section.offsetHeight / 2,
      b: section.offsetTop - window.innerHeight + section.offsetHeight
    };
    vimPendingKey = "";
    vimScrollTo(offsets[key]);
    return;
  }

  if (key === "g" || key === "z") {
    setVimPending(key);
    return;
  }

  if (key === "G") { event.preventDefault(); vimScrollTo(document.documentElement.scrollHeight); return; }
  if (key === "j") { event.preventDefault(); vimScrollBy(150); return; }
  if (key === "k") { event.preventDefault(); vimScrollBy(-150); return; }
  if (event.ctrlKey && key === "d") { event.preventDefault(); vimScrollBy(halfPage); return; }
  if (event.ctrlKey && key === "u") { event.preventDefault(); vimScrollBy(-halfPage); return; }
  if (event.ctrlKey && key === "f") { event.preventDefault(); vimScrollBy(fullPage); return; }
  if (event.ctrlKey && key === "b") { event.preventDefault(); vimScrollBy(-fullPage); return; }

  if (key === "h" || key === "l") {
    const sections = vimSections();
    const current = window.scrollY;
    const destination = key === "h"
      ? [...sections].reverse().find(section => section.offsetTop < current - 24)
      : sections.find(section => section.offsetTop > current + 24);
    if (destination) {
      event.preventDefault();
      vimScrollTo(destination.offsetTop);
    }
  }
});
