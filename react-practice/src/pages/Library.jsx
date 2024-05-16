import React from "react";
import { useState, useEffect } from "react";
import Booklist from "./Booklist";

function Library() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(
        `https://api-sandbox.thekono.com/KPI2/book_lists/aycr/category_groups?language=zh-Hant`
      );
      const result = await response.json();
      setCategories(result.categories);
    }
    getCategories();
  }, []);

  return (
    <div className='library-wrap'>
      {categories.map(({ category }) => (
        <Booklist key={category} categoryId={category} />
      ))}
    </div>
  );
}

export default Library;
