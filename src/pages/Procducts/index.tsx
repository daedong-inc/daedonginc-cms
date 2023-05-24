import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import { Grid, Container } from "@mui/material";

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
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Container maxWidth="xs">
            <CategoryList />
          </Container>
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
