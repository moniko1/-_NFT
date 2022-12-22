<template>
<div
    align="center"
    style="margin-top: 20px; margin-left: 20px; margin-right: 20px"
  >
    <div id="main-text">
      <h2 id="main-text-highlight">NFT 발행하기</h2>
    </div>
      <h3>NFT 발행을 위해서는 다음의 단계를 거쳐야 한다.</h3>
      <h4>1. 이미지 파일을 IPFS에 올려 해시 값을 얻어야 한다.</h4>
      <h4>2. 해시 값이 이미 NFT로 발행되었는지 유효성 검사가 필요하다.</h4>
      <h4>3. 유효성 검사가 끝난 해시 값은 ERC-721 토큰 발행시 사용한다.</h4>
    <div class="container">
      <input type="text" class="upload-name" value="이미지를 업로드 하세요" disabled>
      <label for="upload-file">파일선택</label>
      <input multiple @change="onInputImage()" id="upload-file" ref="image" type="file" accept="image/*">
    </div>
    <h4>{{text}}</h4>
    <div><a :href="url" target="_black">{{cid}}</a></div>
    <button v-if="cid" @click="copy()">{{buttontext}}</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  created() {
  },
  data(){
    return{
      cid:"",
      url: "https://ipfs.io/ipfs/",
      text:"",
      buttontext:"해시 값 복사하기",
    }
  },
  create(){
  },
  methods: {
    onInputImage(){
      this.Callimage();
    },
    async Callimage(){
      const upload_name = document.querySelector(".upload-name");
      upload_name.value = "해시 값 생성중"
      const image = this.$refs.image.files[0]
      let filedata = new FormData();
      filedata.append("image",image)
      console.log(filedata)
      //  const respone = await axios.post('https://xxxp5s582m.execute-api.ap-northeast-2.amazonaws.com/upload/test',filedata,{
      // headers: {
      //   'Content-Type': 'multipart/form-data'
      //   }
      // });
      //이 함수는 local proxy 통신에서 작동합니다.
      // const respone = await axios.post("/api/upload",filedata,{
      // headers: {
      //   'Content-Type': 'multipart/form-data;charset=utf8',
      //   }
      // });
      //이 함수는 aws와 직접 통신해보려합니다.
      const respone = await axios.post("https://pz9ucukztk.execute-api.ap-northeast-1.amazonaws.com/default/image",filedata,{
        headers: {
          'Content-Type': 'multipart/form-data;charset=utf8',
          }
        });
      console.log(respone)
      const result = await axios.get("https://cy2i3m8fz0.execute-api.ap-northeast-2.amazonaws.com/test?"+respone.data.cid);
      console.log(result);
      if(result.data){
        this.text="업로드한 이미지는 중복된 해시가 존재합니다."
      }
      else{
        this.text="해시값을 출력합니다."
      }
      this.cid=respone.data.cid
      this.url+=this.cid;
      upload_name.value = "해시 값 생성완료"
    },
    copy(){
      window.navigator.clipboard.writeText(this.cid);
      this.buttontext="복사 완료";  
    },
    proxyRequest() {
      axios.get("/api/getList")
      .then((res) => {
        console.log('proxyRequest res', res)
      })
      .catch((error) => {
        console.log('proxyRequest error', error)
      })
    }
  }
}
</script>

<style>
#main-text-highlight {
  background:linear-gradient(180deg, transparent 60%, #a2bd51 60%);
}
#main-text {
  float: center;
  max-width: 300px;
  height: 40px;
  margin: 10px 0 10px 0;
  font-size: 25px;
  /* background:linear-gradient(180deg, transparent 60%, yellow 60%); */
  font-family: "NanumBarunGothic";
}
button{
  border: 1px solid skyblue;
  background-color: rgba(255, 255, 255, 0);
}
.upload-name {
      display: inline-block;
      height: 40px;
      padding: 0 10px;
      vertical-align: middle;
      border: 1px solid #dddddd;
      width: 30%;
      color: #999999;
      border-radius: 5px;
    }
    .container label {
      display: inline-block;
      padding: 10px 20px;
      color: #fff;
      vertical-align: middle;
      background-color: rgba(0, 53, 109, 0.95);
      cursor: pointer;
      height: 20px;
      margin-left: 10px;
      border-radius: 5px;
    }
    .container input[type="file"] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
</style>