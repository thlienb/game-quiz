const questions = [
    {
      question: "Nhân vật chính của bộ truyện 'Naruto' tên là gì?",
      options: ["Sasuke", "Kakashi", "Naruto", "Sakura"],
      answer: "Naruto",
      hint: "Cậu bé mang trong mình Cửu Vĩ."
    },
    {
      question: "Ai là thuyền trưởng của băng Mũ Rơm trong 'One Piece'?",
      options: ["Zoro", "Luffy", "Sanji", "Nami"],
      answer: "Luffy",
      hint: "Cậu ấy có năng lực cao su."
    },
    {
      question: "Trong 'Doraemon', ai là người bạn thân của Doraemon?",
      options: ["Shizuka", "Suneo", "Nobita", "Jaian"],
      answer: "Nobita",
      hint: "Học dốt và thường xuyên bị mắng."
    },
    {
      question: "Ai là người vẽ truyện tranh 'Dragon Ball'?",
      options: ["Oda Eiichiro", "Masashi Kishimoto", "Akira Toriyama", "Yoshihiro Togashi"],
      answer: "Akira Toriyama",
      hint: "Cũng là tác giả của 'Dr. Slump'."
    },
    {
      question: "Bộ truyện nào sau đây thuộc thể loại 'shoujo'?",
      options: ["Naruto", "One Piece", "Sailor Moon", "Dragon Ball"],
      answer: "Sailor Moon",
      hint: "Các cô gái biến hình chiến đấu vì tình yêu và công lý."
    },
    {
      question: "Trong 'Attack on Titan', Eren có thể biến thành Titan gì?",
      options: ["Colossal Titan", "Armored Titan", "Beast Titan", "Attack Titan"],
      answer: "Attack Titan",
      hint: "Cùng tên với tên truyện bản tiếng Anh."
    },
    {
      question: "Bộ truyện nào kể về hành trình làm vua hải tặc?",
      options: ["Naruto", "Fairy Tail", "One Piece", "Bleach"],
      answer: "One Piece",
      hint: "Tác phẩm nổi tiếng của Oda Eiichiro."
    },
    {
      question: "Ai là thủ lĩnh của tổ chức Akatsuki trong 'Naruto'?",
      options: ["Itachi", "Nagato", "Obito", "Kisame"],
      answer: "Nagato",
      hint: "Anh ta điều khiển Pain."
    },
    {
      question: "Trong 'Tokyo Revengers', ai là người du hành thời gian?",
      options: ["Mikey", "Draken", "Takemichi", "Kazutora"],
      answer: "Takemichi",
      hint: "Anh ta muốn cứu Hinata."
    },
    {
      question: "Truyện 'Detective Conan' xoay quanh nhân vật nào?",
      options: ["Shinichi Kudo", "Kaito Kid", "Heiji Hattori", "Ran Mori"],
      answer: "Shinichi Kudo",
      hint: "Bị teo nhỏ thành Conan."
    }
  ];
  
  
  let currentQuestion = 0;
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
  
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.innerText = option;
      btn.onclick = () => checkAnswer(option);
      optionsDiv.appendChild(btn);
    });
  
    document.getElementById("feedback").innerText = "";
    document.getElementById("nextBtn").style.display = "none";
  }
  
  function checkAnswer(selected) {
    const q = questions[currentQuestion];
    const feedback = document.getElementById("feedback");
  
    if (selected === q.answer) {
      feedback.style.color = "#28a745";
      feedback.innerText = "🎉 Chính xác!";
      document.getElementById("nextBtn").style.display = "inline-block";
    } else {
      feedback.style.color = "#d9534f";
      feedback.innerText = `❌ Sai rồi. Gợi ý: ${q.hint}`;
    }
  }
  
  document.getElementById("nextBtn").onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("question").innerText = "🎉 Bạn đã hoàn thành trò chơi!";
      document.getElementById("options").innerHTML = "";
      document.getElementById("feedback").innerText = "";
      document.getElementById("nextBtn").style.display = "none";
    }
  };
  
  loadQuestion();
  