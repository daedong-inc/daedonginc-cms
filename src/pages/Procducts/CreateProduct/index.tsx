import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import CreateProductCard from "./createCard";

import {
  Tooltip,
  Divider,
  Box,
  Card,
  CardBody,
  Grid,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Typography,
  TextField,
  useTheme,
  CardHeader,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Button,
  CardContent,
} from "@mui/material";

import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DoneTwoToneIcon from "@mui/icons-material/DoneTwoTone";
import Text from "src/components/Text";
import Label from "src/components/Label";

const CreateProduct = () => {
  return (
    <>
      <Helmet>
        <title>제품 추가</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <CreateProductCard />
        </Container>
      </Box>
    </>
  );
};

export default CreateProduct;
