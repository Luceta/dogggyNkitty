import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PostUpload from "./PostUpload";
import useInput from "../../components/hooks/useInput";
import imageUpload from "../../utils/upload";
import { uploadPostImageAPI } from "../../api/api";

function PostUploadContainer({ history, avatar }) {
  const [images, SetImages] = useState([]);
  const [uploadImg, setUploadImg] = useState("");
  const [imageCount, setImageCount] = useState(0);
  const [button, setButton] = useState(true);
  const postText = useInput("");

  const isButtonActive = () => {
    if (postText.value.length > 0) {
      setButton(false);
    }
  };

  const handleImage = async (ev) => {
    const { files } = ev.target;
    const image = await imageUpload(files);
    const imageURL = `http://146.56.183.55:5050/${image}`;

    setUploadImg(imageURL);
    setImageCount(imageCount + 1);
  };

  const imageCountValidation = () => {
    let status = false;
    if (imageCount > 3) {
      status = true;
    }
    return status;
  };

  const postUpload = async (ev) => {
    ev.preventDefault();

    const data = {
      content: postText.value,
      image: `${images}`,
    };
    try {
      const response = await uploadPostImageAPI(data);
      await response.json();
      history.goBack();
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    const UploadImages = async () => {
      if (uploadImg === "") {
        return;
      }
      if (!imageCountValidation()) {
        SetImages([...images, uploadImg]);
      }
    };

    UploadImages();
  }, [imageCount]);

  useEffect(() => {
    const maxCount = imageCountValidation();

    if (maxCount) {
      alert("이미지는 3개 까지만 가능합니다.");
    }
  }, [imageCount]);

  useEffect(() => {
    isButtonActive();
  }, [postText]);

  return (
    <PostUpload
      avatar={avatar}
      button={button}
      onClick={postUpload}
      onTextChange={postText}
      images={images}
      imageCount={imageCount}
      handleImage={handleImage}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    avatar: state.user.image,
  };
};

export default connect(mapStateToProps, null)(PostUploadContainer);
