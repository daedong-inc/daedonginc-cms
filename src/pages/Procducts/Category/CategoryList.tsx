import { Card } from "@mui/material";
import { mainCategory } from "src/types/product";
import CategoryTable from "./CategoryTable";

function ProductsList() {
  const categories: mainCategory[] = [
    {
      id: 0,
      name: "대분류",
      level: "레벨?",
      children: ["중분류1", "중분류2", "중분류3"],
    },
  ];

  return (
    <Card>
      <CategoryTable categories={categories} />
    </Card>
  );
}

export default ProductsList;
