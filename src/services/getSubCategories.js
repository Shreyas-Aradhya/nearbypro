import axios from "../utils/axios";

const getSubCategories = async () => {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/category/listSubCategory",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.request(config);
    const { categories } = response.data;
    return categories;
  } catch (error) {
    console.log(error);
  }
};

export default getSubCategories;
