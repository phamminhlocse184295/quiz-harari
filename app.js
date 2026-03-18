let currentQ = 0;
let userScores = [0, 0, 0, 0, 0];
let scoreHistory = [];        // Snapshot điểm trước mỗi câu (dùng cho nút Back)
let currentResultData = null; // Dùng bởi share.js
let userName = "";            // Dùng bởi share.js

// =============================================
// KIOSK AUTO-RESET (Showcase mode)
// Tự động reload sau 3 phút không có interaction
// =============================================
const KIOSK_TIMEOUT_MS = 3 * 60 * 1000; // 3 phút
let kioskTimer = null;

function resetKioskTimer() {
  if (kioskTimer) clearTimeout(kioskTimer);
  kioskTimer = setTimeout(() => {
    location.reload();
  }, KIOSK_TIMEOUT_MS);
}

// Theo dõi mọi interaction của user
["click", "touchstart", "keydown", "mousemove"].forEach((evt) => {
  document.addEventListener(evt, resetKioskTimer, { passive: true });
});
resetKioskTimer(); // Khởi động timer ngay từ đầu

// =============================================
// SAFE STORAGE
// =============================================
function safeStorageGet(key) {
  try { return localStorage.getItem(key); } catch (_) { return null; }
}
function safeStorageSet(key, value) {
  try { localStorage.setItem(key, value); return true; } catch (_) { return false; }
}
function safeStorageRemove(key) {
  try { localStorage.removeItem(key); } catch (_) {}
}

// =============================================
// I2: PLAYER COUNTER (localStorage + Firestore)
// =============================================
const COUNTER_KEY = "harari_play_count";

function getPlayCount() {
  return parseInt(safeStorageGet(COUNTER_KEY) || "0", 10);
}
function incrementPlayCount() {
  const next = getPlayCount() + 1;
  safeStorageSet(COUNTER_KEY, next);
  return next;
}
function renderPlayCounter() {
  const count = getPlayCount();
  const el    = document.getElementById("play-counter");
  if (el && count > 0) {
    el.innerText = `${count.toLocaleString("vi-VN")} lượt đã khám phá`;
    el.style.display = "block";
  }
}

// =============================================
// I1: LOCALSTORAGE RESUME
// =============================================
const SAVE_KEY = "harari_quiz_state";

function saveState() {
  safeStorageSet(SAVE_KEY, JSON.stringify({ currentQ, userScores, scoreHistory, userName }));
}
function clearSavedState() {
  safeStorageRemove(SAVE_KEY);
}
function loadSavedState() {
  try {
    const raw = safeStorageGet(SAVE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (_) { return null; }
}

// =============================================
// QUICK START — bỏ qua nhập tên (dành cho Showcase)
// =============================================
function quickStart() {
  currentQ     = 0;
  userScores   = [0, 0, 0, 0, 0];
  scoreHistory = [];
  userName     = "";
  clearSavedState();
  incrementPlayCount();
  fbLogEvent("quiz_start", { has_name: false, quick: true }); // F1
  showScreen("screen-quiz");
  renderQuestion();
}

function startQuiz(e) {
  if (e && e.preventDefault) e.preventDefault();
  currentQ     = 0;
  userScores   = [0, 0, 0, 0, 0];
  scoreHistory = [];
  userName     = document.getElementById("name-input").value.trim();
  clearSavedState();
  incrementPlayCount();
  fbLogEvent("quiz_start", { has_name: !!userName }); // F1
  showScreen("screen-quiz");
  renderQuestion();
}

window.startQuiz = startQuiz;

// Gắn sự kiện submit form
document.getElementById("intro-form").addEventListener("submit", startQuiz);

// Gắn nút Bắt đầu nhanh
document.getElementById("quickstart-btn").addEventListener("click", quickStart);

// =============================================
// INIT
// =============================================
function initApp() {
  try {
    renderPlayCounter();
    // F3: Cập nhật counter bằng số thực tế từ Firestore
    fbGetPlayCount((count) => {
      if (count > 0) {
        const el = document.getElementById("play-counter");
        if (el) {
          el.innerText = `${count.toLocaleString("vi-VN")} lượt đã khám phá`;
          el.style.display = "block";
        }
      }
    });

    const saved = loadSavedState();
    if (saved && saved.currentQ > 0) {
      const resumeBanner = document.getElementById("resume-banner");
      if (resumeBanner) resumeBanner.style.display = "flex";

      document.getElementById("resume-btn").addEventListener("click", () => {
        currentQ      = saved.currentQ;
        userScores    = saved.userScores;
        scoreHistory  = saved.scoreHistory;
        userName      = saved.userName || "";
        document.getElementById("name-input").value = userName;
        clearSavedState();
        showScreen("screen-quiz");
        renderQuestion();
      });

      document.getElementById("resume-dismiss").addEventListener("click", () => {
        clearSavedState();
        if (resumeBanner) resumeBanner.style.display = "none";
      });
    }
  } catch (err) {
    console.warn("[App] Init error:", err);
  }
}

initApp();

// Nút Back — hoàn tác câu vừa trả lời
document.getElementById("back-btn").addEventListener("click", () => {
  if (currentQ > 0 && scoreHistory.length > 0) {
    userScores = scoreHistory.pop();
    currentQ--;
    const quizScreen = document.getElementById("screen-quiz");
    quizScreen.classList.remove("active");
    setTimeout(() => {
      renderQuestion();
      quizScreen.classList.add("active");
    }, 180);
  }
});

// Chuyển màn hình
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Các chữ cái cho đáp án
const OPTION_LETTERS = ["A", "B", "C", "D", "E"];

// Render câu hỏi
function renderQuestion() {
  const q = questions[currentQ];

  document.getElementById("back-btn").style.display = currentQ > 0 ? "block" : "none";
  document.getElementById("progress-text").innerText = `Câu ${currentQ + 1} / ${questions.length}`;
  document.getElementById("progress-bar").style.width = `${((currentQ + 1) / questions.length) * 100}%`;
  document.getElementById("question-text").innerText = q.q;

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const div = document.createElement("div");
    div.className = "option-card";
    div.innerHTML = `
      <span class="option-letter">${OPTION_LETTERS[idx] || (idx + 1)}</span>
      <span class="option-text">${opt.text}</span>
    `;

    div.onclick = () => {
      // Khoá toàn bộ options ngay lập tức — tránh double-click ghi điểm 2 lần
      container.querySelectorAll(".option-card").forEach((c) => c.classList.add("disabled"));
      div.classList.add("selected");

      // Snapshot điểm trước khi cộng — để Back có thể hoàn tác chính xác
      scoreHistory.push([...userScores]);
      opt.score.forEach((s, i) => (userScores[i] += s));

      // Lưu state sau mỗi câu (I1: resume)
      saveState();

      const quizScreen = document.getElementById("screen-quiz");
      quizScreen.classList.remove("active");

      setTimeout(() => {
        if (currentQ < questions.length - 1) {
          currentQ++;
          renderQuestion();
          quizScreen.classList.add("active");
        } else {
          processResult();
        }
      }, 280);
    };

    container.appendChild(div);
  });
}

// Loading steps — rút gọn xuống 3 bước, mỗi bước 320ms → tổng ~1.4s
const LOADING_STEPS = [
  { pct: 30,  text: "Đang phân tích tư duy của bạn...",
    quote: null },
  { pct: 70,  text: "So sánh với 21 bài học Harari...",
    quote: "\"Biết rằng mình không biết là bước đầu tiên của sự thông thái.\"" },
  { pct: 100, text: "Tìm thấy kết quả phù hợp...",
    quote: null },
];

function processResult() {
  showScreen("screen-loading");

  const bar    = document.getElementById("loading-bar-fill");
  const status = document.getElementById("loading-status");
  const STEP_MS = 320;

  LOADING_STEPS.forEach((step, i) => {
    setTimeout(() => {
      bar.style.width  = step.pct + "%";
      status.innerText = step.text;
      const quoteEl = document.getElementById("loading-quote");
      if (quoteEl) quoteEl.innerText = step.quote || "";
    }, i * STEP_MS);
  });

  // Hiển thị kết quả sau khi loading xong + buffer nhỏ
  setTimeout(() => {
    currentResultData = getResult(userScores);
    displayResult(currentResultData);
  }, LOADING_STEPS.length * STEP_MS + 350);
}

// Hiển thị kết quả
function displayResult(result) {
  document.getElementById("res-name").innerText =
    userName ? `Kết quả của ${userName}` : "Kết quả của bạn";

  const iconEl = document.getElementById("res-emoji");
  iconEl.innerText = result.id || "";
  iconEl.title     = result.emoji || "";
  document.getElementById("res-title").innerText = result.title;
  document.getElementById("res-desc").innerText  = result.shortDesc;

  document.getElementById("res-quote").innerText =
    result.quote ? `${result.quote}` : "";
  document.getElementById("res-advice").innerText =
    result.advice ? `💡 ${result.advice}` : "";

  // Áp dụng gradient màu riêng cho từng bài học
  const card = document.getElementById("result-card");
  if (result.gradient) {
    card.style.background = result.gradient;
    card.classList.add("has-gradient");
  } else {
    card.style.background = "var(--surface)";
    card.classList.remove("has-gradient");
  }

  // I3: Tính top 2 kết quả gần nhất (dùng cùng thuật toán dot-product)
  const ranked = lessons
    .map((l) => ({ ...l, _score: l.axes.reduce((sum, val, i) => sum + val * userScores[i], 0) }))
    .sort((a, b) => b._score - a._score);
  const related = ranked.slice(1, 3);

  const relatedEl = document.getElementById("related-lessons");
  if (relatedEl && related.length > 0) {
    relatedEl.innerHTML = `
      <p class="related-label">Bài học liên quan</p>
      ${related.map((r) => `
        <div class="related-item">
          <span class="related-num">${r.id}</span>
          <div>
            <div class="related-title">${r.title}</div>
            <div class="related-desc">${r.shortDesc}</div>
          </div>
        </div>
      `).join("")}
    `;
    relatedEl.style.display = "block";
  }

  clearSavedState();
  fbLogEvent("quiz_complete", { result_id: result.id, result_title: result.title }); // F1
  fbSaveResult(userName, result); // F2
  launchConfetti(); // I5

  showScreen("screen-result");
}
