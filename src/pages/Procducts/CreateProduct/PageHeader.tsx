import { Typography, Button, Grid, useTheme } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Search from "../../components/Search";

function PageHeader() {
  const theme = useTheme();

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography
          variant="h3"
          component="h3"
          gutterBottom
          display="flex"
          alignItems="center"
        >
          제품관리
        </Typography>
      </Grid>

      <Grid item>
        <RouterLink
          to="/products"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          제품관리
        </RouterLink>
        <a> / </a>
        <Typography
          variant="subtitle1"
          component="span"
          color={theme.palette.primary.main}
        >
          제품추가
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
