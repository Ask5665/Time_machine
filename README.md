# ⏰ Time Machine - Reverse Time Clock

A mesmerizing web-based clock that runs backward, featuring cinematic animations, particle effects, and authentic tick sounds. Experience the journey through time - back to where we once belonged.

![Reverse Time Clock](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🕰️ Backward-Running Clock
- Clock hands rotate **counterclockwise** continuously
- Smooth 60fps animation with no jumps or resets
- Accurate time representation moving in reverse
- Gold metallic hands with elegant engraving details

### 🎬 Cinematic Background
- Multi-layer parallax animation creating depth
- Horizontal scrolling effect (right to left)
- Atmospheric overlay with temporal contrast
- Seamless infinite loop

### ✨ Particle Effects
- 80 animated particles flowing horizontally from right to left
- Golden glow effects with smooth fading
- Physics-based movement with natural randomness
- Continuous regeneration

### 🔊 Authentic Clock Sound
- Realistic tick sound generated with Web Audio API
- Synchronized perfectly with each second
- Short, crisp mechanical tick (30ms duration)
- No external audio files required

### 🎨 Premium Design
- Futuristic-vintage hybrid aesthetic
- Glassmorphism effects with backdrop blur
- Warm golden glow around clock elements
- Cool bluish atmospheric tones in background
- Fully responsive design (desktop and mobile)

### 💬 Inspirational Message
- Elegant quote: *"Not all journeys move forward. Some bring us back to where we once belonged."*
- Animated arrow and fade-in effect
- Glassmorphic message card

## 🚀 Demo

Simply open `index.html` in any modern web browser to experience the reverse time clock.

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Ask5665/Time_machine.git
cd Time_machine
```

2. Open the application:
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📁 Project Structure

```
Time_machine/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and animations
├── script.js           # Clock logic, particles, and audio
└── README.md          # Project documentation
```

## 🎯 Technical Highlights

### Backward Clock Algorithm
- Uses cumulative rotation tracking instead of modulo-based angles
- Prevents jump/reset when crossing 12 o'clock
- Delta-based rotation: `rotation += -(timeDiff / 1000) * 6 degrees`
- RequestAnimationFrame for smooth 60fps updates

### Particle System
- Canvas 2D rendering with horizontal physics
- Particles spawn from right side: `x = canvas.width + random(100)`
- Leftward velocity: `speedX = -(random() * 2 + 1)`
- Automatic regeneration when particles exit viewport

### Audio Generation
- Web Audio API oscillator + gain nodes
- Frequency sweep: 1200Hz → 800Hz in 10ms
- Gain envelope: 0.3 → 0.01 over 30ms
- Triggered every second via time tracking

### Visual Design
- CSS custom properties for design tokens
- Glassmorphism: `backdrop-filter: blur(10px)`
- Parallax animation with 30% horizontal movement
- Responsive breakpoints for mobile devices

## 🎨 Color Palette

- **Vintage Gold**: `#d4af37` - Primary accent
- **Dark Background**: `#0a0e1a` - Deep space-like backdrop
- **Blue Tint**: `#1a2942` - Cool atmospheric tones
- **Glass Effects**: Semi-transparent whites with blur

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

Requires modern browser with support for:
- CSS `backdrop-filter`
- Web Audio API
- Canvas 2D
- ES6 JavaScript

## 📝 Usage

The application runs entirely client-side with **no dependencies** or build process required.

### Keyboard/Mouse Interaction
- The clock automatically starts when the page loads
- Audio may require user interaction to start (browser policy)

## 🔧 Customization

### Adjust Particle Count
```javascript
// In script.js, line ~59
this.particleCount = 80; // Change this value
```

### Modify Tick Sound
```javascript
// In script.js, playTickSound() method
oscillator.frequency.setValueAtTime(1200, now); // Higher = sharper tick
gainNode.gain.setValueAtTime(0.3, now); // Volume (0.0 - 1.0)
```

### Change Clock Speed
```javascript
// In script.js, updateClock() method
const secondDelta = -(timeDiff / 1000) * 6; // Multiply by factor to speed up/slow down
```

## 📜 Version History

### v1.3 - Audio Enhancement (2025-12-05)
- ✅ Added realistic clock tick sound using Web Audio API

### v1.2 - UI Polish (2025-12-05)
- ✅ Changed particles to move horizontally (right to left)
- ✅ Removed Roman numerals for cleaner look
- ✅ Enhanced horizontal parallax animation

### v1.1 - Bug Fixes (2025-12-05)
- ✅ Fixed Roman numeral alignment
- ✅ Fixed second hand continuous rotation (no reset at 12)
- ✅ Enhanced background animation visibility

### v1.0 - Initial Release (2025-12-05)
- ✅ Backward-running clock with smooth animation
- ✅ Cinematic background with parallax effect
- ✅ Particle system with anti-gravity effect
- ✅ Glassmorphism design
- ✅ Responsive layout

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ankith Kamanalli**
- GitHub: [@Ask5665](https://github.com/Ask5665)

## 🙏 Acknowledgments

- Inspired by the concept of time travel and nostalgia
- Built with pure vanilla JavaScript, HTML, and CSS
- No external libraries or frameworks required

---

⭐ **Star this repository if you found it interesting!**

*"Not all journeys move forward. Some bring us back to where we once belonged."*
