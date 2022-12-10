import React, { useState } from "react";
import axios from "axios";

function Upload() {
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    console.log(fileImage)
    console.log(URL.createObjectURL(e.target.files[0]));
  };

  const registFileImage = async() => {
    const formData = new FormData()
    formData.append("file", fileImage);
    console.log(fileImage)
    const request = {
      fileImage : fileImage
    };
    
    formData.append("request", new Blob([JSON.stringify(request)], { type: "application/json" }));

    File.post("https://xxxp5s582m.execute-api.ap-northeast-2.amazonaws.com/upload/image", formData) 
  .then((res) => {
    if (res) alert("캐릭터 생성이 완료되었습니다.");
		else alert("캐릭터 생성에 실패했습니다.");
})

   /*await axios({
      method: "POST",
      url: `https://xxxp5s582m.execute-api.ap-northeast-2.amazonaws.com/upload/image`,
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
      },
      data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
    })*/
  }

  return (
    <>
      <h1>이미지</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <div>
                {fileImage && (
                  <img
                    alt="sample"
                    src={fileImage}
                    style={{ margin: "auto" }}
                  />
                )}
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage}
                  />

                  <div className="nft-title">
                    <label>NFT 제목</label>
                    <textarea onChange={(event) => setTitle(event.target.value)}></textarea>
                  </div>
                  <div className="nft-content">
                    <label>NFT 내용</label>
                    <textarea onChange={(event) => setContent(event.target.value)}></textarea>
                  </div>

                  <button
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      width: "55px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                    onClick={() => registFileImage()}
                  >
                    등록
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Upload;