import * as Api from "src/services/Api";

// export const getCompleteCategory = async () => {
//   return Api.get("categories");
// };

export const getCompleteCategory = async () => {
  try {
    const res = await Api.get("categories");
    if (res.status === 200) {
      console.log(res.data.data);
      return res.data.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
