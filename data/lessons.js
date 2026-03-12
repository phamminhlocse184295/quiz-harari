const lessons = [
  {
    id: 1,
    title: "Vỡ Mộng",
    emoji: "😶",
    axes: [3, 0, 0, 1, 2],
    shortDesc:
      "Bạn nhìn thấy thế giới không qua màu hồng. Đó là điểm mạnh, không phải yếu đuối.",
    quote:
      "Con người suy nghĩ bằng những câu chuyện chứ không phải bằng số liệu.",
    advice:
      "Hãy luôn đặt câu hỏi về những 'câu chuyện' mà truyền thông và mạng xã hội đang kể cho bạn nghe.",
    gradient: "linear-gradient(145deg, #232526, #414345)", // Xám hoài nghi
  },
  {
    id: 2,
    title: "Công Việc",
    emoji: "🤖",
    axes: [0, 4, 0, 0, 1],
    shortDesc:
      "Bạn hiểu rằng tương lai không chờ ai. Học cách cộng tác với AI là chìa khóa của bạn.",
    quote: "Đến năm 2050, một lớp người vô dụng mới có thể xuất hiện.",
    advice:
      "Đừng chỉ học kiến thức cố định, hãy học cách liên tục thích nghi và tái tạo bản thân mỗi 10 năm.",
    gradient: "linear-gradient(145deg, #141E30, #243B55)", // Xanh Tech AI
  },
  {
    id: 3,
    title: "Tự Do",
    emoji: "🗽",
    axes: [2, 2, 0, 1, 0],
    shortDesc:
      "Thuật toán chưa hiểu bạn hoàn toàn. Bạn có khả năng chọn lựa có ý thức hơn người khác.",
    quote:
      "Thuật toán đang theo dõi bạn. Chúng biết bạn rõ hơn bạn biết chính mình.",
    advice:
      "Tắt thông báo điện thoại 2 tiếng mỗi ngày để giành lại quyền kiểm soát tâm trí của chính mình.",
    gradient: "linear-gradient(145deg, #0f2027, #203a43)", // Xanh rêu độc lập
  },
  {
    id: 4,
    title: "Bình Đẳng",
    emoji: "⚖️",
    axes: [1, 0, 0, 1, 4],
    shortDesc:
      "Bạn nhạy cảm với bất công và muốn thế giới tốt đẹp hơn cho tất cả mọi người.",
    quote: "Những người sở hữu dữ liệu sẽ sở hữu tương lai của nhân loại.",
    advice:
      "Bảo vệ dữ liệu cá nhân của bạn trên không gian mạng như bảo vệ tài sản quý giá nhất.",
    gradient: "linear-gradient(145deg, #4b134f, #c94b4b)", // Đỏ tím đấu tranh
  },
  {
    id: 5,
    title: "Cộng Đồng",
    emoji: "🌐",
    axes: [0, 0, 2, 0, 3],
    shortDesc:
      "Bạn tin vào sức mạnh của tập thể. Cộng đồng là nguồn ý nghĩa sâu sắc nhất với bạn.",
    quote: "Con người có cơ thể. Họ không thể sống trên mạng mãi được.",
    advice:
      "Cuối tuần này, hãy rủ bạn bè gặp mặt offline thay vì chỉ tương tác qua màn hình điện thoại.",
    gradient: "linear-gradient(145deg, #11998e, #38ef7d)", // Xanh lá kết nối
  },
  {
    id: 6,
    title: "Văn Minh",
    emoji: "🏛️",
    axes: [0, 0, 3, 0, 2],
    shortDesc:
      "Bạn trân trọng những gì nhân loại đã xây dựng và lo lắng khi chúng bị đe dọa.",
    quote:
      "Chỉ có một nền văn minh duy nhất trên thế giới, và tất cả chúng ta đều thuộc về nó.",
    advice:
      "Đọc một cuốn sách về lịch sử thế giới để hiểu rõ hơn nguồn gốc của chúng ta.",
    gradient: "linear-gradient(145deg, #870000, #190A05)", // Đỏ gạch di sản
  },
  {
    id: 7,
    title: "Chủ Nghĩa Dân Tộc",
    emoji: "🏳️",
    axes: [0, 0, 4, 0, 0],
    shortDesc:
      "Bản sắc văn hóa quan trọng với bạn, nhưng bạn cũng biết ranh giới của nó.",
    quote:
      "Chủ nghĩa dân tộc không phải là tự nhiên. Nó được kiến tạo từ trí tưởng tượng.",
    advice:
      "Tự hào về văn hóa của mình, nhưng hãy giữ một tâm thế rộng mở để học hỏi từ các nền văn hóa khác.",
    gradient: "linear-gradient(145deg, #1A2980, #26D0CE)", // Xanh lam tự hào
  },
  {
    id: 8,
    title: "Tôn Giáo",
    emoji: "🕊️",
    axes: [0, 0, 2, 2, 0],
    shortDesc:
      "Bạn tìm kiếm ý nghĩa vượt ra ngoài những điều hữu hình và có thể đo lường được.",
    quote:
      "Tôn giáo là những câu chuyện hư cấu giúp con người hợp tác với nhau trên quy mô lớn.",
    advice:
      "Dành 15 phút mỗi ngày để tĩnh tâm và phản tư về những giá trị cốt lõi mà bạn tin tưởng.",
    gradient: "linear-gradient(145deg, #2b5876, #4e4376)", // Tím tâm linh
  },
  {
    id: 9,
    title: "Di Cư",
    emoji: "✈️",
    axes: [1, 0, 2, 0, 2],
    shortDesc:
      "Bạn cảm thông và không vội phán xét. Câu chuyện của mỗi người đều phức tạp hơn ta nghĩ.",
    quote:
      "Thế giới này là một mạng lưới, không phải là một tập hợp các pháo đài cô lập.",
    advice:
      "Hãy thử kết bạn hoặc trò chuyện với một người đến từ một vùng miền/quốc gia khác bạn.",
    gradient: "linear-gradient(145deg, #3a7bd5, #3a6073)", // Xanh dương di chuyển
  },
  {
    id: 10,
    title: "Sự Thật",
    emoji: "🔍",
    axes: [2, 0, 0, 3, 0],
    shortDesc:
      'Bạn không dễ dàng tin vào bề nổi. Luôn hỏi "thật sự thì chuyện gì đang xảy ra?"',
    quote:
      "Nếu bạn muốn sự thật tuyệt đối, hãy tìm đến toán học, đừng tìm trong lịch sử.",
    advice:
      "Hãy đa dạng hóa nguồn đọc tin tức của bạn, đừng chỉ đọc những gì Facebook gợi ý.",
    gradient: "linear-gradient(145deg, #333333, #dd1818)", // Đen đỏ chân lý
  },
  {
    id: 11,
    title: "Thượng Đế",
    emoji: "☁️",
    axes: [0, 0, 1, 3, 0],
    shortDesc:
      "Bạn suy nghĩ sâu về những câu hỏi lớn mà khoa học chưa trả lời được.",
    quote:
      "Thượng đế của vũ trụ không quan tâm đến những luật lệ vi mô của con người.",
    advice:
      "Đừng phán xét niềm tin của người khác. Mỗi người đều có một cách riêng để đối mặt với sự vô tận.",
    gradient: "linear-gradient(145deg, #614385, #516395)", // Tím mây trời
  },
  {
    id: 12,
    title: "Thế Tục",
    emoji: "🧪",
    axes: [4, 0, 0, 1, 0],
    shortDesc:
      "Bạn tin vào bằng chứng và lý luận. Khoa học là ngọn đuốc soi đường cho bạn.",
    quote:
      "Phẩm chất quan trọng nhất của khoa học là sẵn sàng thừa nhận sự ngu dốt.",
    advice:
      "Hãy luôn giữ cái đầu lạnh và tư duy phản biện trước mọi thông tin chưa được kiểm chứng.",
    gradient: "linear-gradient(145deg, #004FF9, #FFF94C)", // Xanh vàng lý trí
  },
  {
    id: 13,
    title: "Chiến Tranh",
    emoji: "☮️",
    axes: [0, 0, 1, 0, 4],
    shortDesc:
      "Bạn nhận ra rằng xung đột là một phần của lịch sử và chúng ta cần học để ngăn chặn nó.",
    quote:
      "Sự ngu ngốc của con người là một trong những lực lượng mạnh nhất trong lịch sử.",
    advice:
      "Đừng để bị cuốn vào những tranh cãi cực đoan trên mạng xã hội. Hòa bình bắt đầu từ sự bao dung.",
    gradient: "linear-gradient(145deg, #cb2d3e, #ef473a)", // Đỏ rực cảnh báo
  },
  {
    id: 14,
    title: "Khiêm Tốn",
    emoji: "🌱",
    axes: [1, 1, 1, 1, 1],
    shortDesc:
      "Bạn biết mình không biết hết mọi thứ — và đó chính là sức mạnh.",
    quote:
      "Bản ngã của chúng ta lớn hơn rất nhiều so với vị trí thực sự của chúng ta trong vũ trụ.",
    advice:
      "Mỗi ngày hãy học một điều mới từ một người mà bạn từng nghĩ là thua kém mình.",
    gradient: "linear-gradient(145deg, #56ab2f, #a8e063)", // Xanh lục phát triển
  },
  {
    id: 15,
    title: "Ngu Dốt",
    emoji: "💡",
    axes: [2, 0, 0, 4, 0],
    shortDesc:
      "Bạn ý thức về giới hạn nhận thức của mình, điều mà phần lớn mọi người không làm được.",
    quote: "Biết rằng mình không biết là bước đầu tiên của sự thông thái.",
    advice:
      "Lần tới khi tranh luận, hãy dũng cảm nói câu: 'Tôi chưa đủ kiến thức về mảng này để kết luận'.",
    gradient: "linear-gradient(145deg, #F09819, #EDDE5D)", // Vàng sáng thức tỉnh
  },
  {
    id: 16,
    title: "Công Lý",
    emoji: "⚖️",
    axes: [1, 0, 0, 3, 2],
    shortDesc:
      "Bạn quan tâm sâu sắc đến điều đúng và sai. Đạo đức không phải lý thuyết với bạn.",
    quote:
      "Hệ thống đạo đức của chúng ta được thiết kế cho người săn bắt hái lượm, không phải cho cyborg.",
    advice:
      "Hãy quyên góp hoặc hành động nhỏ để ủng hộ một tổ chức xã hội mà bạn tin tưởng.",
    gradient: "linear-gradient(145deg, #4b6cb7, #182848)", // Xanh navy chính trực
  },
  {
    id: 17,
    title: "Hậu Sự Thật",
    emoji: "📰",
    axes: [3, 0, 0, 2, 0],
    shortDesc:
      "Bạn biết rằng câu chuyện có thể bị bóp méo. Tư duy phê phán là vũ khí của bạn.",
    quote:
      "Con người luôn sống trong thời đại hậu sự thật. Homo sapiens là một loài động vật hậu sự thật.",
    advice:
      "Trước khi share bất kỳ tin tức nào, hãy dành 1 phút để tra cứu nguồn gốc của nó.",
    gradient: "linear-gradient(145deg, #1F1C2C, #928DAB)", // Khói mờ ảo
  },
  {
    id: 18,
    title: "Khoa Học Viễn Tưởng",
    emoji: "🚀",
    axes: [1, 3, 0, 2, 0],
    shortDesc:
      "Bạn hình dung được những khả năng mà người khác chưa thấy. Đó là quà tặng hiếm có.",
    quote:
      "Khoa học viễn tưởng là thể loại nghệ thuật quan trọng nhất trong thế kỷ 21.",
    advice:
      "Xem một bộ phim viễn tưởng (như Black Mirror) và tự hỏi: 'Nếu điều này là thật, mình sẽ làm gì?'",
    gradient: "linear-gradient(145deg, #000428, #004e92)", // Xanh đêm vũ trụ
  },
  {
    id: 19,
    title: "Giáo Dục",
    emoji: "📚",
    axes: [2, 3, 0, 0, 1],
    shortDesc:
      "Bạn hiểu rằng học không bao giờ đủ — và điều đó là động lực, không phải gánh nặng.",
    quote:
      "Phần lớn những gì bạn học ở trường hôm nay sẽ trở nên vô dụng vào năm 2050.",
    advice:
      "Hãy học thêm một kỹ năng mềm không liên quan đến ngành học hiện tại của bạn.",
    gradient: "linear-gradient(145deg, #114357, #F29492)", // Cổ điển tri thức
  },
  {
    id: 20,
    title: "Ý Nghĩa",
    emoji: "✨",
    axes: [3, 0, 0, 1, 3],
    shortDesc:
      'Câu hỏi "Tôi sống để làm gì?" không làm bạn sợ — nó làm bạn tò mò và hứng khởi.',
    quote: "Bạn không phải là một câu chuyện. Bạn là một sinh vật sống.",
    advice:
      "Hãy ngừng chạy theo định nghĩa thành công của xã hội. Hãy tự viết định nghĩa của riêng mình.",
    gradient: "linear-gradient(145deg, #ff9966, #ff5e62)", // Cam hoàng hôn
  },
  {
    id: 21,
    title: "Thiền Định",
    emoji: "🧘",
    axes: [0, 2, 0, 2, 1],
    shortDesc:
      "Bạn biết cách dừng lại, quan sát tâm trí mình. Đây là kỹ năng sống còn thế kỷ 21.",
    quote: "Chỉ cần quan sát. Đừng làm gì cả.",
    advice:
      "Bắt đầu thói quen ngồi yên lặng, không làm gì cả trong 5 phút mỗi sáng khi thức dậy.",
    gradient: "linear-gradient(145deg, #8E2DE2, #4A00E0)", // Tím thiền định
  },
];
