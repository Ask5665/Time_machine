# ⏪ Reverse Time Memory Clock

A unique web application where **time runs backward**, but **memories stay**.

This project visualizes a reverse-flowing analog clock and lets you save daily notes based on the **reversed date**. Each memory is intentionally saved and displayed with its corresponding reversed day.

Built as a **client-only application**, fully compatible with **GitHub Pages**.

---

## ✨ Features

- ⏱️ Reverse analog clock (smooth 60 FPS animation)
- 📅 Reverse digital date & time (weekday, month, year)
- 📝 Daily memory notes saved **per reversed day**
- 💾 Explicit “Save Memory” action
- 🗓️ Saved memory displayed with date immediately
- 🔊 Optional ticking clock sound (browser-safe)
- 📱 Responsive layout (desktop & mobile)
- 🌐 No backend required (uses `localStorage`)

---

## 🧠 Concept

> **Time moves backward. Memory anchors meaning.**

While real time advances, the displayed clock rewinds.  
Memories, however, are written deliberately and persist — creating a reflective, symbolic journaling experience.

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (Grid, Flexbox, Media Queries)
- **Vanilla JavaScript**
- **Browser `localStorage`**
- **GitHub Pages** (deployment)

No frameworks. No server.

---

## 📂 Project Structure

├── index.html
├── style.css
├── index.js
├── tick.mp3
└── README.md

---

## ▶️ How It Works

1. A fixed **anchor time** is stored on first load.
2. Current system time is mirrored across the anchor: reversedTime = 2 × anchorTime − now 
3. Clock hands rotate backward using standard clock geometry.
4. Notes are stored using a key based on the **reversed date**: note-YYYY-MM-DD
5. Clicking **Save Memory** commits the note and displays it with its date.

---

## 🔊 Sound Notice

Due to browser autoplay policies, sound must be enabled by user interaction (click/tap).  
Once enabled, a subtle tick plays every second.

---

## 📱 Responsive Design

- Desktop: Notes on the left, clock on the right
- Mobile: Stacked layout for readability
- Memory display is scrollable to prevent layout shift

---

## 🚀 Live Demo

👉 **GitHub Pages URL:**  
https://Ask5665.github.io/reverse-time-memory-clock/


