import { useState } from "react";
import { Typography, Button, Grid } from "@mui/material";

import AddNewPopUpModal from "src/components/Modal/AddPopUpModal";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

function PageHeader() {
  const [OpenAddNewPopUpModal, setOpenAddNewPopUpModal] = useState(false);
  const handleOpenAddNewPopUpModal = () => {
    setOpenAddNewPopUpModal(true);
  };
  const handleCloseAddNewPopUpModal = () => {
    setOpenAddNewPopUpModal(false);
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          팝업관리
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={handleOpenAddNewPopUpModal}
        >
          팝업추가
        </Button>
        <AddNewPopUpModal
          title="새 팝업 추가"
          open={OpenAddNewPopUpModal}
          onClose={handleCloseAddNewPopUpModal}
        />
      </Grid>
    </Grid>
  );
}

export default PageHeader;
