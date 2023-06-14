import PropTypes from "prop-types";

// material-ui
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

const AuthCard = ({ children, ...other }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: { xs: 400, lg: 475 },
        margin: { xs: 2.5, md: 3 },
        "& > *": {
          flexGrow: 1,
          flexBasis: "50%",
        },
      }}
    >
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
    </Card>
  );
};

AuthCard.propTypes = {
  children: PropTypes.node,
};

export default AuthCard;
