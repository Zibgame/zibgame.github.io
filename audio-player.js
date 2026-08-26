(() => {
  "use strict";

  const dock = document.querySelector("#audio-dock");
  if (!dock) return;

  const toggle = document.querySelector("#audio-dock-toggle");
  const panel = document.querySelector("#audio-panel");
  const close = document.querySelector("#audio-close");
  const playButton = document.querySelector("#audio-play");
  const previousButton = document.querySelector("#audio-prev");
  const nextButton = document.querySelector("#audio-next");
  const trackList = document.querySelector("#audio-track-list");
  const trackName = document.querySelector("#audio-track-name");
  const trackIndex = document.querySelector("#audio-track-index");
  const audioState = document.querySelector("#audio-state");
  const volume = document.querySelector("#audio-volume");
  const volumeValue = document.querySelector("#audio-volume-value");
  const visualizer = document.querySelector("#audio-visualizer");
  const visualizerContext = visualizer.getContext("2d");

  const tracks = [
    {
      name: "Signal Drift",
      mode: "ambient / 76 bpm",
      bpm: 76,
      root: 55,
      bass: [0, null, 0, null, 7, null, 5, null, 0, null, 3, null, 7, null, 10, null],
      lead: [12, null, 19, null, 15, null, 22, null, 12, null, 17, null, 19, null, 15, null],
      chords: [[0, 7, 12], [5, 12, 15], [3, 10, 15], [7, 14, 17]]
    },
    {
      name: "Midnight Compile",
      mode: "lo-fi / 84 bpm",
      bpm: 84,
      root: 65.41,
      bass: [0, null, 0, 7, null, 5, null, 7, 0, null, 3, null, 5, null, 7, null],
      lead: [19, null, 15, null, 12, 15, null, 17, 19, null, 22, null, 17, 15, null, 12],
      chords: [[0, 3, 7], [5, 8, 12], [7, 10, 14], [3, 7, 10]]
    },
    {
      name: "Null Sector",
      mode: "darkwave / 68 bpm",
      bpm: 68,
      root: 46.25,
      bass: [0, null, null, 0, 6, null, null, 5, 0, null, 3, null, 6, null, 5, null],
      lead: [12, null, 13, null, 18, null, 17, null, 12, null, 15, null, 18, null, 13, null],
      chords: [[0, 6, 12], [5, 11, 15], [3, 9, 15], [6, 12, 17]]
    }
  ];

  let audioContext;
  let analyser;
  let master;
  let timer;
  let playing = false;
  let step = 0;
  let selectedTrack = Number(localStorage.getItem("zc-audio-track")) || 0;
  let requestedVolume = Number(localStorage.getItem("zc-audio-volume"));
  if (!Number.isFinite(requestedVolume)) requestedVolume = 28;
  requestedVolume = Math.max(0, Math.min(100, requestedVolume));
  volume.value = String(requestedVolume);

  const frequency = (root, semitones) => root * Math.pow(2, semitones / 12);

  function setupAudio() {
    if (audioContext) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      audioState.textContent = "UNSUPPORTED";
      playButton.disabled = true;
      return;
    }
    audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 128;
    analyser.smoothingTimeConstant = .82;
    master = audioContext.createGain();
    master.gain.value = requestedVolume / 100 * .32;
    master.connect(analyser);
    analyser.connect(audioContext.destination);
  }

  function synth(freq, length, type = "triangle", gain = .05, cutoff = 1200, detune = 0) {
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const filter = audioContext.createBiquadFilter();
    const envelope = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(freq, now);
    oscillator.detune.value = detune;
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(cutoff, now);
    filter.Q.value = .7;
    envelope.gain.setValueAtTime(.0001, now);
    envelope.gain.exponentialRampToValueAtTime(gain, now + .025);
    envelope.gain.exponentialRampToValueAtTime(.0001, now + length);
    oscillator.connect(filter);
    filter.connect(envelope);
    envelope.connect(master);
    oscillator.start(now);
    oscillator.stop(now + length + .05);
  }

  function kick() {
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const envelope = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(105, now);
    oscillator.frequency.exponentialRampToValueAtTime(42, now + .12);
    envelope.gain.setValueAtTime(.08, now);
    envelope.gain.exponentialRampToValueAtTime(.0001, now + .16);
    oscillator.connect(envelope);
    envelope.connect(master);
    oscillator.start(now);
    oscillator.stop(now + .17);
  }

  function playStep() {
    const track = tracks[selectedTrack];
    const beatLength = 60 / track.bpm;
    const bassNote = track.bass[step % track.bass.length];
    const leadNote = track.lead[step % track.lead.length];

    if (bassNote !== null) synth(frequency(track.root, bassNote), beatLength * .7, "triangle", .055, 480);
    if (leadNote !== null) synth(frequency(track.root, leadNote), beatLength * .42, "sine", .022, 1600, step % 4 === 0 ? -5 : 5);
    if (step % 4 === 0) kick();
    if (step % 8 === 0) {
      const chord = track.chords[Math.floor(step / 8) % track.chords.length];
      chord.forEach((note, index) => synth(frequency(track.root, note + 12), beatLength * 3.6, "sine", .009, 850, index * 4 - 4));
    }
    step = (step + 1) % 32;
  }

  function beginSequence() {
    clearInterval(timer);
    step = 0;
    playStep();
    const interval = (60 / tracks[selectedTrack].bpm) * 500;
    timer = window.setInterval(playStep, interval);
  }

  async function togglePlayback() {
    setupAudio();
    if (!audioContext) return;
    if (playing) {
      clearInterval(timer);
      await audioContext.suspend();
      playing = false;
    } else {
      await audioContext.resume();
      playing = true;
      beginSequence();
    }
    renderState();
  }

  function selectTrack(index) {
    selectedTrack = (index + tracks.length) % tracks.length;
    localStorage.setItem("zc-audio-track", String(selectedTrack));
    if (playing) beginSequence();
    renderState();
  }

  function renderState() {
    const track = tracks[selectedTrack];
    dock.classList.toggle("playing", playing);
    trackName.textContent = track.name;
    trackIndex.textContent = `${String(selectedTrack + 1).padStart(2, "0")} / ${String(tracks.length).padStart(2, "0")}`;
    audioState.textContent = playing ? "STREAMING" : "STANDBY";
    playButton.innerHTML = `<span aria-hidden="true">${playing ? "PAUSE" : "PLAY"}</span>`;
    playButton.setAttribute("aria-label", `${playing ? "Pause" : "Play"} ${track.name}`);
    volumeValue.textContent = `${volume.value}%`;
    trackList.innerHTML = tracks.map((item, index) => `
      <button class="audio-track-option${index === selectedTrack ? " active" : ""}" type="button" data-audio-track="${index}" aria-pressed="${index === selectedTrack}">
        <span>${String(index + 1).padStart(2, "0")}</span><span>${item.name}</span><small>${item.mode}</small>
      </button>`).join("");
  }

  function setOpen(open) {
    dock.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    panel.setAttribute("aria-hidden", String(!open));
  }

  function drawVisualizer() {
    const width = visualizer.width;
    const height = visualizer.height;
    const bars = 28;
    const gap = 3;
    const barWidth = (width - gap * (bars - 1)) / bars;
    let data;
    if (playing && analyser) {
      data = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(data);
    }
    visualizerContext.clearRect(0, 0, width, height);
    for (let index = 0; index < bars; index += 1) {
      const idle = 3 + ((index * 7) % 5);
      const sample = data ? data[Math.floor(index / bars * Math.min(44, data.length))] : 0;
      const barHeight = data ? Math.max(2, sample / 255 * (height - 5)) : idle;
      const x = index * (barWidth + gap);
      const gradient = visualizerContext.createLinearGradient(0, height, 0, 0);
      gradient.addColorStop(0, "rgba(0,255,149,.88)");
      gradient.addColorStop(.72, "rgba(0,212,255,.72)");
      gradient.addColorStop(1, "rgba(0,212,255,.18)");
      visualizerContext.fillStyle = gradient;
      visualizerContext.fillRect(x, height - barHeight, barWidth, barHeight);
    }
    requestAnimationFrame(drawVisualizer);
  }

  toggle.addEventListener("click", () => setOpen(!dock.classList.contains("open")));
  close.addEventListener("click", () => setOpen(false));
  playButton.addEventListener("click", togglePlayback);
  previousButton.addEventListener("click", () => selectTrack(selectedTrack - 1));
  nextButton.addEventListener("click", () => selectTrack(selectedTrack + 1));
  trackList.addEventListener("click", event => {
    const option = event.target.closest("[data-audio-track]");
    if (option) selectTrack(Number(option.dataset.audioTrack));
  });
  volume.addEventListener("input", () => {
    requestedVolume = Number(volume.value);
    volumeValue.textContent = `${requestedVolume}%`;
    localStorage.setItem("zc-audio-volume", String(requestedVolume));
    if (master && audioContext) master.gain.setTargetAtTime(requestedVolume / 100 * .32, audioContext.currentTime, .025);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && dock.classList.contains("open")) setOpen(false);
  });

  renderState();
  drawVisualizer();
})();
