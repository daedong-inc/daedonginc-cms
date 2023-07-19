import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { Category } from "src/types/product";
import CategoryTable from "./CategoryTable";
import { getCompleteCategory } from "src/services/category";

function ProductsList() {
  const [categories, setCategories] = useState([]);
  
  async function getCategory() {
    try {
      const res = await getCompleteCategory();
      setCategories(res);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Card>
      <CategoryTable categories={categories} />
    </Card>
  );
}

export default ProductsList;
