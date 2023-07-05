import Cookies from "js-cookie";

import { AccessToken, RefreshToken } from "constants/auth";

export const isAuthenticated = () => {
  const loggedInUser = Cookies.get("accessToken");
  return !!loggedInUser;
};

export const destroyTokensClientSide = () => {
  Cookies.remove(RefreshToken);
  Cookies.remove(AccessToken);
};
