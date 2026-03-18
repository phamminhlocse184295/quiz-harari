function getAxisBaseline() {
  if (!Array.isArray(questions) || questions.length === 0) {
    return [0, 0, 0, 0, 0];
  }

  const baseline = [0, 0, 0, 0, 0];

  questions.forEach((q) => {
    if (!Array.isArray(q.options) || q.options.length === 0) return;

    const perQuestionMean = [0, 0, 0, 0, 0];
    q.options.forEach((opt) => {
      opt.score.forEach((v, i) => {
        perQuestionMean[i] += v;
      });
    });

    perQuestionMean.forEach((sum, i) => {
      baseline[i] += sum / q.options.length;
    });
  });

  return baseline;
}

function getResult(userScores) {
  // Trường hợp đặc biệt: tất cả điểm = 0 (chọn toàn đáp án trung lập)
  // → trả về bài học "Khiêm Tốn" (id=14, axes=[1,1,1,1,1]) theo đúng tinh thần sách
  const totalScore = userScores.reduce((s, v) => s + v, 0);
  if (totalScore === 0) {
    return lessons.find((l) => l.id === 14) || lessons[0];
  }

  // Bù thiên lệch bộ câu hỏi: trừ đi điểm trung bình kỳ vọng trên mỗi trục.
  // Nhờ vậy kết quả phản ánh "điểm khác biệt của người làm quiz" tốt hơn,
  // thay vì bị kéo về một lesson phổ biến quá mức.
  const axisBaseline = getAxisBaseline();
  const centeredScores = userScores.map((v, i) => v - axisBaseline[i]);

  // Dot-product: tìm lesson có tích vô hướng cao nhất với userScores
  // Tie-breaking: nếu bằng điểm thì ưu tiên lesson có id nhỏ hơn (ổn định kết quả)
  let bestMatch = lessons[0];
  let highestScore = -Infinity;

  lessons.forEach((lesson) => {
    const score = lesson.axes.reduce(
      (sum, val, i) => sum + val * centeredScores[i],
      0,
    );
    if (score > highestScore) {
      highestScore = score;
      bestMatch = lesson;
    }
  });
  return bestMatch;
}
