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
      name: "Aura Override",
      mode: "hacker aura / 72 bpm",
      bpm: 72,
      root: 55,
      bassWave: "sine",
      leadWave: "sine",
      bassCutoff: 430,
      chordEvery: 8,
      kickSteps: [0, 8],
      snareSteps: [],
      hatEvery: 0,
      bass: [0, null, null, null, 7, null, null, null, 5, null, null, null, 3, null, 7, null],
      lead: [19, null, null, 22, null, null, 15, null, 17, null, null, 19, null, 15, null, 12],
      chords: [[0, 7, 12, 19], [5, 12, 17, 21], [3, 10, 15, 22], [7, 14, 17, 24]]
    },
    {
      name: "Root Access",
      mode: "dark phonk / 98 bpm",
      bpm: 98,
      root: 49,
      bassWave: "sawtooth",
      leadWave: "square",
      bassCutoff: 620,
      chordEvery: 16,
      kickSteps: [0, 3, 6, 8, 11, 14],
      snareSteps: [4, 12],
      hatEvery: 2,
      bass: [0, null, 0, 7, null, 6, 5, null, 0, 0, null, 3, 5, null, 6, 7],
      lead: [24, null, 19, 22, null, 18, null, 19, 24, null, 27, null, 22, 19, null, 18],
      chords: [[0, 3, 7], [6, 9, 13]]
    },
    {
      name: "Zero-Day Run",
      mode: "industrial / 116 bpm",
      bpm: 116,
      root: 43.65,
      bassWave: "square",
      leadWave: "sawtooth",
      bassCutoff: 780,
      chordEvery: 16,
      kickSteps: [0, 2, 4, 6, 8, 10, 12, 14],
      snareSteps: [4, 12],
      hatEvery: 1,
      bass: [0, 0, 12, 0, 6, 0, 5, 0, 0, 12, 0, 3, 6, 5, 3, 0],
      lead: [12, 13, null, 18, 17, null, 13, 12, 24, null, 18, 17, null, 15, 13, null],
      chords: [[0, 6, 12], [3, 9, 15]]
    }
  ];

  let audioContext;
  let analyser;
  let master;
  let compressor;
  let noiseBuffer;
  let delayNode;
  let delayFeedback;
  let delayWet;
  let timer;
  let playing = false;
  let step = 0;
  let selectedTrack = Number(localStorage.getItem("zc-audio-track")) || 0;
  let requestedVolume = Number(localStorage.getItem("zc-audio-volume"));
  if (!Number.isFinite(requestedVolume)) requestedVolume = 28;
  requestedVolume = Math.max(0, Math.min(100, requestedVolume));
  volume.value = String(requestedVolume);

  const frequency = (root, semitones) => root * Math.pow(2, semitones / 12);
  const volumeToGain = value => Math.pow(value / 100, 1.3) * 1.4;

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
    compressor = audioContext.createDynamicsCompressor();
    compressor.threshold.value = -20;
    compressor.knee.value = 24;
    compressor.ratio.value = 5;
    compressor.attack.value = .004;
    compressor.release.value = .22;
    delayNode = audioContext.createDelay(.8);
    delayFeedback = audioContext.createGain();
    delayWet = audioContext.createGain();
    delayNode.delayTime.value = .31;
    delayFeedback.gain.value = .22;
    delayWet.gain.value = .22;
    noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate, audioContext.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let index = 0; index < noiseData.length; index += 1) noiseData[index] = Math.random() * 2 - 1;
    master.gain.value = volumeToGain(requestedVolume);
    master.connect(compressor);
    delayNode.connect(delayFeedback);
    delayFeedback.connect(delayNode);
    delayNode.connect(delayWet);
    delayWet.connect(master);
    compressor.connect(analyser);
    analyser.connect(audioContext.destination);
  }

  function synth(freq, length, type = "triangle", gain = .05, cutoff = 1200, detune = 0, space = 0, attack = .025) {
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const filter = audioContext.createBiquadFilter();
    const envelope = audioContext.createGain();
    const send = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(freq, now);
    oscillator.detune.value = detune;
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(cutoff, now);
    filter.Q.value = type === "sawtooth" ? 2.4 : .8;
    envelope.gain.setValueAtTime(.0001, now);
    envelope.gain.exponentialRampToValueAtTime(gain, now + attack);
    envelope.gain.exponentialRampToValueAtTime(.0001, now + length);
    send.gain.value = space;
    oscillator.connect(filter);
    filter.connect(envelope);
    envelope.connect(master);
    if (space > 0) {
      envelope.connect(send);
      send.connect(delayNode);
    }
    oscillator.start(now);
    oscillator.stop(now + length + .05);
  }

  function kick(power = 1) {
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const envelope = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(105, now);
    oscillator.frequency.exponentialRampToValueAtTime(42, now + .12);
    envelope.gain.setValueAtTime(.16 * power, now);
    envelope.gain.exponentialRampToValueAtTime(.0001, now + .16);
    oscillator.connect(envelope);
    envelope.connect(master);
    oscillator.start(now);
    oscillator.stop(now + .17);
  }

  function noiseHit(kind = "hat") {
    const now = audioContext.currentTime;
    const source = audioContext.createBufferSource();
    const filter = audioContext.createBiquadFilter();
    const envelope = audioContext.createGain();
    const isSnare = kind === "snare";
    source.buffer = noiseBuffer;
    filter.type = "highpass";
    filter.frequency.value = isSnare ? 1100 : 5700;
    envelope.gain.setValueAtTime(isSnare ? .065 : .025, now);
    envelope.gain.exponentialRampToValueAtTime(.0001, now + (isSnare ? .16 : .045));
    source.connect(filter);
    filter.connect(envelope);
    envelope.connect(master);
    source.start(now);
    source.stop(now + (isSnare ? .17 : .05));
  }

  function playStep() {
    const track = tracks[selectedTrack];
    const beatLength = 60 / track.bpm;
    const bassNote = track.bass[step % track.bass.length];
    const leadNote = track.lead[step % track.lead.length];

    if (bassNote !== null) synth(frequency(track.root, bassNote), beatLength * .68, track.bassWave, .085, track.bassCutoff);
    if (leadNote !== null) {
      const leadGain = selectedTrack === 1 ? .038 : selectedTrack === 2 ? .03 : .026;
      synth(frequency(track.root, leadNote), beatLength * (selectedTrack === 0 ? 1.15 : .38), track.leadWave, leadGain, selectedTrack === 0 ? 1900 : 1350, step % 4 === 0 ? -6 : 6, selectedTrack === 0 ? .5 : .12, selectedTrack === 0 ? .08 : .012);
    }
    if (track.kickSteps.includes(step % 16)) kick(selectedTrack === 2 ? .82 : 1);
    if (track.snareSteps.includes(step % 16)) noiseHit("snare");
    if (track.hatEvery && step % track.hatEvery === 0) noiseHit("hat");
    if (step % track.chordEvery === 0) {
      const chord = track.chords[Math.floor(step / track.chordEvery) % track.chords.length];
      const chordLength = selectedTrack === 0 ? beatLength * 7.2 : beatLength * 3.2;
      const chordGain = selectedTrack === 0 ? .018 : .009;
      chord.forEach((note, index) => synth(frequency(track.root, note + 12), chordLength, "sine", chordGain, selectedTrack === 0 ? 1050 : 720, index * 5 - 7, selectedTrack === 0 ? .65 : .18, .22));
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
    if (master && audioContext) master.gain.setTargetAtTime(volumeToGain(requestedVolume), audioContext.currentTime, .025);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && dock.classList.contains("open")) setOpen(false);
  });

  renderState();
  drawVisualizer();
})();
