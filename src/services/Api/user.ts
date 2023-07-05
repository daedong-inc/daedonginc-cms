import axios from "axios";
import { User, UserLoginForm } from "types/user";
import * as Api from "src/services/Api";

// export async function requestLogin(loginInfo: UserLoginForm) {
//   const bodyData = JSON.stringify(loginInfo);
//   try {
//     const { data } = await axiosInstance.post(`user/login`, bodyData, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return data;
//   } catch (err) {
//     console.log(err);
//     if (axios.isAxiosError(err) && err?.response?.status === 401) {
//       alert("이메일 또는 비밀번호가 일치하지 않습니다.");
//     }
//   }
// }

export async function requestLogout() {
  try {
    const res = await Api.post("/users/logout", null);
    return res.data;
  } catch (err) {
    // if (axios.isAxiosError(err) && err?.response?.status === 401) {
    //   alert("이메일 또는 비밀번호가 일치하지 않습니다.");
    // }
    console.log(err);
    alert("정상적으로 로그아웃되지 않았습니다. 다시 시도해주세요.");
  }
}
