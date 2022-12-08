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
    console.log(URL.createObjectURL(e.target.files[0]));
  };

  /*const registFileImage = () => {
    axios.post('http://localhost:3001/game/getData', {
            fileImage : fileImage,
            content : content,
            title : title,
      }).then((result)=>{
        //setInfo(result.data);
        console.log(result.data.tier);
        if(result.data.length!=0){
          alert('');
          //navigate("");
        }
      })

  }*/

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
                    /*onClick={() => registFileImage()}*/
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