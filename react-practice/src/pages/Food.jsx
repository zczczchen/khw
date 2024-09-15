import React from "react";
import { useState } from "react";
import { SpinWheel } from "../components/Wheel";
import "../css/food.css";

const snacks = [
  { segmentText: "涼麵 🥒", segColor: "#008080" },
  { segmentText: "乾拌麵 🌶️", segColor: "#70a494" },
  { segmentText: "生魚飯 🍣", segColor: "#008080" },
  { segmentText: "中東料理 🥙", segColor: "#70a494" },
  { segmentText: "漢堡 🍔", segColor: "#008080" },
  { segmentText: "雞肉飯 🐓", segColor: "#70a494" },
  { segmentText: "滷味 🍢", segColor: "#008080" },
  { segmentText: "水餃 🥟", segColor: "#70a494" },
  { segmentText: "早午餐 🍳", segColor: "#008080" },
  { segmentText: "湯麵 🍜", segColor: "#70a494" },
  { segmentText: "咖哩 🍛", segColor: "#008080" },
  { segmentText: "越式 🇻🇳", segColor: "#70a494" },
  { segmentText: "自助餐 🍱", segColor: "#008080" },
  { segmentText: "健康餐 🥗", segColor: "#70a494" },
  { segmentText: "泰式 🇹🇭", segColor: "#008080" },
  { segmentText: "韓式 🇰🇷", segColor: "#70a494" },
];

const drinks = [
  { segmentText: "坪林手 🌱", segColor: "#008080" },
  { segmentText: "50嵐 🧋", segColor: "#70a494" },
  { segmentText: "再睡5分鐘 🦥", segColor: "#008080" },
  { segmentText: "烏弄 🫖", segColor: "#70a494" },
  { segmentText: "得正 🉐", segColor: "#008080" },
  { segmentText: "五桐號 5️⃣", segColor: "#70a494" },
  { segmentText: "龜記 🐢", segColor: "#008080" },
  { segmentText: "一沐日 🎋", segColor: "#70a494" },
  { segmentText: "一手私藏 🥤", segColor: "#008080" },
  { segmentText: "鶴茶樓 🦩", segColor: "#70a494" },
  { segmentText: "麻古 🥁", segColor: "#008080" },
  { segmentText: "可不可 🉑", segColor: "#70a494" },
  { segmentText: "天仁茗茶 🍵", segColor: "#008080" },
  { segmentText: "威爾貝克 ☕️", segColor: "#70a494" },
];

function Food() {
  const [recommendedSnack, setRecommendedSnack] = useState("");
  const [recommendedDrink, setRecommendedDrink] = useState("");

  const resetRecommendations = () => {
    setRecommendedSnack("");
    setRecommendedDrink("");
  };

  return (
    <div className='foods-wrap'>
      <h1>Lunch Idea?</h1>

      <div className='food-wrap'>
        <div className='snack-wrap'>
          <SpinWheel
            segments={snacks}
            onFinished={(selectedSnack) => {
              setRecommendedSnack(selectedSnack);
            }}
            primaryColor='#008080'
            contrastColor='#ffffff'
            buttonText='Go'
            isOnlyOnce={false}
            size={180}
            upDuration={100}
            downDuration={600}
            fontFamily='Arial'
            arrowLocation='top'
            showTextOnSpin={false}
            isSpinSound={false}
          />
          <p className='show-food'>{recommendedSnack}</p>
        </div>

        <div className='drink-wrap'>
          <SpinWheel
            segments={drinks}
            onFinished={(selectedDrink) => {
              setRecommendedDrink(selectedDrink);
            }}
            primaryColor='#008080'
            contrastColor='#ffffff'
            buttonText='Go'
            isOnlyOnce={false}
            size={180}
            upDuration={100}
            downDuration={600}
            fontFamily='Arial'
            arrowLocation='top'
            showTextOnSpin={false}
            isSpinSound={false}
          />
          <p className='show-food'>{recommendedDrink}</p>
        </div>
      </div>
      <button className='reset-food-button' onClick={resetRecommendations}>
        Clear All Records
      </button>
    </div>
  );
}

export default Food;
