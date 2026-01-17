function saveData(age, gender) {
  localStorage.setItem("age", age);
  localStorage.setItem("gender", gender);
}

function goNutrition() {
  const age = ageInput = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  if (age < 1 || age > 100) return alert("Tuổi không hợp lệ");
  saveData(age, gender);
  window.location.href = "nutrition.html";
}

function nutrition(age, gender) {
  let protein, carb, fat, veg, water, kcal;

  if (age <= 7) {
    protein = gender === "male" ? 33 : 30;
    carb = 180; fat = 40; veg = 200; water = 1200; kcal = 1400;
  } else if (age <= 18) {
    protein = gender === "male" ? 60 : 55;
    carb = 300; fat = 70; veg = 400; water = 2000; kcal = 2200;
  } else if (age <= 59) {
    protein = gender === "male" ? 65 : 55;
    carb = 280; fat = 65; veg = 500; water = 2300; kcal = 2400;
  } else {
    protein = gender === "male" ? 60 : 50;
    carb = 240; fat = 50; veg = 450; water = 2000; kcal = 2000;
  }

  return { protein, carb, fat, veg, water, kcal };
}

if (document.getElementById("result")) {
  const age = localStorage.getItem("age");
  const gender = localStorage.getItem("gender");
  const n = nutrition(age, gender);

  document.getElementById("result").innerHTML = `
    <h2>📊 Dinh dưỡng cho ${age} tuổi (${gender === "male" ? "Nam" : "Nữ"})</h2>
    <ul style="text-align:left">
      <li>🥩 Protein: ${n.protein} g/ngày</li>
      <li>🍚 Carbohydrate: ${n.carb} g/ngày</li>
      <li>🥑 Lipid: ${n.fat} g/ngày</li>
      <li>🥦 Rau củ quả: ${n.veg} g/ngày</li>
      <li>💧 Nước: ${n.water} ml/ngày</li>
      <li>🔥 Năng lượng: ${n.kcal} kcal/ngày</li>
    </ul>
  `;
}

const foods = [];
for (let i = 1; i <= 100; i++) {
  foods.push({
    name: `Bữa ăn số ${i}`,
    meat: `${80 + i}g thịt/cá`,
    carb: `${150 + i}g tinh bột`,
    veg: `${200 + i}g rau`,
    fat: `${20 + i}g chất béo`,
    water: `${1500 + i}ml nước`
  });
}

function randomMeal() {
  const meal = foods[Math.floor(Math.random() * foods.length)];
  document.getElementById("meal").innerHTML = `
    <h3>${meal.name}</h3>
    <ul>
      <li>${meal.meat}</li>
      <li>${meal.carb}</li>
      <li>${meal.veg}</li>
      <li>${meal.fat}</li>
      <li>${meal.water}</li>
    </ul>
  `;
}

function goMeals() {
  window.location.href = "meals.html";
}
