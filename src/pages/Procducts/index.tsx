import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import { Grid, Container, Button, Box } from "@mui/material";

import ProductsList from "./ProductsList";
import CategoryList from "./Category/CategoryList";

function Product() {
  return (
    <>
      <Helmet>
        <title>제품관리</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      {/* <Grid container spacing={2} alignItems="center">
        <Grid item xs={2} />
        <Grid item xs={9} sx={{ marginLeft: "16px" }}>
          <Search />
        </Grid>
      </Grid> */}
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box sx={{ minWidth: 150, marginLeft: 5 }}>
            <CategoryList />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12}>
                <ProductsList />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default Product;
