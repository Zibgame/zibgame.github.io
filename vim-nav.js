document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
  
    const speed = 70;
  
    if (e.key === "j") {
      window.scrollBy({ top: speed, behavior: "smooth" });
    } 
    else if (e.key === "k") {
      window.scrollBy({ top: -speed, behavior: "smooth" });
    }
    else if (e.key === "h") {
      const sections = [...document.querySelectorAll("section, header")];
      const pos = window.scrollY;
  
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop < pos - 10) {
          window.scrollTo({ top: sections[i].offsetTop, behavior: "smooth" });
          break;
        }
      }
    }
    else if (e.key === "l") {
      const sections = [...document.querySelectorAll("section, header")];
      const pos = window.scrollY;
  
      for (let s of sections) {
        if (s.offsetTop > pos + 10) {
          window.scrollTo({ top: s.offsetTop, behavior: "smooth" });
          break;
        }
      }
    }
  });