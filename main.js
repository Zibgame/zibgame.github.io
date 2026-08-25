const projects = [
  {
    name: "Stealth-Hypervisor",
    description: "Type-1 UEFI hypervisor for Windows x64 with VM introspection and guest-memory research.",
    language: "C",
    categories: ["offensive", "systems"],
    tags: ["UEFI", "Virtualization", "Windows"],
    featured: true,
    accent: "red"
  },
  {
    name: "AntiDebugger-Win64",
    description: "Lightweight C/C++ library exploring debugger, breakpoint and runtime anomaly detection on Windows.",
    language: "C++",
    categories: ["offensive", "systems"],
    tags: ["Anti-debug", "WinAPI", "C++"],
    featured: true,
    accent: "red"
  },
  {
    name: "C2-Windows-x64",
    description: "Controlled-lab command-and-control research project demonstrating sockets and remote execution concepts.",
    language: "C++",
    categories: ["offensive"],
    tags: ["Winsock", "Networking", "Windows"],
    featured: true,
    accent: "red"
  },
  {
    name: "intigriti-writeups",
    title: "Bug Bounty Writeups",
    description: "Real-world web security findings, reports and methodologies covering IDOR, APIs and business logic.",
    language: "Research",
    categories: ["offensive", "defensive"],
    tags: ["Web security", "PoC", "Reports"]
  },
  {
    name: "Zim",
    description: "Minimal terminal text editor written in C++ with Vim-inspired modal editing and real-time navigation.",
    language: "C++",
    categories: ["systems", "tools"],
    tags: ["TUI", "Editor", "C++"]
  },
  {
    name: "Mockify",
    description: "AI-assisted mockup generation pipeline with iterative visual quality control and correction loops.",
    language: "Python",
    categories: ["ai", "tools"],
    tags: ["AI", "Automation", "Vision"]
  },
  {
    name: "PrivEscLib-Win64",
    description: "Modular Windows privilege-boundary research library for controlled security experimentation.",
    language: "C++",
    categories: ["offensive", "systems"],
    tags: ["Win64", "Privileges"],
    featured: true,
    accent: "red"
  },
  {
    name: "TUI-Debugger-Win64",
    description: "Terminal debugger concept with assembly inspection, register views, breakpoints and stepping.",
    language: "C++",
    categories: ["offensive", "systems", "tools"],
    tags: ["Debugger", "Assembly"],
    featured: true,
    accent: "red"
  },
  {
    name: "UDP-Flood-Win64",
    description: "Educational lab exploring UDP traffic, sockets, threading and denial-of-service mechanics.",
    language: "C++",
    categories: ["offensive"],
    tags: ["UDP", "Networking"]
  },
  {
    name: "reverse-shell-bash",
    description: "Compact Bash reverse-shell experiment for authorized networking labs.",
    language: "Shell",
    categories: ["offensive"],
    tags: ["Bash", "Networking"]
  },
  {
    name: "win64-dll-injector",
    title: "Win64 DLL Injector",
    description: "Process-memory and DLL-loading experiment built to study low-level Windows internals.",
    language: "C++",
    categories: ["offensive", "systems"],
    tags: ["WinAPI", "Memory"],
    featured: true,
    accent: "red"
  },
  {
    name: "PersistenceLib-Win64",
    description: "C++ APIs for setting up, detecting and removing common Windows persistence mechanisms in a lab.",
    language: "C++",
    categories: ["offensive", "defensive"],
    tags: ["Registry", "Detection"]
  },
  {
    name: "Inception",
    description: "Secure multi-container infrastructure with NGINX, WordPress, MariaDB, networks and persistent volumes.",
    language: "Shell",
    categories: ["school", "defensive"],
    tags: ["Docker", "NGINX"]
  },
  {
    name: "NetPractice",
    description: "TCP/IP addressing, subnetting, routing and gateway configuration through simulated networks.",
    language: "Networking",
    categories: ["school", "defensive"],
    tags: ["TCP/IP", "Subnets"]
  },
  {
    name: "Born2beRoot",
    description: "Linux server administration, virtualization, access policy and system-hardening foundations.",
    language: "Shell",
    categories: ["school", "defensive"],
    tags: ["Linux", "Hardening"]
  },
  {
    name: "Nebula-Os",
    title: "Nebula OS",
    description: "Windows optimization playbook focused on performance, privacy and a stable native experience.",
    language: "PowerShell",
    categories: ["defensive", "systems"],
    tags: ["Windows", "Privacy"]
  },
  {
    name: "exam-42",
    title: "42 Exam Practice",
    description: "C exercises and practice material for the 42 examination track.",
    language: "C",
    categories: ["school"],
    tags: ["Algorithms", "Practice"]
  },
  {
    name: "42_Piscine",
    title: "42 Piscine",
    description: "C, Shell, logic and algorithm foundations completed during the 42 Le Havre Piscine.",
    language: "C",
    categories: ["school"],
    tags: ["C", "Shell"]
  },
  {
    name: "42_cpp",
    title: "42 C++ Modules",
    description: "Progressive C++ modules covering object-oriented design, templates, containers and idioms.",
    language: "C++",
    categories: ["school", "systems"],
    tags: ["OOP", "STL"]
  },
  {
    name: "ft_transcendence",
    title: "ft_transcendence",
    description: "Full-stack multiplayer web application developed as the final 42 common-core project.",
    language: "TypeScript",
    categories: ["school"],
    tags: ["Full stack", "Multiplayer"]
  },
  {
    name: "Minishell",
    description: "Bash-like POSIX shell with parsing, pipes, redirections, environment variables and built-ins.",
    language: "C",
    categories: ["school", "systems"],
    tags: ["Unix", "Processes"]
  },
  {
    name: "so_long",
    title: "So Long",
    description: "Small 2D game in C using MiniLibX, with map parsing, events, sprites and a minimal game loop.",
    language: "C",
    categories: ["school"],
    tags: ["MiniLibX", "Game"]
  },
  {
    name: "Philosophers",
    description: "Multithreaded dining-philosophers simulation focused on mutexes, timing and deadlock avoidance.",
    language: "C",
    categories: ["school", "systems"],
    tags: ["Threads", "Mutex"]
  },
  {
    name: "minitalk",
    title: "Minitalk",
    description: "Client-server inter-process communication using Unix signals and bitwise data transfer.",
    language: "C",
    categories: ["school", "systems"],
    tags: ["Signals", "IPC"]
  },
  {
    name: "push_swap",
    title: "Push Swap",
    description: "Constrained sorting project focused on algorithm design and operation-count optimization.",
    language: "C",
    categories: ["school"],
    tags: ["Sorting", "Algorithms"]
  },
  {
    name: "ft_printf",
    title: "ft_printf",
    description: "Custom implementation of printf with variadic arguments, formatting and conversion parsing.",
    language: "C",
    categories: ["school"],
    tags: ["Variadic", "Parsing"]
  },
  {
    name: "libft",
    title: "Libft",
    description: "Personal C standard-library foundation reused across the 42 curriculum.",
    language: "C",
    categories: ["school", "systems"],
    tags: ["Library", "C"]
  },
  {
    name: "Nebula-Optimizer",
    description: "Windows game-profile launcher designed to reduce system overhead before competitive sessions.",
    language: "C++",
    categories: ["systems", "tools"],
    tags: ["Windows", "Performance"]
  },
  {
    name: "asm-lib",
    title: "Assembly Library",
    description: "x86_64 assembly practice library reimplementing essential routines through Linux syscalls.",
    language: "C / ASM",
    categories: ["systems"],
    tags: ["x86_64", "Syscalls"]
  },
  {
    name: "ft_randint",
    title: "ft_randint",
    description: "Small C experiment implementing a custom pseudo-random integer generator.",
    language: "C",
    categories: ["systems"],
    tags: ["PRNG", "Low-level"]
  },
  {
    name: "qr_code_generator",
    title: "Terminal QR Generator",
    description: "C program that generates and renders QR codes directly inside the terminal.",
    language: "C",
    categories: ["systems", "tools"],
    tags: ["Terminal", "QR"]
  },
  {
    name: "Xsh",
    description: "Fast, modular Zsh framework with a simple plugin, theme and option system.",
    language: "Shell",
    categories: ["systems", "tools"],
    tags: ["Zsh", "Framework"]
  },
  {
    name: "Listify",
    description: "AI-powered generator for structured Etsy titles, descriptions, tags and listing automation.",
    language: "AI / Web",
    categories: ["ai", "tools"],
    tags: ["AI", "SEO"]
  },
  {
    name: "ClixCord",
    description: "Command-line utility that pipes terminal messages to Discord users.",
    language: "CLI",
    categories: ["tools"],
    tags: ["Discord", "Automation"]
  },
  {
    name: "ft_connect.cpp",
    title: "ft_connect.cpp",
    description: "Developer connectivity experiment combining a small Python codebase with a C++-focused workflow.",
    language: "Python",
    categories: ["tools"],
    tags: ["Developer tool"]
  },
  {
    name: "Client-app",
    title: "Client App",
    description: "Python client application experiment and interface prototype.",
    language: "Python",
    categories: ["tools"],
    tags: ["Client", "Prototype"]
  },
  {
    name: "norm-ai-fixer",
    title: "Norm AI Fixer",
    description: "Offline AI-assisted CLI that analyses and refactors code against configurable rules, including 42 Norm.",
    language: "Python",
    categories: ["ai", "tools"],
    tags: ["Local AI", "CLI"]
  },
  {
    name: "ai-guitar-midi-amp-controller",
    title: "AI Guitar MIDI Controller",
    description: "Python experiment for AI-assisted control of a guitar amplifier through MIDI.",
    language: "Python",
    categories: ["ai", "tools"],
    tags: ["MIDI", "Audio"]
  },
  {
    name: "calculator-app",
    title: "WPF Calculator",
    description: "Clean C# WPF calculator with keyboard input and an extensible desktop interface.",
    language: "C#",
    categories: ["tools"],
    tags: ["WPF", "Desktop"]
  },
  {
    name: "improve-norminette",
    title: "Improved Norminette",
    description: "Personalized tooling for checking and improving code compliance with the 42 style rules.",
    language: "Python",
    categories: ["tools", "school"],
    tags: ["Linting", "42 Norm"]
  },
  {
    name: "a_game_about_thing",
    title: "A Game About Thing",
    description: "Experimental game project built in C around a deliberately minimal concept.",
    language: "C",
    categories: ["tools"],
    tags: ["Game", "Prototype"]
  },
  {
    name: "Vim-Config",
    title: "Vim Config",
    description: "Personal Vim environment tuned for a fast keyboard-first development workflow.",
    language: "Vim Script",
    categories: ["tools"],
    tags: ["Vim", "Dotfiles"]
  },
  {
    name: "Nvim-Config",
    title: "Neovim Config",
    description: "Personal Neovim configuration and editor workflow experiments.",
    language: "Vim Script",
    categories: ["tools"],
    tags: ["Neovim", "Dotfiles"]
  },
  {
    name: "zsh-config",
    title: "Zsh Config",
    description: "Personal Zsh configuration for a productive terminal environment.",
    language: "Shell",
    categories: ["tools"],
    tags: ["Zsh", "Dotfiles"]
  },
  {
    name: "gnome-profile",
    title: "GNOME Profile",
    description: "Personal GNOME desktop profile and environment configuration.",
    language: "Config",
    categories: ["tools"],
    tags: ["GNOME", "Linux"]
  },
  {
    name: "Vim-C_compiler",
    title: "Vim C Compiler",
    description: "Vim workflow helper for compiling C projects directly from the editor.",
    language: "Vim Script",
    categories: ["tools"],
    tags: ["Vim", "C"]
  },
  {
    name: "arch-hyprland-config",
    title: "Arch Hyprland Config",
    description: "Personal Arch Linux and Hyprland desktop configuration with custom visual tooling.",
    language: "GLSL",
    categories: ["tools"],
    tags: ["Arch", "Hyprland"]
  },
  {
    name: "Zmoonfly",
    description: "Custom Vim colorscheme designed for focused development sessions.",
    language: "Vim Script",
    categories: ["tools"],
    tags: ["Vim", "Theme"]
  }
];

const categoryMeta = {
  all: { label: "All" },
  offensive: { label: "Offensive / research" },
  defensive: { label: "Blue team / infra" },
  systems: { label: "Low-level systems" },
  ai: { label: "Artificial intelligence" },
  school: { label: "42 cursus" },
  tools: { label: "Tools / creative" }
};

const featuredGrid = document.querySelector("#featured-grid");
const projectGrid = document.querySelector("#project-grid");
const filterRow = document.querySelector("#project-filters");
const searchInput = document.querySelector("#project-search");
const resultsStatus = document.querySelector("#results-status");
const loadMore = document.querySelector("#load-more");

let activeCategory = "all";
let archiveExpanded = false;
const initialProjectCount = 12;

const projectUrl = project => `https://github.com/Zibgame/${project.name}`;
const projectTitle = project => project.title || project.name.replaceAll("-", " ");

function renderFeatured() {
  featuredGrid.innerHTML = projects
    .filter(project => project.featured)
    .map((project, index) => `
      <a class="featured-card" data-accent="${project.accent}" data-code="0${index + 1}" href="${projectUrl(project)}" target="_blank" rel="noreferrer">
        <div class="featured-top">
          <span class="featured-type">${categoryMeta[project.categories[0]].label}</span>
          <span class="featured-arrow" aria-hidden="true">↗</span>
        </div>
        <h3>${projectTitle(project)}</h3>
        <p>${project.description}</p>
        <div class="featured-meta">${project.tags.map(tag => `<span>${tag}</span>`).join("")}<span>${project.language}</span></div>
      </a>`)
    .join("");
}

function renderFilters() {
  filterRow.innerHTML = Object.entries(categoryMeta).map(([key, meta]) => {
    const count = key === "all" ? projects.length : projects.filter(project => project.categories.includes(key)).length;
    return `<button class="filter-button${key === activeCategory ? " active" : ""}" type="button" data-category="${key}">${meta.label}<span class="filter-count">${count}</span></button>`;
  }).join("");
}

function filteredProjects() {
  const query = searchInput.value.trim().toLowerCase();
  return projects.filter(project => {
    const categoryMatches = activeCategory === "all" || project.categories.includes(activeCategory);
    const haystack = [project.name, projectTitle(project), project.description, project.language, ...project.tags].join(" ").toLowerCase();
    return categoryMatches && (!query || haystack.includes(query));
  });
}

function renderProjects() {
  const filtered = filteredProjects();
  const searching = searchInput.value.trim().length > 0;
  const visible = archiveExpanded || activeCategory !== "all" || searching ? filtered : filtered.slice(0, initialProjectCount);

  projectGrid.innerHTML = visible.length ? visible.map(project => `
    <a class="project-card" href="${projectUrl(project)}" target="_blank" rel="noreferrer">
      <div class="project-card-head">
        <span class="project-category">${categoryMeta[project.categories[0]].label}</span>
        <span aria-hidden="true">↗</span>
      </div>
      <h3>${projectTitle(project)}</h3>
      <p>${project.description}</p>
      <div class="project-tags"><span>${project.language}</span>${project.tags.slice(0, 2).map(tag => `<span>${tag}</span>`).join("")}</div>
    </a>`).join("") : `<div class="empty-state">No project matches this query. Try another signal.</div>`;

  const categoryLabel = categoryMeta[activeCategory].label.toLowerCase();
  resultsStatus.textContent = `${filtered.length.toString().padStart(2, "0")} result${filtered.length === 1 ? "" : "s"} · ${categoryLabel}`;
  loadMore.hidden = activeCategory !== "all" || searching || filtered.length <= initialProjectCount;
  loadMore.innerHTML = archiveExpanded
    ? "Collapse archive <span>↑</span>"
    : `Show ${filtered.length - initialProjectCount} more projects <span>+</span>`;
}

filterRow.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  archiveExpanded = false;
  renderFilters();
  renderProjects();
});

searchInput.addEventListener("input", renderProjects);
loadMore.addEventListener("click", () => {
  archiveExpanded = !archiveExpanded;
  renderProjects();
  if (!archiveExpanded) document.querySelector(".archive-head").scrollIntoView({ behavior: "smooth", block: "start" });
});

function openProjectCategory(category) {
  if (!categoryMeta[category]) return;
  activeCategory = category;
  archiveExpanded = true;
  searchInput.value = "";
  renderFilters();
  renderProjects();
  document.querySelector("#work").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("#category-launcher")?.addEventListener("click", event => {
  const trigger = event.target.closest("[data-jump-filter]");
  if (trigger) openProjectCategory(trigger.dataset.jumpFilter);
});

function renderDistributionChart() {
  const chart = document.querySelector("#distribution-chart");
  if (!chart) return;
  const keys = ["offensive", "defensive", "systems", "ai", "tools", "school"];
  const values = keys.map(key => ({
    key,
    label: categoryMeta[key].label.replace(" / research", "").replace(" / infra", "").replace(" systems", ""),
    count: projects.filter(project => project.categories.includes(key)).length
  }));
  const maximum = Math.max(...values.map(item => item.count));
  chart.innerHTML = values.map(item => `
    <button class="chart-row" type="button" data-category="${item.key}" aria-label="Show ${item.count} ${item.label} projects">
      <span class="chart-label">${item.label}</span>
      <span class="chart-track"><span class="chart-bar" style="width:${(item.count / maximum) * 100}%"></span></span>
      <span class="chart-value">${item.count}</span>
    </button>`).join("");
  chart.addEventListener("click", event => {
    const row = event.target.closest("[data-category]");
    if (row) openProjectCategory(row.dataset.category);
  });
}

renderFeatured();
renderFilters();
renderProjects();
renderDistributionChart();

// Boot sequence is brief on the first visit and skipped for the rest of the tab session.
const bootScreen = document.querySelector("#boot-screen");
const bootOutput = document.querySelector("#boot-output");
const bootSkip = document.querySelector("#boot-skip");
const bootLines = [
  ["dim", "[boot] mounting portfolio filesystem…"],
  ["ok", "[ ok ] 48 public projects indexed"],
  ["ok", "[ ok ] security research modules available"],
  ["ok", "[ ok ] identity: zcadinot@student.42lehavre.fr"],
  ["dim", "[exec] opening session for visitor"],
];

let bootTimers = [];
function closeBoot() {
  bootTimers.forEach(clearTimeout);
  bootTimers = [];
  bootScreen.classList.add("done");
  sessionStorage.setItem("zc-booted", "true");
}

if (sessionStorage.getItem("zc-booted") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  bootScreen.remove();
} else {
  bootLines.forEach(([className, text], index) => {
    bootTimers.push(setTimeout(() => {
      const line = document.createElement("p");
      line.className = className;
      line.textContent = text;
      bootOutput.append(line);
    }, 150 + index * 210));
  });
  bootTimers.push(setTimeout(closeBoot, 1500));
  bootSkip.addEventListener("click", closeBoot);
}

// Subtle data field: sparse columns and connectors, deliberately quieter than classic Matrix rain.
const canvas = document.querySelector("#matrix-canvas");
const context = canvas.getContext("2d");
let fieldWidth = 0;
let fieldHeight = 0;
let particles = [];
let fieldFrame = 0;
let fieldLastFrame = 0;
const FIELD_CHARS = "01ABCDEF$#<>[]{}+-*/\\アイウエオカキクケコサシスセソ";

function resizeField() {
  const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
  fieldWidth = window.innerWidth;
  fieldHeight = window.innerHeight;
  canvas.width = fieldWidth * ratio;
  canvas.height = fieldHeight * ratio;
  canvas.style.width = `${fieldWidth}px`;
  canvas.style.height = `${fieldHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  const particleCount = Math.min(140, Math.floor(fieldWidth / 18));
  particles = Array.from({ length: particleCount }, (_, index) => ({
    x: index * 18,
    y: Math.random() * fieldHeight
  }));
}

function drawField(timestamp = 0) {
  if (timestamp - fieldLastFrame > 52) {
    context.fillStyle = "rgba(5,10,14,.055)";
    context.fillRect(0, 0, fieldWidth, fieldHeight);
    context.font = "13px IBM Plex Mono";
    particles.forEach((particle, index) => {
      const glyph = FIELD_CHARS[Math.floor(Math.random() * FIELD_CHARS.length)];
      context.fillStyle = particle.y < fieldHeight * .3
        ? "rgba(0,255,149,.85)"
        : "rgba(0,255,149,.3)";
      context.fillText(glyph, particle.x, particle.y);
      particle.y += 18;
      if (particle.y > fieldHeight && Math.random() > .975) particle.y = 0;
    });
    fieldLastFrame = timestamp;
  }
  fieldFrame = requestAnimationFrame(drawField);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  resizeField();
  drawField();
  window.addEventListener("resize", resizeField, { passive: true });
} else {
  cancelAnimationFrame(fieldFrame);
}

// Scroll reveals and current navigation state.
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: .09 });
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const navigationLinks = [...document.querySelectorAll(".nav a")];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navigationLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-30% 0px -60%", threshold: 0 });
document.querySelectorAll("#work, #stack, #stats, #about, #contact").forEach(section => sectionObserver.observe(section));

// Command palette.
const commandDialog = document.querySelector("#command-dialog");
const commandTrigger = document.querySelector("#command-trigger");
const commandClose = document.querySelector("#command-close");
const commandInput = document.querySelector("#command-input");
const commandList = document.querySelector("#command-list");
const commands = [
  { icon: "01", label: "View project archive", hint: "section", target: "#work" },
  { icon: "02", label: "Inspect skills", hint: "section", target: "#stack" },
  { icon: "03", label: "View GitHub statistics", hint: "section", target: "#stats" },
  { icon: "04", label: "Read profile", hint: "section", target: "#about" },
  { icon: "05", label: "Contact Zibrian", hint: "section", target: "#contact" },
  { icon: "GH", label: "Open GitHub profile", hint: "external", target: "https://github.com/Zibgame" },
  { icon: "HT", label: "Open Hack The Box", hint: "external", target: "https://profile.hackthebox.com/profile/019d539a-c442-70f1-b6c9-1231e7ac1b94" }
];
let selectedCommand = 0;

function visibleCommands() {
  const query = commandInput.value.trim().toLowerCase();
  return commands.filter(command => command.label.toLowerCase().includes(query));
}

function renderCommands() {
  const visible = visibleCommands();
  if (selectedCommand >= visible.length) selectedCommand = 0;
  commandList.innerHTML = visible.map((command, index) => `
    <button class="command-item${index === selectedCommand ? " active" : ""}" type="button" data-command="${index}">
      <span>${command.icon}</span><span>${command.label}</span><small>${command.hint}</small>
    </button>`).join("") || `<p class="empty-state">Command not found.</p>`;
}

function openCommand() {
  if (commandDialog.open) return;
  selectedCommand = 0;
  commandInput.value = "";
  renderCommands();
  commandDialog.showModal();
  document.body.classList.add("menu-open");
  requestAnimationFrame(() => commandInput.focus());
}

function closeCommand() {
  if (commandDialog.open) commandDialog.close();
  document.body.classList.remove("menu-open");
}

function runCommand(index = selectedCommand) {
  const command = visibleCommands()[index];
  if (!command) return;
  closeCommand();
  if (command.target.startsWith("#")) document.querySelector(command.target)?.scrollIntoView({ behavior: "smooth" });
  else window.open(command.target, "_blank", "noopener,noreferrer");
}

commandTrigger.addEventListener("click", openCommand);
commandClose.addEventListener("click", closeCommand);
commandDialog.addEventListener("close", () => document.body.classList.remove("menu-open"));
commandDialog.addEventListener("click", event => { if (event.target === commandDialog) closeCommand(); });
commandInput.addEventListener("input", () => { selectedCommand = 0; renderCommands(); });
commandList.addEventListener("click", event => {
  const item = event.target.closest("[data-command]");
  if (item) runCommand(Number(item.dataset.command));
});

document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    commandDialog.open ? closeCommand() : openCommand();
    return;
  }
  if (commandDialog.open) {
    const count = visibleCommands().length;
    if (event.key === "ArrowDown") { event.preventDefault(); selectedCommand = count ? (selectedCommand + 1) % count : 0; renderCommands(); }
    if (event.key === "ArrowUp") { event.preventDefault(); selectedCommand = count ? (selectedCommand - 1 + count) % count : 0; renderCommands(); }
    if (event.key === "Enter") { event.preventDefault(); runCommand(); }
    return;
  }
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus({ preventScroll: false });
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
const localTime = document.querySelector("#local-time");
function updateLocalTime() {
  const value = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Paris", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());
  localTime.textContent = `${value} local`;
}
updateLocalTime();
setInterval(updateLocalTime, 60000);
