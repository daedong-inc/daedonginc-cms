import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "src/services/Api";
import Cookies from "js-cookie";
import { AxiosError } from "axios";

// material-ui
import {
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// assets
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const AuthLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const handleSubmitLogin = async (
    values: { name: string; password: string },
    { setErrors, setStatus, setSubmitting }: any
  ) => {
    try {
      const res = await Api.post("api/v1/users/login", values, false, true);
      if (res.status === 200) {
        const token = res.data.data.token;
        Cookies.set("accessToken", token.accessToken, {
          expires: token.accessTokenAge,
        });

        Cookies.set("refreshToken", token.refreshToken, {
          expires: token.refreshTokenAge,
        });
        navigate("/dashboards");
      }
      setStatus({ success: true });
      setSubmitting(false);
    } catch (err: AxiosError) {
      setStatus({ success: false });
      setErrors({ submit: err.response?.data.reason });
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "string",
          password: "string",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(255).required("아이디를 입력해주세요."),
          password: Yup.string().max(255).required("패스워드를 입력해주세요."),
        })}
        onSubmit={handleSubmitLogin}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel>ID</InputLabel>
                  <OutlinedInput
                    id="id-name"
                    value={values.name}
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="아이디를 입력해주세요."
                    fullWidth
                    error={Boolean(touched.name && errors.name)}
                  />
                  {touched.name && errors.name && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-email-login"
                    >
                      {errors.name}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="패스워드를 입력해주세요."
                  />
                  {touched.password && errors.password && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  로그인
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
