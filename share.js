// === SHARE & DOWNLOAD ===
// Phụ thuộc vào currentResultData và userName từ app.js (load trước)

// --- A: Lazy-load html2canvas chỉ khi user bấm Tải ảnh ---
function loadHtml2Canvas() {
  return new Promise((resolve, reject) => {
    if (window.html2canvas) { resolve(); return; }
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
    script.onload  = resolve;
    script.onerror = () => reject(new Error("Không tải được html2canvas"));
    document.head.appendChild(script);
  });
}

// Nút Chia sẻ — Native Share API (Zalo, Facebook, ... trên mobile)
document.getElementById("share-btn").addEventListener("click", async () => {
  fbLogEvent("share_click"); // F1
  if (navigator.share && currentResultData) {
    try {
      await navigator.share({
        title: "Bài học của tôi từ 21 Bài Học Cho Thế Kỷ 21",
        text: `${currentResultData.emoji} ${currentResultData.title} \u2014 ${currentResultData.shortDesc}`,
        url: window.location.href,
      });
    } catch (_) {
      // User tự hủy — không cần báo lỗi
    }
  } else {
    alert("Trình duyệt không hỗ trợ chia sẻ trực tiếp. Hãy dùng nút Tải ảnh!");
  }
});

// Nút Tải ảnh — lazy-load html2canvas, hiện watermark, chụp, ẩn watermark
document.getElementById("download-btn").addEventListener("click", async () => {
  fbLogEvent("download_click"); // F1
  const card      = document.getElementById("result-card");
  const watermark = document.getElementById("share-watermark");
  const btn       = document.getElementById("download-btn");

  btn.innerText = "Đang tải...";
  btn.disabled  = true;

  try {
    await loadHtml2Canvas();

    // Hiện watermark URL trước khi chụp
    watermark.style.display = "block";

    const canvas = await html2canvas(card, {
      scale: 2,
      backgroundColor: "#09090b", // Màu nền app — hiện ở góc bo
      useCORS: true,
      logging: false,
    });

    const link    = document.createElement("a");
    link.download = `Bai-hoc-${currentResultData.title.replace(/\s+/g, "-")}.png`;
    link.href     = canvas.toDataURL("image/png");
    link.click();
  } catch (err) {
    alert("Đã xảy ra lỗi khi tải ảnh. Vui lòng thử lại.");
    console.error(err);
  } finally {
    watermark.style.display = "none";
    btn.innerText = "Tải ảnh kết quả";
    btn.disabled  = false;
  }
});
