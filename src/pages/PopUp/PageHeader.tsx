import { Typography, Button, Grid } from "@mui/material";

import { NavLink as RouterLink } from "react-router-dom";

import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

function PageHeader() {
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
          component={RouterLink}
          to="/products/create"
        >
          팝업추가
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;