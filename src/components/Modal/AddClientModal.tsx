import { FC, ReactNode, useState, useEffect, useRef } from "react";
import Modal from ".";
import {
  Box,
  TextField,
  Button,
  Card,
  CardMedia,
  DialogContentText,
  Typography,
} from "@mui/material";

interface AddNewClientModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
}

const AddNewClientModal: FC<AddNewClientModalProps> = ({
  title,
  open,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPreviewImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      setPreviewImage("");
    }
  };

  const resetContents = () => {
    setSelectedImage(null);
    setPreviewImage("");
    setName("");
  };

  const handleCloseAddNewClientModal = () => {
    onClose();
    resetContents();
  };

  return (
    <Modal title={title} open={open} onClose={handleCloseAddNewClientModal}>
      <Box mb={2}>
        <TextField
          label="고객사 이름"
          value={name}
          onChange={handleNameChange}
          fullWidth
        />
      </Box>
      {previewImage ? (
        <Box mb={2}>
          <Card>
            <CardMedia
              component="img"
              src={previewImage}
              alt="Preview"
              style={{ height: 200, objectFit: "contain" }}
            />
          </Card>
        </Box>
      ) : (
        <Box
          mb={2}
          sx={{
            width: "100%",
            height: 200,
            backgroundColor: "#eeeeee",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>이미지를 선택해주세요</span>
        </Box>
      )}

      <Box mb={2}>
        <input
          accept="image/*"
          id="image-upload"
          type="file"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <label htmlFor="image-upload">
          <Button variant="outlined" component="span">
            고객사 로고 이미지 추가하기
          </Button>
        </label>
        <Typography variant="subtitle2" gutterBottom>
          - 이미지 등록 시 용량이 파일당 ~MB를 넘을경우 자동으로 축소하여
          등록됩니다. 단, 자동축소하더라도 ~MB가 넘는 경우 업로드 할 수 없으므로
          용량 축소 후 다시 업로드 해주세요 <br /> - 이미지 사이즈는 ~px을
          권장합니다.
        </Typography>
      </Box>
    </Modal>
  );
};
export default AddNewClientModal;
