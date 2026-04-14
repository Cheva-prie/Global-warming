// Quiz Data
const quizData = {

// Pilihan Ganda
  pg: [
    {
      question: "Apa yang dimaksud dengan pemanasan global?",
      options: ["Penurunan suhu bumi","Peningkatan suhu rata-rata bumi","Perubahan arah angin","Perubahan musim"],
      answer: 1,
    },
    {
      question: "Gas utama penyebab pemanasan global adalah...",
      options: ["Oksigen","Nitrogen","Karbon dioksida","Helium"],
      answer: 2,
    },
    {
      question: "Efek rumah kaca terjadi karena...",
      options: ["Panas matahari dipantulkan keluar bumi","Panas matahari terperangkap di atmosfer","Bumi tidak mendapat sinar matahari","Awan menutup bumi"],
      answer: 1,
    },
    {
      question: "Kegiatan yang meningkatkan pemanasan global adalah...",
      options: ["Menanam pohon","Menggunakan sepeda","Membakar hutan","Menghemat listrik"],
      answer: 2,
    },
    {
      question: "Salah satu dampak pemanasan global adalah...",
      options: ["Suhu menurun","Es di kutub mencair","Hujan berhenti total","Bumi menjadi dingin"],
      answer: 1,
    },
    {
      question: "Penebangan hutan dapat menyebabkan...",
      options: ["Udara bersih","Penyerapan CO₂ berkurang","Suhu turun","Hujan bertambah"],
      answer: 1,
    },
    {
      question: "Berikut ini yang termasuk energi ramah lingkungan adalah...",
      options: ["Batu bara","Minyak bumi","Tenaga surya","Bensin"],
      answer: 2,
    },
    {
      question: "Pemanasan global berdampak pada...",
      options: ["Laut menjadi dangkal","Permukaan laut naik","Gunung hilang","Tanah membeku"],
      answer: 1,
    },
    {
      question: "Cara mengurangi pemanasan global adalah...",
      options: ["Membakar sampah","Menebang pohon","Menghemat listrik","Menggunakan plastik berlebihan"],
      answer: 2,
    },
    {
      question: "Gas rumah kaca yang dihasilkan kendaraan bermotor adalah...",
      options: ["Oksigen","Karbon dioksida","Nitrogen","Uap air"],
      answer: 1,
    },
    {
      question: "Dampak pemanasan global terhadap hewan adalah...",
      options: ["Habitat rusak","Hewan bertambah","Suhu stabil","Lingkungan membaik"],
      answer: 0,
    },
    {
      question: "Salah satu penyebab pemanasan global di rumah adalah...",
      options: ["Mematikan lampu","Menggunakan listrik berlebihan","Menanam tanaman","Membuka jendela"],
      answer: 1,
    },
    {
      question: "Pemanasan global menyebabkan cuaca menjadi...",
      options: ["Stabil","Ekstrem","Dingin","Sejuk"],
      answer: 1,
    },
    {
      question: "Salah satu solusi global warming adalah...",
      options: ["Energi fosil","Reboisasi","Membakar hutan","Plastik terus-menerus"],
      answer: 1,
    },
    {
      question: "Reboisasi adalah...",
      options: ["Penebangan hutan","Penanaman kembali hutan","Pembangunan gedung","Penggunaan energi"],
      answer: 1,
    }
  ],


// Isian Singkat
  short: [
    {
      q: "Apa itu pemanasan global?",
      keywords: ["peningkatan","suhu","bumi"],
      explanation: "Pemanasan global adalah peningkatan suhu rata-rata bumi."
    },
    {
      q: "Sebutkan 1 gas penyebab pemanasan global!",
      keywords: ["karbon","dioksida","co2"],
      explanation: "Gas utama penyebab adalah karbon dioksida (CO2)."
    },
    {
      q: "Apa penyebab utama pemanasan global?",
      keywords: ["pembakaran","fosil","bahan bakar"],
      explanation: "Penyebab utama adalah pembakaran bahan bakar fosil."
    },
    {
      q: "Sebutkan 1 dampak pemanasan global!",
      keywords: ["es","kutub","mencair"],
      explanation: "Salah satu dampak adalah mencairnya es di kutub."
    },
    {
      q: "Apa itu efek rumah kaca?",
      keywords: ["panas","terperangkap","atmosfer"],
      explanation: "Efek rumah kaca adalah panas yang terperangkap di atmosfer."
    },
    {
      q: "Mengapa hutan penting?",
      keywords: ["menyerap","karbon","co2"],
      explanation: "Hutan penting karena menyerap karbon dioksida."
    },
    {
      q: "Sebutkan 1 cara mengurangi pemanasan global!",
      keywords: ["menanam","pohon"],
      explanation: "Salah satu cara adalah menanam pohon."
    },
    {
      q: "Apa dampak pada laut?",
      keywords: ["permukaan","laut","naik"],
      explanation: "Pemanasan global menyebabkan permukaan laut naik."
    },
    {
      q: "Apa dampak pada cuaca?",
      keywords: ["cuaca","ekstrem"],
      explanation: "Cuaca menjadi lebih ekstrem."
    },
    {
      q: "Apa yang bisa dilakukan di rumah?",
      keywords: ["hemat","listrik"],
      explanation: "Menghemat listrik membantu mengurangi pemanasan global."
    }
  ],

// Isian Panjang
   long: [
    {
      q: "Jelaskan pengertian pemanasan global!",
      keywords: ["suhu","bumi","meningkat","gas rumah kaca"],
      explanation: "Pemanasan global adalah peningkatan suhu bumi akibat gas rumah kaca."
    },
    {
      q: "Jelaskan penyebab terjadinya pemanasan global!",
      keywords: ["fosil","kendaraan","pabrik","hutan","energi"],
      explanation: "Disebabkan oleh pembakaran bahan bakar fosil dan penebangan hutan."
    },
    {
      q: "Jelaskan dampak pemanasan global bagi lingkungan!",
      keywords: ["es","laut","cuaca","habitat"],
      explanation: "Dampaknya meliputi es mencair, laut naik, cuaca ekstrem, dan kerusakan habitat."
    },
    {
      q: "Jelaskan cara mengurangi pemanasan global!",
      keywords: ["hemat","energi","tanam","pohon","transportasi"],
      explanation: "Cara mengurangi antara lain hemat energi, menanam pohon, dan mengurangi kendaraan."
    },
    {
      q: "Jelaskan dampak pemanasan global bagi kehidupan manusia!",
      keywords: ["banjir","kesehatan","air","ekonomi"],
      explanation: "Dampaknya termasuk banjir, masalah kesehatan, krisis air, dan gangguan ekonomi."
    }
  ]

};

// Init
const CONFIG = [
  {type:"pg", time:15, point:2, total:15, name:"Pilgan"},
  {type:"short", time:20, point:4, total:10, name:"Singkat"},
  {type:"long", time:60, point:6, total:5, name:"Panjang"}
];

const MAX_SCORE = CONFIG.reduce((total, c) => {
  return total + (c.point * c.total);
}, 0);

// Random
function shuffle(arr){
  for(let i = arr.length-1; i>0; i--){
    let j = Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Data
const data = {
  pg: shuffle([...quizData.pg]),
  short: shuffle([...quizData.short]),
  long: shuffle([...quizData.long])
};

// State
let state = JSON.parse(localStorage.getItem("quizState")) || {
  session: 0,
  index: 0,
  score: 0,
  answers: [],
  sessionScore: [0,0,0],
  locked: false,
  timeLeft: 0
};

// Loading
function loadQuestion(){
  stopTimer();
  state.locked = false;

  const config = CONFIG[state.session];
  const q = data[config.type][state.index];

  state.timeLeft = config.time;

  render(q, config.type);
  renderProgress();
  startTimer();
  saveState();
}

// Render
function render(q, type){
  let html = `<div class="question">${q.question || q.q}</div>`;

  if(type === "pg"){
    html += q.options.map((opt,i)=>
      `<div class="option" onclick="selectAnswer(${i})">${opt}</div>`
    ).join("");
  } else {
    html += `
      <textarea id="input" placeholder="Tulis jawaban..."></textarea>
      <button onclick="submitAnswer()">Submit</button>
    `;
  }

  document.getElementById("quiz").innerHTML = html;
}

// Timer
let timer;
function startTimer(){
  timer = setInterval(()=>{
    state.timeLeft--;
    updateTimer();

    if(state.timeLeft <= 0){
      autoSubmit();
    }
  },1000);
}

function stopTimer(){
  clearInterval(timer);
}

// Validasi
function validate(user, keywords){
  let match = 0;
  user = user.toLowerCase();

  keywords.forEach(k=>{
    if(user.includes(k)) match++;
  });

  return match >= Math.ceil(keywords.length/2);
}

// Answer
function selectAnswer(i){
  if(state.locked) return;
  state.locked = true;
  stopTimer();

  const config = CONFIG[state.session];
  const q = data[config.type][state.index];
  const correct = q.answer;
  const isCorrect = i === correct;

  saveAnswer(isCorrect, q.options[correct]);
  feedback(isCorrect, q.options[correct]);
}

function submitAnswer(){
  if(state.locked) return;

  const input = document.getElementById("input").value.trim();
  if(!input) return alert("Jawaban tidak boleh kosong!");

  state.locked = true;
  stopTimer();

  const config = CONFIG[state.session];
  const q = data[config.type][state.index];

  const isCorrect = validate(input, q.keywords);

  saveAnswer(isCorrect, q.explanation);
  feedback(isCorrect, q.explanation);
}

// Save
function saveAnswer(correct, correctText){
  const config = CONFIG[state.session];

  state.answers.push({
    session: state.session,
    index: state.index,
    correct,
    correctText
  });

  if(correct){
    state.score += config.point;
    state.sessionScore[state.session] += config.point;
  }

  state.score = Math.min(state.score, MAX_SCORE);

  saveState();
}

// Feedback
function feedback(isCorrect, text){
  const el = document.getElementById("quiz");

  el.innerHTML += `
    <div class="feedback ${isCorrect?"correct":"wrong"}">
      ${isCorrect?"✅ Benar":"❌ Salah"}
      <br>${text}
    </div>
  `;

  playSound(isCorrect);

  setTimeout(next,2000);
}

// Next
function next(){
  state.index++;

  const config = CONFIG[state.session];

if(state.index >= data[config.type].length){
    nextSession();
  } else {
    loadQuestion();
  }
}

// Session
function nextSession(){
  state.session++;
  state.index = 0;

  if(state.session >= CONFIG.length){
    showResult();
    return;
  }

  loadQuestion();
}

// Result
function showResult(){
  stopTimer();
  state.score = Math.min(state.score, 100);

  const percent = Math.round((state.score / MAX_SCORE) * 100);

  let grade = "E 😢";
  if(percent >= 90) grade = "S 🏆";
  else if(percent >= 80) grade = "A 🎉";
  else if(percent >= 70) grade = "B 👍";
  else if(percent >= 60) grade = "C 🙂";
  else if(percent >= 50) grade = "D 😬";

  document.getElementById("quiz").innerHTML = `
    <div class="result-box">
      <h1>🎉 Quiz Selesai!</h1>

      <h2>Skor: ${state.score} / ${MAX_SCORE}</h2>
      <h3>${percent}% • Rank: ${grade}</h3>
      <div class="detail-score">
        <p>Pilgan: ${state.sessionScore[0]} / ${CONFIG[0].point * CONFIG[0].total}</p>
        <p>Singkat: ${state.sessionScore[1]} / ${CONFIG[1].point * CONFIG[1].total}</p>
        <p>Panjang: ${state.sessionScore[2]} / ${CONFIG[2].point * CONFIG[2].total}</p>
      </div>

      <div class="result-btns">
        <button onclick="goHome()">🏠 Home</button>
        <button onclick="showFullResults()">📊 Results</button>
        <button class="btn-restart" onclick="restartQuiz()">🔄 Ulangi Quiz</button>
      </div>
    </div>
  `;
}

function showFullResults(){
  let html = `
    <h2>📊 Hasil Jawaban</h2>
  `;

      const totalSoal = CONFIG.reduce((t,c)=> t + c.total, 0);

      state.answers.slice(0, totalSoal).forEach((a,i)=>{
      html += `
      <div class="review ${a.correct?"correct":"wrong"}">
        Soal ${a.index+1}(${CONFIG[a.session].name}): ${a.correct ? "✔ Benar" : "✖ Salah"}
        <br>${a.correctText}
      </div>
    `;
  });

  html += `
    <button onclick="showResult()">⬅ Kembali</button>
  `;

  document.getElementById("quiz").innerHTML = html;
}

// Back Home
function goHome(){
  localStorage.removeItem("quizState");
  window.location.href = "index.html";
}

// Auto
function autoSubmit(){
  if(state.locked) return;

  state.locked = true;
  stopTimer();

  saveAnswer(false, "⏰ Waktu habis");
  feedback(false, "Waktu habis");
}

// UI
function renderProgress(){
  const config = CONFIG[state.session];
  const percent = ((state.index+1)/config.total)*100;
  document.getElementById("progressBar").style.width = percent+"%";
}

function updateTimer(){
  document.getElementById("timer").innerText = state.timeLeft;
}

// Storage
function saveState(){
  localStorage.setItem("quizState", JSON.stringify(state));
}

// Sound
function playSound(correct){
  const s = correct ? document.getElementById("correctSound") : document.getElementById("wrongSound");
  if(!mute) s.play();
}

let mute = false;
function toggleSound(){
  mute = !mute;
}

// Start + Restart
window.onload = function(){
  localStorage.removeItem("quizState");

  state = {
    session: 0,
    index: 0,
    score: 0,
    answers: [],
    sessionScore: [0,0,0],
    locked: false,
    timeLeft: 0
  };

loadQuestion();
};


