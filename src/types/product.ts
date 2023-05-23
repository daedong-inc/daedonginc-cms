export type ProductStatus = "숨김" | "공개";

export type subCategory = string;

export type mainCategory = {
  id: number;
  name: "string";
  level: "string";
  children: subCategory[];
};


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
  category: mainCategory;
  isHidden: boolean;
}

// export interface Product {
//   id: string;
//   status: ProductStatus;
//   productDetails: string;
//   uploadDate: string;
//   productID: string;
//   productName: string;
//   mainCategory: string;
//   subCategory: string;

// }