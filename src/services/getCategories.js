import axios from "../utils/axios";

const getCategories = async (offset = 0, limit = 11) => {
  try {
    let data = JSON.stringify({
      offset: offset,
      limit: limit,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/category/listCategory",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const response = await axios.request(config);
    const { categories } = response.data;
    return categories;
  } catch (error) {
    console.log(error);
  }
};

export default getCategories;
