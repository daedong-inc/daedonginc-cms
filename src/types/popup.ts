export interface PopUp {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  //등록일
  uploadDate: string;
  isHidden?: boolean;
  status: PopUpStatus;
}

export type PopUpStatus = "숨김" | "공개";
