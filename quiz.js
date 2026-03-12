function getResult(userScores) {
  let bestMatch = lessons[0];
  let highestScore = -1;

  lessons.forEach((lesson) => {
    // Tính Dot-product theo Spec[cite: 2]
    const score = lesson.axes.reduce(
      (sum, val, i) => sum + val * userScores[i],
      0,
    );
    if (score > highestScore) {
      highestScore = score;
      bestMatch = lesson;
    }
  });
  return bestMatch;
}
