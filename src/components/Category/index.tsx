import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import Pagetit
import { Grid, Container } from "@mui/material";

function Categories() {
  return (
    <>
      <Helmet>
        <title></title>
      </Helmet>
      <PageTitleWrapper>{/* <PageHeader /> */}</PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Categories;
