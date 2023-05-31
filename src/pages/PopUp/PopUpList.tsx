import { Card } from "@mui/material";
import { PopUp } from "src/types/popup";
import PopUpTable from "./PopUpTable";

const PopUpList = () => {
  const popUps: PopUp[] = [
    {
      id: "1",
      name: "팝업1",
      imageUrl: "https://picsum.photos/300/150?random=${Math.random()}",
      description: "어쩌구한 팝업",
      uploadDate: "2023-01-01",
      status: "숨김",
    },
    {
      id: "2",
      name: "팝업2",
      imageUrl: "https://picsum.photos/300/150?random=${Math.random()}",
      description: "저쩌구한 팝업",
      uploadDate: "2023-01-02",
      status: "공개",
    },
  ];

  return <PopUpTable popUps={popUps} />;
};

export default PopUpList;
