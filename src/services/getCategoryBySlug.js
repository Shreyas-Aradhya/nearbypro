import axios from "../utils/axios";

const getCategoryBySlug = async (slug) => {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `/category/listCategory/slug`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { slug },
    };
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getCategoryBySlug;
