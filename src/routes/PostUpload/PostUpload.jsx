import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import StatusBar from "../../components/Statusbar/Statusbar";
import TopUploadNav from "../../components/shared/TopUploadNav";
import PostImageList from "../PostImageList/PostImageList";
import imageUpload from "../../utils/upload";
import useInput from "../../components/hooks/useInput";
import { uploadPostImageAPI } from "../../api/api";

function PostUpload({ history, avatar }) {
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
    <>
      <StatusBar />
      <TopUploadNav handleClick={postUpload} setButton={button}>
        업로드
      </TopUploadNav>
      <Container>
        <h2 className="ir">게시글 작성 페이지</h2>
        <img src={avatar} alt="user의 프로필 사진" className="user-profile-img" />
        <article>
          <form className="post-form">
            <textarea
              name="text"
              placeholder="텍스트 입력하기"
              className="post-text"
              onChange={(ev) => postText.onChange(ev)}
            />
            <label htmlFor="imageUpload" className="img-upload">
              <input type="file" accept="image/*" id="imageUpload" className="ir" onChange={handleImage} />
            </label>
          </form>
          <PostImageList images={images} imageCount={imageCount} />
        </article>
      </Container>
    </>
  );
}

const Container = styled.main`
  display: flex;
  padding: 20px 0 20px 16px;
  min-width: 390px;
  width: 100%;
  height: 100%;

  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  article {
    position: relative;
    min-width: 300px;
    width: 100%;
    padding-right: 16px;
  }

  .user-profile-img {
    width: 42px;
    height: 42px;
    margin-right: 12px;
    border-radius: 50%;
  }

  .post-form {
    width: 100%;
    padding-top: 12px;
  }

  .post-text {
    width: 100%;
    height: 72px;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    outline: none;
    border: none;
    padding: 0;
    resize: none;
  }

  .img-upload {
    position: fixed;
    bottom: 50px;
    right: 16px;
    width: 50px;
    height: 50px;
    background-image: url("/assets/upload-file@brown.png");
    background-size: cover;
    cursor: pointer;
  }
`;

const mapStateToProps = (state) => {
  return {
    avatar: state.user.image,
  };
};

export default connect(mapStateToProps, null)(PostUpload);
