let currentQ = 0;
let userScores = [0, 0, 0, 0, 0];
let currentResultData = null; // Lưu kết quả để dùng cho nút Share

// Bắt đầu Quiz
document.getElementById("start-btn").addEventListener("click", () => {
  showScreen("screen-quiz");
  renderQuestion();
});

// Hàm chuyển đổi các màn hình
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Hàm render câu hỏi và đáp án
function renderQuestion() {
  const q = questions[currentQ];

  // Cập nhật thanh Progress Bar
  document.getElementById("progress-text").innerText = `Câu ${currentQ + 1}/5`;
  document.getElementById("progress-bar").style.width =
    `${((currentQ + 1) / 5) * 100}%`;

  // Đổ nội dung câu hỏi
  document.getElementById("question-text").innerText = q.q;
  const container = document.getElementById("options-container");
  container.innerHTML = "";

  // Đổ các đáp án
  q.options.forEach((opt) => {
    const div = document.createElement("div");
    div.className = "option-card";
    div.innerText = opt.text;

    div.onclick = () => {
      // Cộng điểm vào ma trận
      opt.score.forEach((s, i) => (userScores[i] += s));

      // Tạo hiệu ứng chớp tắt trượt ngang giữa các câu
      const quizScreen = document.getElementById("screen-quiz");
      quizScreen.classList.remove("active");

      setTimeout(() => {
        if (currentQ < questions.length - 1) {
          currentQ++;
          renderQuestion();
          quizScreen.classList.add("active");
        } else {
          processResult(); // Xong 5 câu thì chạy Loading
        }
      }, 200); // Đợi 0.2s để chuyển cảnh mượt
    };
    container.appendChild(div);
  });
}

// Hàm giả lập phân tích dữ liệu 1.5 giây
function processResult() {
  showScreen("screen-loading");
  setTimeout(() => {
    // getResult() được gọi từ file quiz.js
    currentResultData = getResult(userScores);
    displayResult(currentResultData);
  }, 1500);
}

// Hàm hiển thị kết quả ra màn hình
function displayResult(result) {
  document.getElementById("res-emoji").innerText = result.emoji;
  document.getElementById("res-title").innerText = result.title;
  document.getElementById("res-desc").innerText = result.shortDesc;

  // Nếu data có quote và advice thì hiện, chưa có thì để trống
  document.getElementById("res-quote").innerText = result.quote
    ? `"${result.quote}"`
    : "";
  document.getElementById("res-advice").innerText = result.advice
    ? `💡 Hành động: ${result.advice}`
    : "";

  // Áp dụng màu Gradient động cho Background của Card Kết quả
  const resultCard = document.getElementById("result-card");
  if (result.gradient) {
    resultCard.style.background = result.gradient;
  } else {
    // Fallback màu mặc định nếu bài học đó bị thiếu data màu
    resultCard.style.background = "linear-gradient(145deg, #16213e, #1a1a2e)";
  }

  showScreen("screen-result");
}

// Nút Native Share API (Chia sẻ lên Facebook, Zalo...)
document.getElementById("share-btn").addEventListener("click", async () => {
  if (navigator.share && currentResultData) {
    try {
      await navigator.share({
        title: "Bài học của tôi từ 21 Bài Học Cho Thế Kỷ 21",
        text: `Bài học của tôi là: ${currentResultData.emoji} ${currentResultData.title}\n${currentResultData.shortDesc}`,
        url: window.location.href,
      });
    } catch (error) {
      console.log("Lỗi Share:", error);
    }
  } else {
    alert(
      "Trình duyệt của bạn không hỗ trợ nút này. Hãy dùng nút Tải Ảnh nhé!",
    );
  }
});

// Nút Tải ảnh (Chạy bằng html2canvas)
document.getElementById("download-btn").addEventListener("click", async () => {
  // Ẩn tạm nút bấm hoặc các viền thừa nếu cần trước khi chụp (tuỳ chọn)
  const card = document.getElementById("result-card");

  // Chụp canvas scale 2x cho nét
  const canvas = await html2canvas(card, { scale: 2 });

  // Tạo link tải xuống
  const link = document.createElement("a");
  link.download = `Bai-hoc-${currentResultData.title.replace(/\s+/g, "-")}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
});
