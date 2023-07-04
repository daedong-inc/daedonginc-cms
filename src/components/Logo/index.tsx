import { Box, styled, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import LogoSvg from "src/assets/대동로고.svg";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 200, height = 100 }) => {
  return (
    <LogoWrapper to="/">
      <img src={LogoSvg} alt="Logo" style={{ width, height }} />
    </LogoWrapper>
  );
};
export default Logo;

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);
