import { Typography, Grid } from "@mui/material";

function PageHeader() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          고객사 관리
        </Typography>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default PageHeader;
