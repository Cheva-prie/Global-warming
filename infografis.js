let timelineChart, emissionChart, ghgChart, predictionChart;

/* Dataset */
const DATA = {
  temperature: [
    { year: 1850, anomaly: -0.62 },
    { year: 1860, anomaly: -0.55 },
    { year: 1870, anomaly: -0.49 },
    { year: 1880, anomaly: -0.42 },
    { year: 1890, anomaly: -0.36 },
    { year: 1900, anomaly: -0.29 },
    { year: 1910, anomaly: -0.23 },
    { year: 1920, anomaly: -0.16 },
    { year: 1930, anomaly: -0.1 },
    { year: 1940, anomaly: -0.03 },
    { year: 1950, anomaly: 0.03 },
    { year: 1960, anomaly: 0.1 },
    { year: 1970, anomaly: 0.16 },
    { year: 1980, anomaly: 0.23 },
    { year: 1990, anomaly: 0.29 },
    { year: 2000, anomaly: 0.36 },
    { year: 2010, anomaly: 0.42 },
    { year: 2020, anomaly: 0.49 },
    { year: 2026, anomaly: 0.53 },
    { year: 2030, anomaly: 0.55 },
    { year: 2040, anomaly: 0.62 },
    { year: 2050, anomaly: 0.68 }
  ],

  co2: [
    { year: 1850, ppm: 123.9 },
    { year: 1860, ppm: 140.6 },
    { year: 1870, ppm: 157.3 },
    { year: 1880, ppm: 174.1 },
    { year: 1890, ppm: 190.8 },
    { year: 1900, ppm: 207.5 },
    { year: 1910, ppm: 224.2 },
    { year: 1920, ppm: 240.9 },
    { year: 1930, ppm: 257.7 },
    { year: 1940, ppm: 274.4 },
    { year: 1950, ppm: 291.1 },
    { year: 1960, ppm: 307.8 },
    { year: 1970, ppm: 324.5 },
    { year: 1980, ppm: 341.3 },
    { year: 1990, ppm: 358 },
    { year: 2000, ppm: 374.7 },
    { year: 2010, ppm: 391.4 },
    { year: 2020, ppm: 408.1 },
    { year: 2026, ppm: 418.2 },
    { year: 2030, ppm: 424.9 },
    { year: 2040, ppm: 441.6 },
    { year: 2050, ppm: 450 }
  ],

  seaLevel: [
    { year: 1850, mm: -511.2 },
    { year: 1860, mm: -476.1 },
    { year: 1870, mm: -441 },
    { year: 1880, mm: -405.9 },
    { year: 1890, mm: -370.8 },
    { year: 1900, mm: -335.6 },
    { year: 1910, mm: -300.5 },
    { year: 1920, mm: -265.4 },
    { year: 1930, mm: -230.3 },
    { year: 1940, mm: -195.1 },
    { year: 1950, mm: -160 },
    { year: 1960, mm: -124.9 },
    { year: 1970, mm: -89.8 },
    { year: 1980, mm: -54.6 },
    { year: 1990, mm: -19.5 },
    { year: 2000, mm: 15.6 },
    { year: 2010, mm: 50.7 },
    { year: 2020, mm: 85.9 },
    { year: 2026, mm: 107 },
    { year: 2030, mm: 121 },
    { year: 2040, mm: 156.1 },
    { year: 2050, mm: 191.2 }
  ],

  emissionsByCountry: {
    "China": 10.04,
    "United States": 4.32,
    "India": 2.34,
    "Russia": 1.56,
    "Japan": 1,
    "Germany": 0.6,
    "Indonesia": 0.58,
    "Iran": 0.58,
    "South Korea": 0.55,
    "Canada": 0.52,
    "Saudi Arabia": 0.5,
    "Brazil": 0.39,
    "South Africa": 0.39,
    "Australia": 0.38,
    "Turkey": 0.37,
    "Mexico": 0.36,
    "United Kingdom": 0.31,
    "Vietnam": 0.29,
    "Italy": 0.28,
    "Poland": 0.28,
    "France": 0.27,
  },

  ghgComposition: {
    "CO2": 76,
    "Methane (CH4)": 16,
    "Nitrous Oxide (N2O)": 6,
    "F-Gases": 2
  }
};

/* Style Grafik */
Chart.defaults.color = "rgba(234,247,255,0.85)";
Chart.defaults.font.family = "Poppins";
Chart.defaults.borderColor = "rgba(255,255,255,0.12)";

/* Utilitas */
function last(arr) {
  return arr[arr.length - 1];
}

function linearRegression(x, y) {
  const n = x.length;
  let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;

  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXY += x[i] * y[i];
    sumXX += x[i] * x[i];
  }

  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
}

function correlation(x, y) {
  const n = x.length;
  const meanX = x.reduce((a, b) => a + b, 0) / n;
  const meanY = y.reduce((a, b) => a + b, 0) / n;

  let num = 0;
  let denX = 0;
  let denY = 0;

  for (let i = 0; i < n; i++) {
    const dx = x[i] - meanX;
    const dy = y[i] - meanY;
    num += dx * dy;
    denX += dx * dx;
    denY += dy * dy;
  }

  return num / Math.sqrt(denX * denY);
}

/* Efek */
function initReveal() {
  const items = document.querySelectorAll(".reveal");

  items.forEach(el => el.classList.add("active"));

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => obs.observe(el));
}

/* Hero & Fakta */
function fillHero() {
  const t = last(DATA.temperature);
  const c = last(DATA.co2);
  const s = last(DATA.seaLevel);

  document.getElementById("heroTemp").innerText = t.anomaly.toFixed(2);
  document.getElementById("heroCO2").innerText = c.ppm.toFixed(0);
  document.getElementById("heroSea").innerText = s.mm.toFixed(0);

  document.getElementById("factTemp").innerText = t.anomaly.toFixed(2);
  document.getElementById("factCO2").innerText = c.ppm.toFixed(0);
  document.getElementById("factSea").innerText = s.mm.toFixed(0);
  document.getElementById("factYear").innerText = t.year;

  let risk = Math.min(
    100,
    (t.anomaly / 1.5) * 55 +
    (c.ppm / 500) * 25 +
    (s.mm / 100) * 20
  );

  risk = Math.round(risk);

  document.getElementById("riskText").innerText = risk + "%";
  document.getElementById("riskFill").style.width = risk + "%";
}

/* Grafik Timeline + Prediksi */
function buildTimeline() {
  const years = DATA.temperature.map(d => d.year);
  const temp = DATA.temperature.map(d => d.anomaly);
  const sea = DATA.seaLevel.map(d => d.mm);
  const co2 = DATA.co2.map(d => d.ppm);

  timelineChart = new Chart(document.getElementById("timelineChart"), {
    type: "line",
    data: {
      labels: years,
      datasets: [
        {
          label: "Temperature Anomaly (°C)",
          data: temp,
          borderColor: "rgba(0,234,255,0.95)",
          backgroundColor: "rgba(0,234,255,0.12)",
          borderWidth: 3,
          tension: 0.35,
          fill: true,
          pointRadius: 0
        },
        {
          label: "Sea Level (mm)",
          data: sea,
          borderColor: "rgba(255,0,140,0.85)",
          backgroundColor: "rgba(255,0,140,0.10)",
          borderWidth: 3,
          tension: 0.35,
          fill: true,
          pointRadius: 0
        },
        {
          label: "CO₂ (ppm)",
          data: co2,
          borderColor: "rgba(255,255,255,0.65)",
          backgroundColor: "rgba(255,255,255,0.06)",
          borderWidth: 2,
          tension: 0.35,
          fill: true,
          pointRadius: 0,
          yAxisID: "y1"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: {
          labels: { color: "rgba(234,247,255,0.85)" }
        },
        zoom: {
          zoom: {
            wheel: { enabled: true },
            pinch: { enabled: true },
            mode: "x"
          },
          pan: {
            enabled: true,
            mode: "x"
          }
        }
      },
      scales: {
        y: {
          grid: { color: "rgba(255,255,255,0.06)" }
        },
        y1: {
          position: "right",
          grid: { drawOnChartArea: false }
        },
        x: {
          grid: { color: "rgba(255,255,255,0.03)" }
        }
      }
    }
  });

  const tempChange = last(DATA.temperature).anomaly - DATA.temperature[0].anomaly;
  const co2Change = last(DATA.co2).ppm - DATA.co2[0].ppm;
  const seaChange = last(DATA.seaLevel).mm - DATA.seaLevel[0].mm;

  document.getElementById("timelineInsight").innerText =
    `Dari ${DATA.temperature[0].year} hingga ${last(DATA.temperature).year}: Anomali suhu meningkat sebesar ${tempChange.toFixed(2)}°C, CO₂ meningkat sebesar ${co2Change.toFixed(0)} ppm, dan permukaan laut naik sebesar ${seaChange.toFixed(0)} mm.`;
}

/* Grafik Gas Emisi */
function buildEmissionChart() {
  const labels = Object.keys(DATA.emissionsByCountry);
  const values = Object.values(DATA.emissionsByCountry);

  emissionChart = new Chart(document.getElementById("emissionChart"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "CO₂ Emissions (total)",
        data: values,
        backgroundColor: "rgba(0,234,255,0.55)",
        borderColor: "rgba(255,255,255,0.18)",
        borderWidth: 1,
        borderRadius: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: "rgba(234,247,255,0.85)" }
        }
      },
      scales: {
        x: { grid: { color: "rgba(255,255,255,0.03)" } },
        y: { beginAtZero: true, grid: { color: "rgba(255,255,255,0.06)" } }
      }
    }
  });

  const max = Math.max(...values);
  const top = labels[values.indexOf(max)];

  document.getElementById("emissionInsight").innerText =
    `Penghasil emisi tertinggi dalam dataset: ${top} (±${max.toFixed(1)} Gt.`;
}

/* Grafik Komponen Gas Rumah Kaca */
function buildGHGChart() {
  const labels = Object.keys(DATA.ghgComposition);
  const values = Object.values(DATA.ghgComposition);

  ghgChart = new Chart(document.getElementById("ghgChart"), {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: [
          "rgba(0,234,255,0.75)",
          "rgba(255,0,140,0.75)",
          "rgba(255,255,255,0.55)",
          "rgba(255,0,93,0.65)"
        ],
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.12)"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: { color: "rgba(234,247,255,0.85)" }
        }
      }
    }
  });

  document.getElementById("ghgInsight").innerText =
    `CO₂ mendominasi gas rumah kaca  (±${DATA.ghgComposition["CO2"]}%). Lalu gas metana adalah kontributor terbesar kedua.`;
}

/* Grafik Prediksi (to 2050) */
function buildPredictionChart() {
  const years = DATA.temperature.map(d => d.year);
  const temps = DATA.temperature.map(d => d.anomaly);

  const model = linearRegression(years, temps);

  const predYears = [];
  const predTemps = [];

  for (let y = 1850; y <= 2050; y += 5) {
    predYears.push(y);
    predTemps.push(model.slope * y + model.intercept);
  }

  predictionChart = new Chart(document.getElementById("predictionChart"), {
    type: "line",
    data: {
      labels: predYears,
      datasets: [{
        label: "Temperature Prediction (°C)",
        data: predTemps,
        borderColor: "rgba(255,0,93,0.9)",
        backgroundColor: "rgba(255,0,93,0.12)",
        borderWidth: 3,
        tension: 0.35,
        fill: true,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: "rgba(234,247,255,0.85)" }
        }
      },
      scales: {
        x: { grid: { color: "rgba(255,255,255,0.03)" } },
        y: { grid: { color: "rgba(255,255,255,0.06)" } }
      }
    }
  });

  const temp2050 = model.slope * 2050 + model.intercept;

  document.getElementById("predictionInsight").innerText =
    `Regresi linier memprediksi anomali suhu bisa mencapai  ±${temp2050.toFixed(2)}°C pada tahun 2050 (model tren sederhana).`;
}

/* Laporan Analisis */
function buildAnalytics() {
  const years = DATA.temperature.map(d => d.year);
  const temps = DATA.temperature.map(d => d.anomaly);
  const co2 = DATA.co2.map(d => d.ppm);
  const sea = DATA.seaLevel.map(d => d.mm);

  const tTrend = linearRegression(years, temps);
  const cTrend = linearRegression(DATA.co2.map(d => d.year), co2);
  const sTrend = linearRegression(DATA.seaLevel.map(d => d.year), sea);

  const corrTC = correlation(temps, co2);

  document.getElementById("anaTemp").innerText =
    `Laju pemanasan ≈ ${(tTrend.slope * 10).toFixed(3)} °C per dekade. Ini menunjukkan percepatan pemanasan yang kuat.`;

  document.getElementById("anaCO2").innerText =
    `Pertumbuhan CO₂ ≈ ${(cTrend.slope * 10).toFixed(2)} ppm per dekade. CO₂ meningkat dengan cepat setelah era industri.`;

  document.getElementById("anaSea").innerText =
    `Kenaikan permukaan laut ≈ ${(sTrend.slope * 10).toFixed(2)} mm per decade. Sdekade. Kenaikan laut terkait dengan pencairan es dan pengembangan lautan.`;

  let status = "MODERATE";
  if (corrTC > 0.80) status = "SIAGA TINGGI";
  if (last(DATA.temperature).anomaly >= 1.0) status = "SIAGA EKSTREM";

  document.getElementById("anaWarning").innerText =
    `Korelasi antara CO₂ dan suhu ≈ ${corrTC.toFixed(2)} (hubungan kuat). Status sistem: : ${status}.`;
}

/* Hasil Analisis Data */
function buildResultAnalysis() {
  const years = DATA.temperature.map(d => d.year);
  const temps = DATA.temperature.map(d => d.anomaly);

  const co2Years = DATA.co2.map(d => d.year);
  const co2Vals = DATA.co2.map(d => d.ppm);

  const seaYears = DATA.seaLevel.map(d => d.year);
  const seaVals = DATA.seaLevel.map(d => d.mm);

  const tempTrend = linearRegression(years, temps);
  const co2Trend = linearRegression(co2Years, co2Vals);
  const seaTrend = linearRegression(seaYears, seaVals);

  const corrTC = correlation(temps, co2Vals.slice(0, temps.length));

  const nowTemp = last(DATA.temperature).anomaly;
  const nowCO2 = last(DATA.co2).ppm;
  const nowSea = last(DATA.seaLevel).mm;

  const tempRate = (tempTrend.slope * 10).toFixed(3);
  const co2Rate = (co2Trend.slope * 10).toFixed(2);
  const seaRate = (seaTrend.slope * 10).toFixed(2);

  document.getElementById("resultTemp").innerText =
    `Berdasarkan grafik timeline, suhu global menunjukkan tren peningkatan yang konsisten. Laju pemanasan diperkirakan sekitar ${tempRate}°C per dekade. Nilai anomali suhu terbaru mencapai ±${nowTemp.toFixed(2)}°C, menandakan bahwa pemanasan global telah melampaui batas stabil iklim pra-industri.`;

  document.getElementById("resultCO2").innerText =
    `Konsentrasi CO₂ meningkat dengan cepat, dengan estimasi kenaikan sekitar ${co2Rate} ppm per dekade. Korelasi antara CO₂ dan suhu adalah ${corrTC.toFixed(2)}, yang menunjukkan hubungan kuat: semakin tinggi CO₂ atmosfer, semakin besar energi panas yang terperangkap di atmosfer.`;

  document.getElementById("resultSea").innerText =
    `Permukaan laut juga memperlihatkan kenaikan jangka panjang. Perhitungan regresi menunjukkan laju kenaikan sekitar ${seaRate} mm per dekade. Nilai permukaan laut terkini berada di sekitar ${nowSea.toFixed(0)} mm, yang berpotensi memperparah banjir rob dan abrasi pesisir.`;

  let risk = Math.min(
    100,
    (nowTemp / 1.5) * 55 +
    (nowCO2 / 500) * 25 +
    (nowSea / 100) * 20
  );
  risk = Math.round(risk);

  let riskText = "MODERATE";
  if (risk >= 60) riskText = "HIGH";
  if (risk >= 80) riskText = "EXTREME";

  document.getElementById("resultRisk").innerText =
    `Gabungan indikator suhu, CO₂, dan permukaan laut menunjukkan tingkat risiko iklim global berada pada level ${riskText}. Indeks risiko sistem saat ini diperkirakan sekitar ${risk}%, yang berarti kemungkinan cuaca ekstrem, gelombang panas, kekeringan, serta banjir meningkat secara signifikan.`;

  document.getElementById("resultSummary").innerText =
    `Secara keseluruhan, dataset menunjukkan bahwa aktivitas manusia telah meningkatkan emisi gas rumah kaca sehingga CO₂ naik hingga ±${nowCO2.toFixed(0)} ppm. Dampaknya terlihat pada kenaikan suhu global dan kenaikan permukaan laut yang terus berlanjut. Jika tren ini tidak dikendalikan, maka dampak seperti banjir pesisir, gagal panen, kerusakan ekosistem, serta krisis iklim global akan semakin sulit dihentikan.`;
}

/* Section Before After */
function buildComparison() {
  const pastTemp = DATA.temperature[0].anomaly;
  const pastCO2 = DATA.co2[0].ppm;
  const pastSea = DATA.seaLevel[0].mm;

  const nowTemp = last(DATA.temperature).anomaly;
  const nowCO2 = last(DATA.co2).ppm;
  const nowSea = last(DATA.seaLevel).mm;

  document.getElementById("pastTemp").innerText = pastTemp.toFixed(2);
  document.getElementById("pastCO2").innerText = pastCO2.toFixed(0);
  document.getElementById("pastSea").innerText = pastSea.toFixed(0);

  document.getElementById("nowTemp").innerText = nowTemp.toFixed(2);
  document.getElementById("nowCO2").innerText = nowCO2.toFixed(0);
  document.getElementById("nowSea").innerText = nowSea.toFixed(0);

  const deltaTemp = nowTemp - pastTemp;
  const deltaCO2 = nowCO2 - pastCO2;
  const deltaSea = nowSea - pastSea;

  document.getElementById("compareInsight").innerText =
    `Dibandingkan dengan era pra-industri (1850), suhu global meningkat sekitar ${deltaTemp.toFixed(2)}°C, CO₂ atmosfer meningkat sekitar ${deltaCO2.toFixed(0)} ppm, dan permukaan laut naik sekitar ${deltaSea.toFixed(0)} mm. Ini menunjukkan pergeseran iklim besar yang disebabkan oleh akumulasi gas rumah kaca.`;
}

/* Section Hubungan Sebab Akibat */
function buildChain() {
  const latestTemp = last(DATA.temperature).anomaly;
  const latestSea = last(DATA.seaLevel).mm;
  const co2Percent = DATA.ghgComposition["CO2"];

  document.getElementById("chainCO2").innerText = co2Percent;
  document.getElementById("chainTemp").innerText = latestTemp.toFixed(2);
  document.getElementById("chainSea").innerText = latestSea.toFixed(0);

  document.getElementById("chainInsight").innerText =
    `Aktivitas industri manusia banyak melepaskan gas rumah kaca yang di dominasi oleh CO₂ msekitar ${co2Percent}%). Gas-gas ini menjebak panas, meningkatkan suhu bumi, bahkan anomali suhu saat ini sekitar ${latestTemp.toFixed(2)}°C). Laut yang lebih hangat mengembang dan es mencair, meningkatkan permukaan laut sekitar ${latestSea.toFixed(0)} mm). Apalagi jika digabungkan dengan curah hujan ekstrem, hal ini akan menciptakan risiko banjir yang lebih tinggi di daerah pesisir dan perkotaan.`;
}

/* Filter */
function initFilters() {
  document.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const mode = btn.dataset.mode;

      timelineChart.data.datasets.forEach(ds => {
        if (mode === "all") ds.hidden = false;
        if (mode === "temp") ds.hidden = !ds.label.includes("Temperature");
        if (mode === "co2") ds.hidden = !ds.label.includes("CO₂");
        if (mode === "sea") ds.hidden = !ds.label.includes("Sea Level");
      });

      timelineChart.update();
    });
  });

  document.getElementById("btnResetZoom").addEventListener("click", () => {
    if (timelineChart) timelineChart.resetZoom();
  });
}

/* Pencarian Emisi GRK setiap Negara */
function initSearch() {
  const input = document.getElementById("searchCountry");

  input.addEventListener("input", () => {
    const q = input.value.toLowerCase().trim();

    const allLabels = Object.keys(DATA.emissionsByCountry);
    const allValues = Object.values(DATA.emissionsByCountry);

    const newLabels = [];
    const newValues = [];

    allLabels.forEach((country, i) => {
      if (country.toLowerCase().includes(q)) {
        newLabels.push(country);
        newValues.push(allValues[i]);
      }
    });

    emissionChart.data.labels = newLabels;
    emissionChart.data.datasets[0].data = newValues;
    emissionChart.update();
  });
}

/* Export PDF & PNG */
function initExport() {
  document.getElementById("btnExportPNG").addEventListener("click", () => {
    if (!timelineChart) return;

    const url = timelineChart.toBase64Image();
    const a = document.createElement("a");
    a.href = url;
    a.download = "NASA_Timeline.png";
    a.click();
  });

  document.getElementById("btnExportPDF").addEventListener("click", () => {
    const element = document.getElementById("dashboardContent");

    html2pdf().set({
      margin: 0.3,
      filename: "NASA_Climate_Dashboard.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
    }).from(element).save();
  });
}

/* Chart Scroll */
function initScrollDrag() {
  const slider = document.querySelector(".chart-scroll");

  if (!slider) return; // kalau belum ada, jangan error

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
}

/* Loading Komponen JS */
window.onload = function () {
  document.getElementById("loadingScreen").style.display = "none";

  initReveal();

  fillHero();
  buildTimeline();
  buildEmissionChart();
  buildGHGChart();
  buildPredictionChart();
  buildAnalytics();
  buildResultAnalysis();
  buildComparison();
  buildChain();
  initFilters();
  initSearch();
  initExport();
  initScrollDrag();
};