// ===== Anchor Time =====
let anchorTime = localStorage.getItem("anchorTime");
if (!anchorTime) {
  anchorTime = Date.now();
  localStorage.setItem("anchorTime", anchorTime);
} else {
  anchorTime = Number(anchorTime);
}

// ===== Elements =====
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const display = document.querySelector(".display");
const notesBox = document.querySelector("textarea");
const saveBtn = document.getElementById("saveBtn");
const memoryDisplay = document.querySelector(".memory-display");
const tickSound = document.getElementById("tick-sound");

// ===== Audio Unlock =====


// ===== Names =====
const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const weeks = [
  "Sunday","Monday","Tuesday","Wednesday",
  "Thursday","Friday","Saturday"
];

let currentDayKey = null;
let currentDateObj = null;

// ===== Helpers =====
function getDayKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

function renderMemory(date, text) {
  if (!text) {
    memoryDisplay.innerHTML = `<i>No memory saved for this day.</i>`;
    return;
  }

  memoryDisplay.innerHTML = `
    <div class="memory-date">
      ${weeks[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}
    </div>
    <div class="memory-text">${text}</div>
  `;
}

// ===== Save Button =====
saveBtn.addEventListener("click", () => {
  if (!currentDayKey) return;
  localStorage.setItem("note-" + currentDayKey, notesBox.value);
  renderMemory(currentDateObj, notesBox.value);
});

// ===== Clock Update =====
function updateClock() {
  const now = Date.now();
  const reversedTime = 2 * anchorTime - now;
  const date = new Date(reversedTime);
  currentDateObj = date;

  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hr = date.getHours() % 12;
  const amOrpm=date.getHours()>=12?"PM":"AM";

  secondHand.style.transform = `translateX(-50%) rotate(${sec * 6}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${min * 6 + sec * 0.1}deg)`;
  hourHand.style.transform =
    `translateX(-50%) rotate(${hr * 30 + min * 0.5 + sec * (30 / 3600)}deg)`;

  const key = getDayKey(date);
  if (key !== currentDayKey) {
    currentDayKey = key;
    const saved = localStorage.getItem("note-" + key) || "";
    notesBox.value = saved;
    renderMemory(date, saved);
  }

  display.innerHTML = `
    ${weeks[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}<br>
    ${String(hr).padStart(2,"0")}:${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")} ${amOrpm}<br>
    <small>Reversed Time</small>
  `;

  tickSound.currentTime = 0;
  tickSound.play().catch(() => {});
}


setInterval(updateClock,1000);
