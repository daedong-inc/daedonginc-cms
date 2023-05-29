import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import { Container } from "@mui/material";
import ClientList from "./ClientList";

function Client() {
  return (
    <>
      <Helmet>
        <title>고객사 관리</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <ClientList />
      </Container>
    </>
  );
}

export default Client;
