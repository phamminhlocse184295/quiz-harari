// =============================================
// Firebase: Analytics (F1) + Firestore (F2, F3)
// Config từ Project quiz-harari
// =============================================

const firebaseConfig = {
  apiKey: "AIzaSyBID1daR2fHxm8s6o0dC0KLGwRmItzQL1M",
  authDomain: "quiz-harari.firebaseapp.com",
  projectId: "quiz-harari",
  storageBucket: "quiz-harari.firebasestorage.app",
  messagingSenderId: "333011598074",
  appId: "1:333011598074:web:9b436c43c91522427b2743",
  measurementId: "G-3CY97NKNNH",
};

let _db = null;

(function initFirebase() {
  try {
    firebase.initializeApp(firebaseConfig);
    _db = firebase.firestore();
  } catch (e) {
    console.warn("[Firebase] Init error:", e.message);
  }
})();

// F1: Ghi analytics event — gọi từ app.js / share.js
function fbLogEvent(name, params) {
  try {
    firebase.analytics().logEvent(name, params || {});
  } catch (_) {}
}

// F2: Lưu kết quả ẩn danh vào Firestore
function fbSaveResult(name, result) {
  if (!_db) return;
  try {
    _db.collection("results").add({
      name: (name || "Ẩn danh").substring(0, 40),
      resultId: result.id,
      resultTitle: result.title,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (e) {
    console.warn("[Firebase] Save error:", e.message);
  }
}

// F3: Đọc tổng số lượt từ Firestore — callback(count)
function fbGetPlayCount(callback) {
  if (!_db) return;
  _db.collection("results").get()
    .then((snap) => callback(snap.size))
    .catch(() => {});
}
