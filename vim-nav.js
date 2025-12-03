let scrolling = false;
let gPressed = false;
let zPressed = false;

function smoothScrollTo(targetY, duration = 200) {
  if (scrolling) return;
  scrolling = true;

  const startY = window.scrollY;
  const diff = targetY - startY;
  let start = null;

  function animate(t) {
    if (!start) start = t;
    const progress = Math.min((t - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, startY + diff * ease);

    if (progress < 1) requestAnimationFrame(animate);
    else scrolling = false;
  }

  requestAnimationFrame(animate);
}

function smoothScroll(deltaY) {
  smoothScrollTo(window.scrollY + deltaY);
}

function nearestSection(pos) {
  const sections = [...document.querySelectorAll("section, header")];
  let closest = sections[0];

  for (let s of sections) {
    if (Math.abs(s.offsetTop - pos) < Math.abs(closest.offsetTop - pos)) {
      closest = s;
    }
  }
  return closest;
}

document.addEventListener("keydown", function (e) {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

  const speed = 200;
  const halfPage = window.innerHeight / 2;
  const fullPage = window.innerHeight;

  /* ===========================
       gg (haut)
  ============================*/
  if (e.key === "g") {
    if (gPressed) {
      smoothScrollTo(0);
      gPressed = false;
    } else {
      gPressed = true;
      setTimeout(() => (gPressed = false), 250);
    }
    return;
  }

  /* ===========================
       G (bas)
  ============================*/
  if (e.key === "G") {
    smoothScrollTo(document.body.scrollHeight);
    return;
  }

  /* ===========================
        j / k
  ============================*/
  if (e.key === "j") smoothScroll(speed);
  if (e.key === "k") smoothScroll(-speed);

  /* ===========================
        h / l → sections
  ============================*/
  if (e.key === "h") {
    const sections = [...document.querySelectorAll("section, header")];
    const pos = window.scrollY;
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop < pos - 10) {
        smoothScrollTo(sections[i].offsetTop);
        return;
      }
    }
  }

  if (e.key === "l") {
    const sections = [...document.querySelectorAll("section, header")];
    const pos = window.scrollY;
    for (let s of sections) {
      if (s.offsetTop > pos + 10) {
        smoothScrollTo(s.offsetTop);
        return;
      }
    }
  }

  /* ===========================
       Ctrl+d → demi-page ↓
       Ctrl+u → demi-page ↑
  ============================*/
  if (e.ctrlKey && e.key === "d") {
    smoothScroll(halfPage);
    return;
  }
  if (e.ctrlKey && e.key === "u") {
    smoothScroll(-halfPage);
    return;
  }

  /* ===========================
       Ctrl+f → page ↓
       Ctrl+b → page ↑
  ============================*/
  if (e.ctrlKey && e.key === "f") {
    smoothScroll(fullPage);
    return;
  }
  if (e.ctrlKey && e.key === "b") {
    smoothScroll(-fullPage);
    return;
  }

  /* ===========================
       zt / zz / zb
  ============================*/
  if (e.key === "z") {
    zPressed = true;
    setTimeout(() => (zPressed = false), 250);
    return;
  }

  if (zPressed && e.key === "t") {
    const sec = nearestSection(window.scrollY);
    smoothScrollTo(sec.offsetTop);
    zPressed = false;
    return;
  }

  if (zPressed && e.key === "z") {
    const sec = nearestSection(window.scrollY);
    const center = sec.offsetTop - window.innerHeight / 2 + sec.offsetHeight / 2;
    smoothScrollTo(center);
    zPressed = false;
    return;
  }

  if (zPressed && e.key === "b") {
    const sec = nearestSection(window.scrollY);
    const bottom = sec.offsetTop - window.innerHeight + sec.offsetHeight;
    smoothScrollTo(bottom);
    zPressed = false;
    return;
  }
});
