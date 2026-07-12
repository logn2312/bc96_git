// ===================== ĐIỀU HƯỚNG (SIDEBAR) =====================
const navButtons = document.querySelectorAll(".nav-btn");
const panels = document.querySelectorAll(".panel");

navButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    navButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    panels.forEach(function (p) {
      p.classList.remove("active");
    });

    btn.classList.add("active");
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});

// ===================== BÀI 1 =====================
const calcSalaryBtn = document.getElementById("calcSalaryBtn");
const salaryResult = document.getElementById("salaryResult");

function calcSalary() {
  const dailySalary = document.getElementById("dailySalary").value;
  const workDays = document.getElementById("workDays").value;

  const result = dailySalary * workDays;
  salaryResult.innerText = "👉 " + result;
}

calcSalaryBtn.addEventListener("click", calcSalary);

// ===================== BÀI 2 =====================
const calcAverageBtn = document.getElementById("calcAverageBtn");
const averageResult = document.getElementById("averageResult");

function calcAverage() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);
  const num4 = parseFloat(document.getElementById("num4").value);
  const num5 = parseFloat(document.getElementById("num5").value);

  const result = (num1 + num2 + num3 + num4 + num5) / 5;
  averageResult.innerText = "👉 " + result.toFixed(0);
}

calcAverageBtn.addEventListener("click", calcAverage);

// ===================== BÀI 3 =====================
const calcMoneyBtn = document.getElementById("calcMoneyBtn");
const moneyResult = document.getElementById("moneyResult");

function calcMoney() {
  const money = parseFloat(document.getElementById("money").value);
  const usdToVnd = 23500; // Tỷ giá USD sang VND

  const result = money * usdToVnd;
  moneyResult.innerText = "👉 " + new Intl.NumberFormat('vn-VN').format(result);
}

calcMoneyBtn.addEventListener("click", calcMoney);


// ===================== BÀI 4 =====================
const chuviBtn = document.getElementById("chuviBtn");
const chuviResult = document.getElementById("chuviResult");

function calcChuvi() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);

  const perimeter = (length + width) * 2;

  chuviResult.innerText = `👉 Chu vi: ${perimeter}`;
}

chuviBtn.addEventListener("click", calcChuvi);

// ===================== BÀI 5 =====================
const kysoBtn = document.getElementById("kysoBtn");
const kysoResult = document.getElementById("kysoResult");

function calcKyso() {
  const number = parseInt(document.getElementById("number").value);

  if (number < 10 || number > 99) {
    kysoResult.innerText = "👉 Vui lòng nhập số có 2 chữ số!";
    return;
  }

  const chuc = Math.floor(number / 10);
  const donvi = number % 10;
  const sum = chuc + donvi;
  kysoResult.innerText = `👉 Tổng 2 ký số: ${sum}`;
}

kysoBtn.addEventListener("click", calcKyso);
