import { FC, ChangeEvent, useState } from "react";

import PropTypes from "prop-types";
import {
  Tooltip,
  Divider,
  Box,
  Card,
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
  useTheme,
  CardHeader,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";

import Label from "../../components/Label";
import { Product, ProductStatus } from "src/types/product";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import PreviewRoundedIcon from "@mui/icons-material/PreviewRounded";
import BulkActions from "./BulkActions";
import Search from "src/components/Search";

interface RecentOrdersTableProps {
  products: Product[];
}

interface Filters {
  status?: ProductStatus;
}

const getStatusLabel = (productStatus: ProductStatus): JSX.Element => {
  const map = {
    숨김: {
      text: "숨김",
      isHidden: true,
      color: "error",
    },
    공개: {
      text: "공개",
      isHidden: false,
      color: "success",
    },
  };

  const { text, color }: any = map[productStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (products: Product[], filters: Filters): Product[] => {
  return products.filter((products) => {
    let matches = true;

    if (filters.status && products.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  products: Product[],
  page: number,
  limit: number
): Product[] => {
  return products.slice(page * limit, page * limit + limit);
};

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const selectedBulkActions = selectedProducts.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [filters, setFilters] = useState<Filters>({
    status: null,
  });

  const statusOptions = [
    {
      id: "전체",
      name: "전체",
    },
    {
      id: "공개",
      name: "공개",
    },
    {
      id: "숨김",
      name: "숨김",
    },
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== "all") {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handleSelectAllProducts = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedProducts(
      event.target.checked ? products.map((product) => product.id) : []
    );
  };

  const handleSelectOneProduct = (
    event: ChangeEvent<HTMLInputElement>,
    productId: string
  ): void => {
    if (!selectedProducts.includes(productId)) {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    } else {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((id) => id !== productId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredProducts = applyFilters(products, filters);
  const paginatedProducts = applyPagination(filteredProducts, page, limit);
  const selectedSomeProducts =
    selectedProducts.length > 0 && selectedProducts.length < products.length;
  const selectedAllProducts = selectedProducts.length === products.length;
  const theme = useTheme();

  return (
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <CardHeader
          title={
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Typography variant="h4">제품목록</Typography>
              </Grid>
              <Grid item xs={9}>
                <Search />
              </Grid>
            </Grid>
          }
          action={
            <Box width={150} marginTop={1}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>공개여부</InputLabel>
                <Select
                  value={filters.status || "전체"}
                  onChange={handleStatusChange}
                  label="Status"
                  autoWidth
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllProducts}
                  indeterminate={selectedSomeProducts}
                  onChange={handleSelectAllProducts}
                />
              </TableCell>
              <TableCell>
                <Typography noWrap fontWeight={600}>
                  NO
                </Typography>
              </TableCell>
              <TableCell>
                <Typography noWrap fontWeight={600}>
                  제품명
                </Typography>
              </TableCell>
              <TableCell>
                <Typography noWrap fontWeight={600}>
                  사이즈
                </Typography>
              </TableCell>
              <TableCell>
                <Typography noWrap fontWeight={600}>
                  용량
                </Typography>
              </TableCell>
              <TableCell>
                <Typography noWrap fontWeight={600}>
                  소재
                </Typography>
              </TableCell>
              <TableCell>
                <Typography noWrap fontWeight={600}>
                  설명
                </Typography>
              </TableCell>
              <TableCell>
                <Typography noWrap fontWeight={600}>
                  대분류
                </Typography>
              </TableCell>
              <TableCell>
                <Typography noWrap fontWeight={600}>
                  중분류
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography noWrap fontWeight={600}>
                  등록일
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography noWrap fontWeight={600}>
                  공개여부
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography noWrap fontWeight={600}>
                  수정 / 삭제
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProducts.map((product) => {
              const isProductSelected = selectedProducts.includes(product.id);
              return (
                <TableRow hover key={product.id} selected={isProductSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isProductSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneProduct(event, product.id)
                      }
                      value={isProductSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {product.id}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary" noWrap>
                      {format(product.orderDate, "MMMM dd yyyy")}
                    </Typography> */}
                  </TableCell>
                  <TableCell>
                    <Box display="inline-flex" alignItems="center">
                      <img
                        src={`https://picsum.photos/40/40?random=${Math.random()}`} // 랜덤 이미지 URL에 랜덤한 쿼리스트링을 추가하여 매번 다른 이미지를 가져옴
                        alt="제품 이미지"
                        style={{ width: 40, height: 40, marginRight: 8 }}
                      />
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {product.name}
                      </Typography>
                      <Tooltip title="상세페이지 보기" arrow>
                        <IconButton
                          sx={{
                            "&:hover": {
                              background: theme.colors.primary.lighter,
                            },
                            color: theme.palette.primary.light,
                          }}
                          color="inherit"
                          size="small"
                        >
                          <PreviewRoundedIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {product.size}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {product.volume}ml
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {product.partMaterial}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="normal"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {product.description}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {/* {product.category.name} */}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {/* {product.category.children[0]} */}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {product.uploadDate}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {getStatusLabel(product.status)}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="수정하기" arrow>
                      <IconButton
                        sx={{
                          "&:hover": {
                            background: theme.colors.primary.lighter,
                          },
                          color: theme.palette.primary.main,
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="삭제하기" arrow>
                      <IconButton
                        sx={{
                          "&:hover": { background: theme.colors.error.lighter },
                          color: theme.palette.error.main,
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredProducts.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 30, 50]}
        />
      </Box>
    </Card>
  );
};

RecentOrdersTable.propTypes = {
  products: PropTypes.array.isRequired,
};

RecentOrdersTable.defaultProps = {
  products: [],
};

export default RecentOrdersTable;
