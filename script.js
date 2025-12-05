// ========== Backward Clock Logic ==========
class BackwardClock {
    constructor() {
        this.hourHand = document.getElementById('hourHand');
        this.minuteHand = document.getElementById('minuteHand');
        this.secondHand = document.getElementById('secondHand');
        this.startTime = Date.now();

        // Initialize cumulative rotation tracking
        this.lastTime = Date.now();
        this.secondRotation = 0;
        this.minuteRotation = 0;
        this.hourRotation = 0;

        // Audio context for clock tick sound
        this.audioContext = null;
        this.lastSecond = -1;

        this.init();
    }

    init() {
        // Initialize audio context (user interaction may be required)
        this.initAudio();
        this.updateClock();
        // Use requestAnimationFrame for smooth 60fps updates
        this.animate();
    }

    animate() {
        this.updateClock();
        requestAnimationFrame(() => this.animate());
    }

    initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }

    playTickSound() {
        if (!this.audioContext) return;

        const now = this.audioContext.currentTime;

        // Create oscillator for tick sound
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        // Create a sharp, mechanical tick sound
        oscillator.frequency.setValueAtTime(1200, now);
        oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.01);

        // Short, crisp sound envelope
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.03);

        oscillator.start(now);
        oscillator.stop(now + 0.03);
    }

    updateClock() {
        const now = Date.now();

        // Calculate time difference since last update
        const timeDiff = now - this.lastTime;
        this.lastTime = now;

        // Calculate rotation deltas (negative for backward)
        // Each millisecond: second hand moves 360/60000 degrees
        const secondDelta = -(timeDiff / 1000) * 6; // 6 degrees per second
        const minuteDelta = -(timeDiff / 60000) * 6; // 6 degrees per minute
        const hourDelta = -(timeDiff / 3600000) * 30; // 30 degrees per hour

        // Update cumulative rotations (continuous, no wrapping)
        this.secondRotation += secondDelta;
        this.minuteRotation += minuteDelta;
        this.hourRotation += hourDelta;

        // Apply rotations without modulo to avoid reset jumps
        this.secondHand.style.transform = `translateX(-50%) rotate(${this.secondRotation}deg)`;
        this.minuteHand.style.transform = `translateX(-50%) rotate(${this.minuteRotation}deg)`;
        this.hourHand.style.transform = `translateX(-50%) rotate(${this.hourRotation}deg)`;

        // Play tick sound every second
        const currentSecond = Math.floor(now / 1000);
        if (currentSecond !== this.lastSecond) {
            this.lastSecond = currentSecond;
            this.playTickSound();
        }
    }
}

// ========== Particle System ==========
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;

        this.resize();
        window.addEventListener('resize', () => this.resize());

        this.init();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        // Create initial particles
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(this.createParticle());
        }

        this.animate();
    }

    createParticle() {
        return {
            x: this.canvas.width + Math.random() * 100, // Start from right side
            y: Math.random() * this.canvas.height, // Random vertical position
            size: Math.random() * 3 + 1,
            speedX: -(Math.random() * 2 + 1), // Negative for left movement
            speedY: (Math.random() - 0.5) * 0.5, // Slight vertical drift
            opacity: Math.random() * 0.5 + 0.3,
            decay: Math.random() * 0.002 + 0.001
        };
    }

    animate() {
        // Clear with slight trail effect
        this.ctx.fillStyle = 'rgba(10, 14, 26, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        this.particles.forEach((particle, index) => {
            // Update position (moving left, right to left)
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Fade out as it moves
            particle.opacity -= particle.decay;

            // Draw particle with glow
            this.ctx.save();

            // Outer glow
            const gradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size * 3
            );
            gradient.addColorStop(0, `rgba(212, 175, 55, ${particle.opacity})`);
            gradient.addColorStop(0.5, `rgba(212, 175, 55, ${particle.opacity * 0.3})`);
            gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
            this.ctx.fill();

            // Core particle
            this.ctx.fillStyle = `rgba(244, 228, 166, ${particle.opacity})`;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.restore();

            // Reset particle if it goes off screen or fades out
            if (particle.x < -10 || particle.opacity <= 0 ||
                particle.y < -10 || particle.y > this.canvas.height + 10) {
                this.particles[index] = this.createParticle();
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ========== Initialize Application ==========
document.addEventListener('DOMContentLoaded', () => {
    // Start backward clock
    new BackwardClock();

    // Start particle system
    new ParticleSystem();

    console.log('⏰ Reverse Time Clock initialized');
    console.log('⟵ Journey into the past...');
});
