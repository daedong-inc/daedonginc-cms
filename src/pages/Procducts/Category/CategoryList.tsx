import { Card } from "@mui/material";
import { MainCategory } from "src/types/product";
import CategoryTable from "./CategoryTable";

function ProductsList() {
  const categories: MainCategory[] = [
    {
      id: 0,
      name: "대분류1",
      level: "레벨?",
      children: [
        { id: 1, name: "중분류1", level: "레벨?" },
        { id: 2, name: "중분류2", level: "레벨?" },
        { id: 3, name: "중분류3", level: "레벨?" },
      ],
    },
    {
      id: 5,
      name: "대분류2",
      level: "레벨?",
      children: [
        { id: 6, name: "중분류5", level: "레벨?" },
        { id: 7, name: "중분류6", level: "레벨?" },
        { id: 8, name: "중분류7", level: "레벨?" },
      ],
    },
  ];

  return (
    <Card>
      <CategoryTable categories={categories} />
    </Card>
  );
}

export default ProductsList;
