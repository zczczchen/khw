import React from "react";
import { useState, useEffect } from "react";
import Booklist from "./Booklist";
import "../css/library.css";

function Library() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(
        `https://api-sandbox.thekono.com/KPI2/book_lists/aycr/category_groups?language=zh-Hant`
      );
      const result = await response.json();

      let chineseLibrary;

      for (let i = 0; i < result.length; i++) {
        if (result[i].id === "chinese") {
          chineseLibrary = result[i];
        }
      }

      setCategories(chineseLibrary.categories);
    }
    getCategories();
  }, []);

  return (
    <div className='libraries-wrap'>
      {categories.map((category) => {
        return <Booklist key={category.id} category={category} />;
      })}
    </div>
  );
}

export default Library;
