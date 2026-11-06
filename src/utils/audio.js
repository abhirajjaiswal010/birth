// Audio Controller with custom BGM (birthBGM.mp3) and interactive sound effects

class SoundController {
  constructor() {
    this.ctx = null;
    this.bgmAudio = null;
    this.isPlayingMusic = false;
    this.bgmUrl = '/birthBGM.mp3';
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (!this.bgmAudio) {
      this.bgmAudio = new Audio(this.bgmUrl);
      this.bgmAudio.loop = true;
      this.bgmAudio.volume = 0.22; // Gentle, low ambient background level
      this.bgmAudio.preload = 'auto';

      this.bgmAudio.addEventListener('ended', () => {
        this.bgmAudio.currentTime = 0;
        this.bgmAudio.play().catch(() => {});
      });
    }
  }

  // Soft tone generator for UI effects
  playTone(freq, duration = 0.4, timeOffset = 0, type = 'triangle', gainLevel = 0.15) {
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + timeOffset);

      const now = this.ctx.currentTime + timeOffset;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(gainLevel, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    } catch (e) {
      console.warn("Audio note error", e);
    }
  }

  // Play a pop sound
  playPop() {
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch (e) {}
  }

  // Sparkle chime sound
  playSparkle() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 0.35, idx * 0.07, 'sine', 0.12);
    });
  }

  // Candle blow whoosh
  playCandleBlow() {
    this.init();
    this.playTone(400, 0.2, 0, 'triangle', 0.1);
    this.playTone(600, 0.25, 0.05, 'sine', 0.12);
  }

  startMusic(onStateChange) {
    this.init();
    this.isPlayingMusic = true;

    if (this.bgmAudio) {
      const playPromise = this.bgmAudio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (onStateChange) onStateChange(true);
          })
          .catch((err) => {
            console.warn("Autoplay was prevented or audio failed, will start on next click", err);
            if (onStateChange) onStateChange(false);
            this.isPlayingMusic = false;
          });
      }
    }
  }

  stopMusic(onStateChange) {
    this.isPlayingMusic = false;
    if (this.bgmAudio) {
      this.bgmAudio.pause();
    }
    if (onStateChange) onStateChange(false);
  }

  toggleMusic(onStateChange) {
    this.init();
    if (this.isPlayingMusic) {
      this.stopMusic(onStateChange);
    } else {
      this.startMusic(onStateChange);
    }
  }
}

export const sound = new SoundController();
