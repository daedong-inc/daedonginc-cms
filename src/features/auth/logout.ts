// import type { QueryClient } from '@tanstack/react-query'

// import { CACHE_KEYS } from 'services/cacheKeys'
import { destroyTokensClientSide } from "utils/auth";
import { requestLogout } from "src/services/Api/user";
// export const logoutAction = (client: QueryClient) => {
// client.invalidateQueries(CACHE_KEYS.me)
export const logoutAction = () => {
  requestLogout();

  destroyTokensClientSide();
  window.location.href = "/";
};
