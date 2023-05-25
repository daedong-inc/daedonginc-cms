export type ProductStatus = "숨김" | "공개";

export interface Category {
  id: number;
  name: "string";
  level: "string";
}

export type SubCategory = Category;

export interface MainCategory extends Category {
  children?: SubCategory[];
}

export interface Product {
  _id: number;
  id: string;
  imageUrl: string;
  name: string;
  size: string;
  volume: number;
  partMaterial: string;
  description: string;
  //등록일
  category: MainCategory;
  isHidden: boolean;
}

// export interface Product {
//   id: string;
//   status: ProductStatus;
//   productDetails: string;
//   uploadDate: string;
//   productID: string;
//   productName: string;
//   MainCategory: string;
//   SubCategory: string;

// }
