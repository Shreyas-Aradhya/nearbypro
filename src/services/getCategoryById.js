import axios from "../utils/axios";

const getCategoryById = async (id) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `/category/listCategory/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getCategoryById;
