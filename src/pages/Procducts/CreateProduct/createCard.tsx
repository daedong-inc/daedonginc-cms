import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import Label from "src/components/Label";

const states = [
  {
    value: "대분류",
    label: "대분류",
  },
  {
    value: "대분류1",
    label: "대분류1",
  },
  {
    value: "대분류2",
    label: "대분류2",
  },
  {
    value: "대분류3",
    label: "대분류3",
  },
  {
    value: "대분류4",
    label: "대분류4",
  },
];

const CreateProductCard = () => {
  const [values, setValues] = useState({
    mainCategory: "",
    subCategory: "",
    name: "",
    size: "",
    volume: "",
    partMaterial: "",
    description: "",
    isHidden: true,
  });

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader title="새제품 추가" />
        <Divider />
        <CardContent>
          <Box sx={{ m: 4 }} alignItems="center">
            <Grid container spacing={1} alignItems="center">
              <Grid xs={6} md={4} sx={{ pb: 2 }}>
                <Typography>대분류 : </Typography>
              </Grid>
              <Grid xs={6} md={8} sx={{ pb: 2 }}>
                <TextField
                  fullWidth
                  name="mainCategory"
                  onChange={handleChange}
                  required
                  select
                  size="small"
                  SelectProps={{ native: true }}
                  value={values.mainCategory}
                >
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={6} md={4} sx={{ pb: 2 }}>
                <Typography>중분류 : </Typography>
              </Grid>
              <Grid xs={6} md={8} sx={{ pb: 2 }}>
                <TextField
                  fullWidth
                  name="subCategory"
                  onChange={handleChange}
                  required
                  select
                  size="small"
                  SelectProps={{ native: true }}
                  value={values.subCategory}
                >
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={6} md={4} sx={{ pb: 2 }}>
                <Typography>제품명 : </Typography>
              </Grid>
              <Grid xs={6} md={8} sx={{ pb: 2 }}>
                <TextField
                  fullWidth
                  name="name"
                  onChange={handleChange}
                  required
                  size="small"
                  placeholder="제품명"
                  value={values.name}
                />
              </Grid>
              <Grid xs={6} md={4} sx={{ pb: 2 }}>
                <Typography>사이즈 : </Typography>
              </Grid>
              <Grid xs={6} md={8} sx={{ pb: 2 }}>
                <TextField
                  fullWidth
                  name="size"
                  onChange={handleChange}
                  required
                  value={values.size}
                  size="small"
                  placeholder="사이즈"
                  inputProps={{ pattern: "[0-9]*" }}
                />
              </Grid>
              <Grid xs={6} md={4} sx={{ pb: 2 }}>
                <Typography>용량 : </Typography>
              </Grid>
              <Grid xs={6} md={8} sx={{ pb: 2 }}>
                <TextField
                  fullWidth
                  name="volume"
                  onChange={handleChange}
                  required
                  value={values.volume}
                  size="small"
                  placeholder="용량"
                />
              </Grid>
              <Grid xs={6} md={4} sx={{ pb: 2 }}>
                <Typography>소재 : </Typography>
              </Grid>
              <Grid xs={6} md={8} sx={{ pb: 2 }}>
                <TextField
                  fullWidth
                  name="partMaterial"
                  onChange={handleChange}
                  required
                  value={values.partMaterial}
                  size="small"
                  placeholder="소재"
                  inputProps={{ pattern: "[0-9]*" }}
                />
              </Grid>
              <Grid xs={6} md={4} sx={{ pb: 2 }}>
                <Typography>설명 : </Typography>
              </Grid>
              <Grid xs={6} md={8} sx={{ pb: 2 }}>
                <TextField
                  fullWidth
                  name="description"
                  onChange={handleChange}
                  required
                  value={values.description}
                  size="small"
                  placeholder="상품설명"
                  multiline
                  rows={4}
                  inputProps={{ pattern: "[0-9]*" }}
                />
              </Grid>
              <Grid xs={6} md={4} sx={{ pb: 2 }}>
                <Typography>공개여부 : </Typography>
              </Grid>
              <Grid xs={6} md={8} sx={{ pb: 2 }}>
                <TextField
                  fullWidth
                  name="isHidden"
                  onChange={handleChange}
                  required
                  select
                  size="small"
                  SelectProps={{ native: true }}
                  value={values.isHidden}
                >
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">저장하기</Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default CreateProductCard;
