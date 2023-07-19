import Cookies from "js-cookie";
import { AccessToken, RefreshToken } from "src/constants/auth";

export const isAuthenticated = () => {
  const loggedInUser = Cookies.get("accessToken");
  return !!loggedInUser;
};

export const destroyTokensClientSide = () => {
  Cookies.remove(RefreshToken);
  Cookies.remove(AccessToken);
};
