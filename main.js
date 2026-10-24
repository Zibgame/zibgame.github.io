const projects = [
  {
    name: "Obsidian-Packer",
    title: "Obsidian Packer",
    description: "Open-source x86-64 PE packer built to study in-memory loading, mutation and static-signature reduction in controlled labs.",
    language: "C++",
    primaryCategory: "offensive",
    secondaryCategories: ["lowlevel"],
    tags: ["PE32+", "Windows", "In-memory loader"],
    featured: true
  },
  {
    name: "Stealth-Hypervisor",
    title: "Stealth Hypervisor",
    description: "Type-1 UEFI hypervisor for Windows x64 focused on VM introspection, execution control and guest-memory research.",
    language: "C",
    primaryCategory: "offensive",
    secondaryCategories: ["lowlevel"],
    tags: ["UEFI", "Virtualization", "Windows"],
    featured: true
  },
  {
    name: "ft_shield",
    title: "ft_shield",
    description: "Native Win32 security project combining an authenticated multi-client shell, persistence and anti-analysis research.",
    language: "C",
    primaryCategory: "offensive",
    secondaryCategories: ["lowlevel", "school"],
    tags: ["Win32", "Networking", "Anti-analysis"],
    featured: true
  },
  {
    name: "ft_rainfall",
    title: "ft_rainfall",
    description: "Documented x86-64 ELF exploitation and reverse-engineering work covering stack analysis, control flow and debugging.",
    language: "x86-64",
    primaryCategory: "offensive",
    secondaryCategories: ["lowlevel", "school"],
    tags: ["Binary exploitation", "ELF", "Reverse engineering"],
    featured: true
  },
  {
    name: "AntiDebugger-Win64",
    title: "AntiDebugger Win64",
    description: "Lightweight C/C++ library exploring debugger detection, breakpoint analysis and runtime anomalies on Windows.",
    language: "C++",
    primaryCategory: "offensive",
    secondaryCategories: ["lowlevel", "defensive"],
    tags: ["Anti-debug", "WinAPI", "Detection"],
    featured: true
  },
  {
    name: "intigriti-writeups",
    title: "Intigriti Writeups",
    description: "Authorized web-security findings and technical writeups covering IDOR, APIs, access control and business logic.",
    language: "Research",
    primaryCategory: "offensive",
    secondaryCategories: ["defensive"],
    tags: ["Bug bounty", "Web security", "Reports"],
    featured: true
  },
  {
    name: "PrivEscLib-Win64",
    title: "PrivEscLib Win64",
    description: "Modular Windows privilege-boundary research library for studying elevation strategies in controlled environments.",
    language: "C++",
    primaryCategory: "offensive",
    secondaryCategories: ["lowlevel"],
    tags: ["Win64", "Privileges", "Token security"]
  },
  {
    name: "C2-Windows-x64",
    title: "C2 Windows x64",
    description: "Controlled-lab Windows command-channel project demonstrating socket protocols, remote execution and detection surfaces.",
    language: "C++",
    primaryCategory: "offensive",
    secondaryCategories: ["lowlevel"],
    tags: ["Winsock", "Networking", "Windows"]
  },
  {
    name: "win64-dll-injector",
    title: "Win64 DLL Injector",
    description: "Process-memory and DLL-loading experiment built to study Windows internals and execution visibility.",
    language: "C++",
    primaryCategory: "offensive",
    secondaryCategories: ["lowlevel"],
    tags: ["WinAPI", "Process memory", "DLL loading"]
  },
  {
    name: "PersistenceLib-Win64",
    title: "PersistenceLib Win64",
    description: "C++ APIs for setting up, detecting and removing common Windows persistence mechanisms in a lab.",
    language: "C++",
    primaryCategory: "offensive",
    secondaryCategories: ["defensive", "lowlevel"],
    tags: ["Registry", "Scheduled tasks", "Detection"]
  },
  {
    name: "UDP-Flood-Win64",
    title: "UDP Traffic Lab",
    description: "Educational implementation for understanding UDP traffic stress, sockets, threading and denial-of-service detection.",
    language: "C++",
    primaryCategory: "offensive",
    secondaryCategories: ["defensive"],
    tags: ["UDP", "Networking", "Controlled lab"]
  },
  {
    name: "BadUSB",
    description: "USB HID research framework for rapid payload execution and authorized red-team experimentation.",
    language: "C++",
    primaryCategory: "offensive",
    secondaryCategories: [],
    tags: ["USB HID", "Red team", "Payload research"]
  },
  {
    name: "Inception",
    description: "Secure multi-container infrastructure with NGINX, WordPress, MariaDB, isolated networks and persistent volumes.",
    language: "Shell",
    primaryCategory: "defensive",
    secondaryCategories: ["school"],
    tags: ["Docker", "NGINX", "Infrastructure"]
  },
  {
    name: "NetPractice",
    description: "TCP/IP addressing, subnetting, routing and gateway configuration through simulated networks.",
    language: "Networking",
    primaryCategory: "defensive",
    secondaryCategories: ["school"],
    tags: ["TCP/IP", "Subnets", "Routing"]
  },
  {
    name: "Born2beRoot",
    description: "Linux server administration, virtualization, access policy and system-hardening foundations.",
    language: "Shell",
    primaryCategory: "defensive",
    secondaryCategories: ["school"],
    tags: ["Linux", "Hardening", "Access control"]
  },
  {
    name: "Nebula-Os",
    title: "Nebula OS",
    description: "Windows optimization playbook focused on privacy, stability and reducing unnecessary system overhead.",
    language: "PowerShell",
    primaryCategory: "defensive",
    secondaryCategories: ["tooling"],
    tags: ["Windows", "Privacy", "Hardening"]
  },
  {
    name: "Nebula-Optimizer",
    description: "Windows game-profile launcher designed to reduce system overhead before competitive sessions.",
    language: "C++",
    primaryCategory: "lowlevel",
    secondaryCategories: ["tooling"],
    tags: ["Windows", "Performance", "System tooling"]
  },
  {
    name: "Zim",
    description: "Minimal terminal text editor written in C++ with Vim-inspired modal editing and real-time navigation.",
    language: "C++",
    primaryCategory: "lowlevel",
    secondaryCategories: ["tooling"],
    tags: ["TUI", "Editor", "Modal input"]
  },
  {
    name: "ft_libasm",
    title: "ft_libasm",
    description: "x86-64 assembly library reimplementing essential routines while exploring ABI rules, syscalls and memory.",
    language: "Assembly",
    primaryCategory: "lowlevel",
    secondaryCategories: ["school"],
    tags: ["x86-64", "ABI", "Syscalls"]
  },
  {
    name: "Minishell",
    description: "Bash-like POSIX shell with parsing, pipes, redirections, environment variables and built-ins.",
    language: "C",
    primaryCategory: "lowlevel",
    secondaryCategories: ["school"],
    tags: ["Unix", "Processes", "Parsing"]
  },
  {
    name: "Philosophers",
    description: "Multithreaded dining-philosophers simulation focused on mutexes, timing and deadlock avoidance.",
    language: "C",
    primaryCategory: "lowlevel",
    secondaryCategories: ["school"],
    tags: ["Threads", "Mutex", "Concurrency"]
  },
  {
    name: "minitalk",
    title: "Minitalk",
    description: "Client-server inter-process communication using Unix signals and bitwise data transfer.",
    language: "C",
    primaryCategory: "lowlevel",
    secondaryCategories: ["school"],
    tags: ["Signals", "IPC", "Bitwise"]
  },
  {
    name: "libft",
    title: "Libft",
    description: "Personal C standard-library foundation with reusable memory, string and data-structure primitives.",
    language: "C",
    primaryCategory: "lowlevel",
    secondaryCategories: ["school"],
    tags: ["Memory", "Library", "C"]
  },
  {
    name: "Mockify",
    description: "AI-assisted mockup generation pipeline with automated visual inspection and iterative correction loops.",
    language: "Python",
    primaryCategory: "ai",
    secondaryCategories: ["creative"],
    tags: ["AI", "Automation", "Vision"]
  },
  {
    name: "norm-ai-fixer",
    title: "Norm AI Fixer",
    description: "Offline AI-assisted CLI that analyses and refactors code against configurable rules, including the 42 Norm.",
    language: "Python",
    primaryCategory: "ai",
    secondaryCategories: ["tooling"],
    tags: ["Local AI", "CLI", "Refactoring"]
  },
  {
    name: "ai-guitar-midi-amp-controller",
    title: "AI Guitar MIDI Controller",
    description: "Python experiment for AI-assisted control of a guitar amplifier through MIDI.",
    language: "Python",
    primaryCategory: "ai",
    secondaryCategories: ["creative"],
    tags: ["MIDI", "Audio", "Automation"]
  },
  {
    name: "42_Piscine",
    title: "42 Piscine",
    description: "C, Shell, logic and algorithm foundations completed during the 42 Le Havre Piscine.",
    language: "C",
    primaryCategory: "lowlevel",
    secondaryCategories: ["school"],
    tags: ["C", "Shell", "Algorithms"]
  },
  {
    name: "42_cpp",
    title: "42 C++ Modules",
    description: "Progressive C++ modules covering object-oriented design, templates, containers and modern idioms.",
    language: "C++",
    primaryCategory: "lowlevel",
    secondaryCategories: ["school"],
    tags: ["OOP", "STL", "Templates"]
  },
  {
    name: "ft_transcendence",
    title: "ft_transcendence",
    description: "Full-stack multiplayer web application developed as the final 42 common-core project.",
    language: "TypeScript",
    primaryCategory: "tooling",
    secondaryCategories: ["school"],
    tags: ["Full stack", "Multiplayer", "Web"]
  },
  {
    name: "push_swap",
    title: "Push Swap",
    description: "Constrained sorting project focused on algorithm design and operation-count optimization.",
    language: "C",
    primaryCategory: "lowlevel",
    secondaryCategories: ["school"],
    tags: ["Sorting", "Algorithms", "Optimization"]
  },
  {
    name: "ft_printf",
    title: "ft_printf",
    description: "Custom implementation of printf with variadic arguments, formatting and conversion parsing.",
    language: "C",
    primaryCategory: "lowlevel",
    secondaryCategories: ["school"],
    tags: ["Variadic", "Parsing", "Formatting"]
  },
  {
    name: "improve-norminette",
    title: "Improved Norminette",
    description: "Python tooling for checking and improving code compliance with the 42 style rules.",
    language: "Python",
    primaryCategory: "tooling",
    secondaryCategories: ["school"],
    tags: ["Linting", "42 Norm", "Developer experience"]
  },
  {
    name: "arch-hyprland-config",
    title: "Arch Hyprland Environment",
    description: "Personal Arch Linux and Hyprland environment focused on a fast keyboard-driven workflow.",
    language: "GLSL / Config",
    primaryCategory: "tooling",
    secondaryCategories: [],
    tags: ["Arch Linux", "Hyprland", "Workflow"]
  },
  {
    name: "so_long",
    title: "So Long",
    description: "Small 2D game in C using MiniLibX, with map parsing, events, sprites and a minimal game loop.",
    language: "C",
    primaryCategory: "creative",
    secondaryCategories: ["school"],
    tags: ["MiniLibX", "Game", "Rendering"]
  },
  {
    name: "a_game_about_thing",
    title: "A Game About Thing",
    description: "Experimental game project in C exploring a deliberately minimal concept and custom gameplay systems.",
    language: "C",
    primaryCategory: "creative",
    secondaryCategories: [],
    tags: ["Game", "Prototype", "C"]
  }
];

const categoryMeta = {
  all: { label: "All projects", shortLabel: "All", color: "#00ff95" },
  offensive: { label: "Offensive security", shortLabel: "Offensive", color: "#ff4060" },
  defensive: { label: "Defense & infrastructure", shortLabel: "Defense", color: "#00d4ff" },
  lowlevel: { label: "Low-level & reverse", shortLabel: "Low-level", color: "#00ff95" },
  ai: { label: "AI & automation", shortLabel: "AI", color: "#ffc85a" },
  school: { label: "42 coursework", shortLabel: "42", color: "#4ea1ff", filter: false },
  tooling: { label: "Developer tooling", shortLabel: "Tooling", color: "#a678ff" },
  creative: { label: "Creative & games", shortLabel: "Creative", color: "#ff75b5" }
};

const projectCategories = project => [project.primaryCategory, ...(project.secondaryCategories || [])];

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
      <a class="featured-card project-enter" data-category="${project.primaryCategory}" data-code="0${index + 1}" style="--category-color:${categoryMeta[project.primaryCategory].color}" href="${projectUrl(project)}" target="_blank" rel="noreferrer">
        <div class="featured-top">
          <span class="featured-type">${categoryMeta[project.primaryCategory].label}</span>
          <span class="featured-arrow" aria-hidden="true">↗</span>
        </div>
        <h3>${projectTitle(project)}</h3>
        <p>${project.description}</p>
        <div class="featured-meta">${project.tags.map(tag => `<span>${tag}</span>`).join("")}<span>${project.language}</span></div>
      </a>`)
    .join("");

  requestAnimationFrame(() => {
    featuredGrid.querySelectorAll(".project-enter").forEach((card, index) => {
      card.style.setProperty("--enter-delay", `${index * 55}ms`);
      card.classList.add("entered");
    });
  });
}

function renderFilters() {
  filterRow.innerHTML = Object.entries(categoryMeta).filter(([, meta]) => meta.filter !== false).map(([key, meta]) => {
    const count = key === "all" ? projects.length : projects.filter(project => projectCategories(project).includes(key)).length;
    return `<button class="filter-button${key === activeCategory ? " active" : ""}" style="--category-color:${meta.color}" type="button" data-category="${key}" aria-pressed="${key === activeCategory}">${meta.label}<span class="filter-count">${count}</span></button>`;
  }).join("");
}

function filteredProjects() {
  const query = searchInput.value.trim().toLowerCase();
  return projects.filter(project => {
    const categories = projectCategories(project);
    const categoryMatches = activeCategory === "all" || categories.includes(activeCategory);
    const categoryLabels = categories.map(category => categoryMeta[category].label);
    const haystack = [project.name, projectTitle(project), project.description, project.language, ...project.tags, ...categoryLabels].join(" ").toLowerCase();
    return categoryMatches && (!query || haystack.includes(query));
  });
}

function renderProjects() {
  const filtered = filteredProjects();
  const searching = searchInput.value.trim().length > 0;
  const visible = archiveExpanded || activeCategory !== "all" || searching ? filtered : filtered.slice(0, initialProjectCount);

  projectGrid.innerHTML = visible.length ? visible.map(project => `
    <a class="project-card project-enter" data-category="${project.primaryCategory}" style="--category-color:${categoryMeta[project.primaryCategory].color}" href="${projectUrl(project)}" target="_blank" rel="noreferrer">
      <div class="project-card-head">
        <span class="project-category">${categoryMeta[project.primaryCategory].label}</span>
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
    ? "Collapse projects <span>↑</span>"
    : `Show remaining ${filtered.length - initialProjectCount} projects <span>+</span>`;

  requestAnimationFrame(() => {
    projectGrid.querySelectorAll(".project-enter").forEach((card, index) => {
      card.style.setProperty("--enter-delay", `${Math.min(index, 8) * 34}ms`);
      card.classList.add("entered");
    });
  });
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

function renderDistributionChart() {
  const chart = document.querySelector("#distribution-chart");
  if (!chart) return;
  const values = [
    { key: "offensive", label: "Offensive", focus: 92 },
    { key: "lowlevel", label: "Low-level", focus: 68 },
    { key: "defensive", label: "Defense", focus: 38 },
    { key: "ai", label: "AI", focus: 26 },
    { key: "tooling", label: "Tooling", focus: 20 },
    { key: "creative", label: "Creative", focus: 12 }
  ];
  chart.innerHTML = values.map(item => `
    <button class="chart-row" type="button" data-category="${item.key}" style="--category-color:${categoryMeta[item.key].color}" aria-label="Open ${item.label} projects">
      <span class="chart-label">${item.label}</span>
      <span class="chart-track"><span class="chart-bar" style="--bar-width:${item.focus}%"></span></span>
      <span class="chart-value">${item.focus}%</span>
    </button>`).join("");
  chart.addEventListener("click", event => {
    const row = event.target.closest("[data-category]");
    if (row) openProjectCategory(row.dataset.category);
  });

  const chartObserver = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    chart.classList.add("chart-visible");
    chartObserver.disconnect();
  }, { threshold: .3 });
  chartObserver.observe(chart);
}

renderFeatured();
renderFilters();
renderProjects();
renderDistributionChart();

const githubFallback = { publicRepos: 56, followers: 39, stars: 61 };

function setMetric(name, value) {
  document.querySelectorAll(`[data-stat="${name}"]`).forEach(element => {
    element.textContent = value;
  });
}

setMetric("selected", projects.length);
setMetric("public", githubFallback.publicRepos);
setMetric("followers", githubFallback.followers);
setMetric("stars", githubFallback.stars);

async function refreshGitHubMetrics() {
  try {
    const [profileResponse, repositoriesResponse] = await Promise.all([
      fetch("https://api.github.com/users/Zibgame", { headers: { Accept: "application/vnd.github+json" } }),
      fetch("https://api.github.com/users/Zibgame/repos?per_page=100&sort=updated", { headers: { Accept: "application/vnd.github+json" } })
    ]);
    if (!profileResponse.ok || !repositoriesResponse.ok) throw new Error("GitHub API unavailable");
    const profile = await profileResponse.json();
    const repositories = await repositoriesResponse.json();
    setMetric("public", profile.public_repos);
    setMetric("followers", profile.followers);
    setMetric("stars", repositories.reduce((total, repository) => total + repository.stargazers_count, 0));
    document.querySelector(".github-stat-grid")?.classList.add("is-live");
  } catch (error) {
    document.querySelector(".github-stat-grid")?.classList.add("is-fallback");
  }
}

refreshGitHubMetrics();

const skillGrid = document.querySelector(".skill-grid");
const skillTiles = skillGrid ? [...skillGrid.querySelectorAll(".skill-tile")] : [];
let skillScanIndex = 0;
let skillScanTimer = 0;

function showNextSkill() {
  skillTiles.forEach((tile, index) => tile.classList.toggle("is-scanning", index === skillScanIndex));
  skillScanIndex = (skillScanIndex + 1) % skillTiles.length;
}

function startSkillScan() {
  if (!skillTiles.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  clearInterval(skillScanTimer);
  showNextSkill();
  skillScanTimer = setInterval(showNextSkill, 1150);
}

function pauseSkillScan() {
  clearInterval(skillScanTimer);
  skillScanTimer = 0;
  skillTiles.forEach(tile => tile.classList.remove("is-scanning"));
}

skillGrid?.addEventListener("pointerenter", pauseSkillScan);
skillGrid?.addEventListener("pointerleave", startSkillScan);
skillGrid?.addEventListener("focusin", pauseSkillScan);
skillGrid?.addEventListener("focusout", event => {
  if (!skillGrid.contains(event.relatedTarget)) startSkillScan();
});
startSkillScan();

// Boot sequence is brief on the first visit and skipped for the rest of the tab session.
const bootScreen = document.querySelector("#boot-screen");
const bootOutput = document.querySelector("#boot-output");
const bootSkip = document.querySelector("#boot-skip");
const bootLines = [
  ["dim", "[boot] mounting portfolio filesystem…"],
  ["ok", `[ ok ] ${projects.length} selected projects indexed`],
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
const sectionCommands = [
  { icon: "01", label: "View project archive", hint: "section", target: "#work" },
  { icon: "02", label: "Inspect skills", hint: "section", target: "#stack" },
  { icon: "03", label: "View GitHub statistics", hint: "section", target: "#stats" },
  { icon: "04", label: "Read profile", hint: "section", target: "#about" },
  { icon: "05", label: "Contact Zibrian", hint: "section", target: "#contact" }
];
const categoryCommands = Object.entries(categoryMeta)
  .filter(([key, meta]) => key !== "all" && meta.filter !== false)
  .map(([key, meta], index) => ({ icon: `C${index + 1}`, label: `Filter: ${meta.label}`, hint: "projects", category: key }));
const commands = [
  ...sectionCommands,
  ...categoryCommands,
  { icon: "GH", label: "Open GitHub profile", hint: "external", target: "https://github.com/Zibgame" },
  { icon: "LI", label: "Open LinkedIn", hint: "external", target: "https://www.linkedin.com/in/zibrian-cadinot" },
  { icon: "HT", label: "Open Hack The Box", hint: "external", target: "https://profile.hackthebox.com/profile/019d539a-c442-70f1-b6c9-1231e7ac1b94" },
  { icon: "IN", label: "Open Intigriti", hint: "external", target: "https://app.intigriti.com/researcher/profile/zibgame" },
  { icon: "@", label: "Email Zibrian", hint: "contact", target: "mailto:zcadinot@student.42lehavre.fr" }
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
  if (command.category) openProjectCategory(command.category);
  else if (command.target.startsWith("#")) document.querySelector(command.target)?.scrollIntoView({ behavior: "smooth" });
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
