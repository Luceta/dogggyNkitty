import { imageUploadAPI } from "../api/api";

const imageUpload = async (files) => {
  const response = await imageUploadAPI(files);
  const result = await response.json();
  const imageSrc = result.filename;

  return imageSrc;
};

export default imageUpload;
