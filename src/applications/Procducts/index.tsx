import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import { Grid, Container } from "@mui/material";

import RecentOrders from "./RecentOrders";

function Product() {
  return (
    <>
      <Helmet>
        <title>제품관리1</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Grid>
        <Container></Container>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <RecentOrders />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

export default Product;
