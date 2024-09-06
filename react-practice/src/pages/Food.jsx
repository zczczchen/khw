import React from "react";
import { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import "../css/food.css";

const snackOptions = [
  { option: "涼麵 🥒 " },
  { option: "乾拌麵 🌶️" },
  { option: "生魚飯 🍣" },
  { option: "烤餅 🥙" },
  { option: "漢堡 🍔" },
  { option: "雞肉飯 🐓" },
  { option: "滷味 🍢" },
  { option: "水餃 🥟" },
  { option: "早午餐 🍳" },
  { option: "湯麵 🍜" },
  { option: "咖哩 🍛" },
  { option: "越式 🇻🇳" },
  { option: "自助餐 🍱" },
  { option: "健康餐盒 🥗" },
  { option: "泰式 🇹🇭" },
  { option: "義大利麵 🍝" },
  { option: "韓式 🇰🇷" },
  { option: "問別人 ☎️" },
];

const drinkOptions = [
  { option: "坪林手 🌱" },
  { option: "50嵐 🧋" },
  { option: "再睡5分鐘 🦥" },
  { option: "烏弄 🫖" },
  { option: "得正 🉐" },
  { option: "五桐號 5️⃣" },
  { option: "龜記 🐢" },
  { option: "一沐日 🎋" },
  { option: "一手私藏 🥤" },
  { option: "鶴茶樓 🦩" },
  { option: "麻古 🥁" },
  { option: "可不可 🉑" },
  { option: "天仁茗茶 🍵" },
  { option: "威爾貝克 ☕️" },
];

function Food() {
  const [snackPrize, setSnackPrize] = useState(0);
  const [drinkPrize, setDrinkPrize] = useState(0);
  const [snackSpinning, setSnackSpinning] = useState(false);
  const [drinkSpinning, setDrinkSpinning] = useState(false);

  const handleSnackSpinClick = () => {
    const randomIndex = Math.floor(Math.random() * snackOptions.length);
    setSnackPrize(randomIndex);
    setTimeout(() => {
      setSnackSpinning(true);
    }, 100);
  };

  const handleDrinkSpinClick = () => {
    const randomIndex = Math.floor(Math.random() * drinkOptions.length);
    setDrinkPrize(randomIndex);
    setTimeout(() => {
      setDrinkSpinning(true);
    }, 100);
  };

  return (
    <div className='foods-wrap'>
      <h1>Lunch Idea?</h1>

      <div className='food-wrap'>
        <div className='snack-wrap'>
          <div className='wheel'>
            <Wheel
              mustStartSpinning={snackSpinning}
              prizeNumber={snackPrize}
              data={snackOptions}
              onStopSpinning={() => setSnackSpinning(false)}
              backgroundColors={["#008080", "#E0E0E0"]}
              textColors={["#FFFFFF", "#000000"]}
              spinDuration={2}
              outerBorderColor='#000000'
              radiusLineColor='#ffffff'
              radiusLineWidth={2}
            />
          </div>
          <button className='choice-food-button' onClick={handleSnackSpinClick}>
            轉動食物轉盤
          </button>
          <p className='show-food'>
            {snackSpinning ? "旋轉中..." : snackOptions[snackPrize]?.option}
          </p>
        </div>

        <div className='drink-wrap'>
          <div className='wheel'>
            <Wheel
              mustStartSpinning={drinkSpinning}
              prizeNumber={drinkPrize}
              data={drinkOptions}
              onStopSpinning={() => setDrinkSpinning(false)}
              backgroundColors={["#008080", "#E0E0E0"]}
              textColors={["#FFFFFF", "#000000"]}
              spinDuration={2}
              outerBorderColor='#000000'
              radiusLineColor='#ffffff'
              radiusLineWidth={2}
            />
          </div>
          <button className='choice-food-button' onClick={handleDrinkSpinClick}>
            轉動飲料轉盤
          </button>
          <p className='show-food'>
            {drinkSpinning ? "旋轉中..." : drinkOptions[drinkPrize]?.option}
          </p>
        </div>
      </div>

      <button
        className='reset-food-button'
        onClick={() => {
          setSnackPrize(0);
          setDrinkPrize(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Food;
