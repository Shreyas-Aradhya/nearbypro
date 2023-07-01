import axios from "../utils/axios";

const s3ImageUpload = async (file) => {
  try {
    let data = new FormData();
    data.append("file", file);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/s3/signedUrl",
      headers: {
        "Content-Type": `multipart/form-data`,
      },
      data: data,
    };
    const response = await axios.request(config);
    const { data: url } = response.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};

export default s3ImageUpload;
