import React from "react";
import { useState, useEffect } from "react";
import "../css/food.css";

const snacks = [
  "涼麵 🥒 ",
  "乾拌麵 🌶️",
  "生魚飯 🍣",
  "烤餅 🥙",
  "漢堡 🍔",
  "雞肉飯 🐓",
  "滷味 🍢",
  "水餃 🥟",
  "早午餐 🍳",
  "湯麵 🍜",
  "咖哩 🍛",
  "越式 🇻🇳",
  "自助餐 🍱",
  "健康餐盒 🥗",
  "泰式 🇹🇭",
  "義大利麵 🍝",
  "韓式 🇰🇷",
];
const drinks = [
  "坪林手 🌱",
  "50嵐 🧋",
  "再睡5分鐘 🦥",
  "烏弄 🫖",
  "得正 🉐",
  "五桐號 5️⃣",
  "龜記 🐢",
  "一沐日 🎋",
  "一手私藏 🥤",
  "鶴茶樓 🦩",
  "麻古 🥁",
  "可不可 🉑",
  "天仁茗茶 🍵",
  "威爾貝克 ☕️",
  "白開水 💧",
];

function Food() {
  const [recommendedSnack, setRecommendedSnack] = useState("");
  const [recommendedDrink, setRecommendedDrink] = useState("");
  const [recentSnacks, setRecentSnacks] = useState([]);
  const [recentDrinks, setRecentDrinks] = useState([]);
  const MAX_RECENT_ITEMS = 2;

  useEffect(() => {
    try {
      const savedSnacks = JSON.parse(localStorage.getItem("recentSnacks"));
      const savedDrinks = JSON.parse(localStorage.getItem("recentDrinks"));
      if (savedSnacks) {
        setRecentSnacks(savedSnacks);
      }
      if (savedDrinks) {
        setRecentDrinks(savedDrinks);
      }
    } catch (error) {
      console.error("Failed to load recent items from localStorage", error);
    }
  }, []);

  const getRandomSnack = () => {
    const randomIndex = Math.floor(Math.random() * snacks.length);
    const snack = snacks[randomIndex];
    setRecommendedSnack(snack);
    updateRecentSnacks(snack);
  };

  const getRandomDrink = () => {
    const randomIndex = Math.floor(Math.random() * drinks.length);
    const drink = drinks[randomIndex];
    setRecommendedDrink(drink);
    updateRecentDrinks(drink);
  };

  const updateRecentSnacks = (snack) => {
    const updatedSnacks = [
      snack,
      ...recentSnacks.filter((item) => item !== snack),
    ].slice(0, MAX_RECENT_ITEMS);
    setRecentSnacks(updatedSnacks);
    localStorage.setItem("recentSnacks", JSON.stringify(updatedSnacks));
  };

  const updateRecentDrinks = (drink) => {
    const updatedDrinks = [
      drink,
      ...recentDrinks.filter((item) => item !== drink),
    ].slice(0, MAX_RECENT_ITEMS);
    setRecentDrinks(updatedDrinks);
    localStorage.setItem("recentDrinks", JSON.stringify(updatedDrinks));
  };

  const resetRecommendations = () => {
    setRecommendedSnack("");
    setRecommendedDrink("");
    setRecentSnacks([]);
    setRecentDrinks([]);
    localStorage.removeItem("recentSnacks");
    localStorage.removeItem("recentDrinks");
  };

  return (
    <div className='foods-wrap'>
      <h1>Lunch Idea?</h1>

      <div className='food-wrap'>
        <div className='snack-wrap'>
          <button className='choice-food-button' onClick={getRandomSnack}>
            ✨ Food Inspiration ✨
          </button>
          <p className='show-food'>{recommendedSnack}</p>
          <div className='recent-food-tags'>
            {recentSnacks.map((snack, index) => (
              <span key={index} className='recent-food-tag'>
                {snack}
              </span>
            ))}
          </div>
        </div>

        <div className='drink-wrap'>
          <button className='choice-food-button' onClick={getRandomDrink}>
            ✨ Drink Inspiration ✨
          </button>
          <p className='show-food'>{recommendedDrink}</p>
          <div className='recent-food-tags'>
            {recentDrinks.map((drink, index) => (
              <span key={index} className='recent-food-tag'>
                {drink}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button className='reset-food-button' onClick={resetRecommendations}>
        Clear All Records
      </button>
    </div>
  );
}

export default Food;
