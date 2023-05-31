import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import { Container } from "@mui/material";
import PopUpList from "./PopUpList";

function PopUp() {
  return (
    <>
      <Helmet>
        <title>pop up 관리</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <PopUpList />
      </Container>
    </>
  );
}

export default PopUp;
