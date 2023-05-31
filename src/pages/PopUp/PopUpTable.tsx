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
} from "@mui/material";

import Label from "../../components/Label";
import { PopUp, PopUpStatus } from "src/types/popup";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import BulkActions from "./BulkActions";

interface PopUpTableProps {
  popUps: PopUp[];
}

interface Filters {
  status?: PopUpStatus;
}

const getStatusLabel = (popUpStatus: PopUpStatus): JSX.Element => {
  const map = {
    숨김: {
      text: "숨김",
      color: "error",
    },
    공개: {
      text: "공개",
      color: "success",
    },
  };

  const { text, color }: any = map[popUpStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (popUps: PopUp[], filters: Filters): PopUp[] => {
  return popUps.filter((popUps) => {
    let matches = true;

    if (filters.status && popUps.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  popUp: PopUp[],
  page: number,
  limit: number
): PopUp[] => {
  return popUp.slice(page * limit, page * limit + limit);
};

const PopUpTable: FC<PopUpTableProps> = ({ popUps }) => {
  const [selectedPopUps, setSelectedPopUps] = useState<string[]>([]);
  const selectedBulkActions = selectedPopUps.length > 0;
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

  const handleSelectAllPopUps = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedPopUps(
      event.target.checked ? popUps.map((popUp) => popUp.id) : []
    );
  };

  const handleSelectOnePopUp = (
    event: ChangeEvent<HTMLInputElement>,
    popUpId: string
  ): void => {
    if (!selectedPopUps.includes(popUpId)) {
      setSelectedPopUps((prevSelected) => [...prevSelected, popUpId]);
    } else {
      setSelectedPopUps((prevSelected) =>
        prevSelected.filter((id) => id !== popUpId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredPopUps = applyFilters(popUps, filters);
  const paginatedPopUps = applyPagination(filteredPopUps, page, limit);
  const selectedSomePopUps =
    selectedPopUps.length > 0 && selectedPopUps.length < popUps.length;
  const selectedAllPopUps = selectedPopUps.length === popUps.length;
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
          action={
            <Box width={150}>
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
          title="팝업목록"
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
                  checked={selectedAllPopUps}
                  indeterminate={selectedSomePopUps}
                  onChange={handleSelectAllPopUps}
                />
              </TableCell>
              <TableCell>
                <Typography noWrap fontWeight={600}>
                  NO
                </Typography>
              </TableCell>
              <TableCell>
                <Typography noWrap fontWeight={600}>
                  팝업이름
                </Typography>
              </TableCell>
              <TableCell>
                <Typography noWrap fontWeight={600}>
                  설명
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
            {paginatedPopUps.map((popUp) => {
              const isPopUpSelected = selectedPopUps.includes(popUp.id);
              return (
                <TableRow hover key={popUp.id} selected={isPopUpSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isPopUpSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOnePopUp(event, popUp.id)
                      }
                      value={isPopUpSelected}
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
                      {popUp.id}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary" noWrap>
                      {format(popUp.orderDate, "MMMM dd yyyy")}
                    </Typography> */}
                  </TableCell>
                  <TableCell>
                    <Box display="inline-flex" alignItems="center">
                      <img
                        src={`https://picsum.photos/40/40?random=${Math.random()}`} // 랜덤 이미지 URL에 랜덤한 쿼리스트링을 추가하여 매번 다른 이미지를 가져옴
                        alt="팝업 이미지"
                        style={{ width: 40, height: 40, marginRight: 8 }}
                      />
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {popUp.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="normal"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {popUp.description}
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
                      {popUp.uploadDate}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {getStatusLabel(popUp.status)}
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
          count={filteredPopUps.length}
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

PopUpTable.propTypes = {
  popUps: PropTypes.array.isRequired,
};

PopUpTable.defaultProps = {
  popUps: [],
};

export default PopUpTable;
