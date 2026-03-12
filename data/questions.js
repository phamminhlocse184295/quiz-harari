const questions = [
  {
    q: "Khi bạn thấy một bài báo giật title 'SỐC: AI sẽ thay thế 90% công việc vào 2030', bạn sẽ làm gì?",
    options: [
      {
        text: "A) Share ngay — bạn bè cần biết điều này! 🔥",
        score: [0, 0, 0, 0, 1],
      },
      {
        text: "B) Đọc thêm 2-3 nguồn khác trước khi tin",
        score: [3, 0, 0, 2, 1],
      },
      { text: "C) Lướt qua, không quan tâm mấy", score: [0, 0, 0, 0, 0] },
      {
        text: "D) Đọc kỹ phần bình luận xem người ta nghĩ gì",
        score: [1, 0, 2, 1, 0],
      },
    ],
  },
  {
    q: "Nếu AI có thể làm tốt hơn bạn 80% công việc hiện tại, bạn nghĩ bạn sẽ làm gì?",
    options: [
      { text: "A) Học kỹ năng mới để hợp tác cùng AI", score: [1, 3, 0, 0, 1] },
      {
        text: "B) Tìm công việc mà AI chưa làm được (sáng tạo, cảm xúc...)",
        score: [2, 2, 0, 1, 0],
      },
      { text: "C) Lo lắng lắm, chưa biết phải làm gì", score: [0, 0, 0, 0, 2] },
      {
        text: "D) Tận hưởng thôi — để AI làm hết cho rảnh 😄",
        score: [0, 1, 0, 0, 0],
      },
    ],
  },
  {
    q: "Điều bạn tự hào nhất về bản thân mình là gì?",
    options: [
      {
        text: "A) Tôi thuộc về một đất nước / cộng đồng cụ thể",
        score: [0, 0, 3, 0, 0],
      },
      {
        text: "B) Tôi là người của riêng mình, không bị định nghĩa",
        score: [2, 1, 0, 1, 0],
      },
      {
        text: "C) Tôi là một phần của nhân loại nói chung",
        score: [1, 0, 1, 0, 3],
      },
      {
        text: "D) Tôi vẫn đang khám phá bản thân mình",
        score: [0, 0, 0, 2, 1],
      },
    ],
  },
  {
    q: "Bạn nghĩ điều gì là 'thật' nhất trong thế giới hôm nay?",
    options: [
      { text: "A) Những gì khoa học đã chứng minh", score: [3, 0, 0, 2, 1] },
      { text: "B) Những gì tôi trực tiếp trải nghiệm", score: [1, 2, 0, 1, 0] },
      {
        text: "C) Những câu chuyện và giá trị chúng ta cùng tin tưởng",
        score: [1, 0, 3, 0, 1],
      },
      {
        text: "D) Tôi không chắc điều gì là thật nữa...",
        score: [2, 0, 0, 3, 0],
      },
    ],
  },
  {
    q: "Khi nghĩ về năm 2050, cảm xúc đầu tiên của bạn là gì?",
    options: [
      {
        text: "A) Hào hứng — sẽ có nhiều công nghệ tuyệt vời!",
        score: [0, 3, 0, 0, 1],
      },
      {
        text: "B) Lo ngại — biến đổi khí hậu, bất bình đẳng...",
        score: [2, 0, 0, 0, 3],
      },
      {
        text: "C) Bình thản — không biết nên không lo",
        score: [0, 1, 0, 0, 0],
      },
      {
        text: "D) Tò tự hào — muốn hiểu để chuẩn bị tốt hơn",
        score: [2, 2, 0, 2, 1],
      },
    ],
  },
];
