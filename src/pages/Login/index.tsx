import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

// material-ui
import { Grid, Stack, Typography } from "@mui/material";

// project import
import AuthLogin from "./AuthLogin";
import AuthWrapper from "./AuthWrapper";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직 처리

    // 로그인이 성공하면 /products 페이지로 이동
    navigate("/products");
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h3">로그인</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
