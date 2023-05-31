import { FC, ReactNode } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
  title: string;
}

const Modal: FC<ModalProps> = ({ open, onClose, title, children }) => {
  const handleSave = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ style: { width: 500 } }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <DialogTitle variant="h3">{title}</DialogTitle>
        <CloseIcon
          onClick={onClose}
          style={{ cursor: "pointer", marginRight: "10px" }}
        />
      </Box>
      <Divider />
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          저장
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
