import { Card } from "@mui/material";
import { Product } from "src/types/product";
import RecentOrdersTable from "./RecentOrdersTable";

function ProductsList() {
  const products: Product[] = [
    {
      _id: "1",
      id: "VUVX709ET7BY",
      imageUrl: "",
      name: "립스틱",
      size: "70*70",
      volume: 30,
      partMaterial: "플라스틱",
      description: "설명이 블라블라짱",
      status: "공개",
      uploadDate: "2023-03-11",
      mainCategory: "화장품",
      subCategory: "용기",
    },
    {
      _id: "2",
      id: "VKDKJFWDE032",
      imageUrl: "",
      name: "마스카라",
      size: "70*70",
      volume: 10,
      partMaterial: "유리",
      description: "설명이 블라블라짱",
      status: "숨김",
      uploadDate: "2023-03-11",
      mainCategory: "화장품",
      subCategory: "용기",
    },
  ];

  return (
    <Card>
      <RecentOrdersTable products={products} />
    </Card>
  );
}

export default ProductsList;
