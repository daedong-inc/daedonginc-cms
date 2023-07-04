import Cookies from "js-cookie";

export const isAuthenticated = () => {
  const loggedInUser = Cookies.get("accessToken");
  return !!loggedInUser;
};
