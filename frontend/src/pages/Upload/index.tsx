import React,{useEffect, useState} from "react";
import Information from '../../components/Infomation'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import './style.css'
import { Preview } from "@mui/icons-material";
import ImageUpload from "../../components/ImageUpload"
import Pagenation from "../../components/Pagenation/Pagenation"
import { Box as ChakraBox } from "@chakra-ui/react";


export default function Home() {
  let [imageFile,setImageFile]=useState();


  const onChangeImage = (event: any) => {
    setImageFile(event.target.files);
  };
  const sendImage = (event: any)=>{
    const formdata=new FormData();
    formdata.append('uploadImage', imageFile![0]);
    const config ={
      Headers:{
        'content-type':'multipart/form-data',
      },
      //axios를 통해 이미지 전달할자리
    };
  }


  useEffect(()=>{ //이미지 프리뷰를 위해 useEffect사용
    preview();
    console.log(imageFile)
    return ()=> {preview()};
  });

  const preview=()=>{ //이미지 프리뷰를 위한 함수
    if(!imageFile) return false;

    const imgEl=document.querySelector(".previewimg") as HTMLElement;

    const reader = new FileReader();
    
    reader.readAsDataURL(imageFile[0]);

    reader.onload=()=>
      (imgEl.style.backgroundImage=`url(${reader.result})`);
    
  }
  return (
    <div className="page">
      {imageFile 
        ?
        <div className="UploadImageBox">
          <div className="previewimg"/>
          <div style={{ width:"20rem"}}>
            <Button variant="contained" component="label" style={{ marginRight:"3rem"}}>
                  ANOTHER
                  <input hidden accept="image/*" multiple type="file" onChange={onChangeImage} />
            </Button>
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendImage}>
              Send
            </Button>
            <ChakraBox paddingTop="20px">
              <Pagenation />
            </ChakraBox>
          </div>
        </div>
        : 
        <ImageUpload onChangeImage={onChangeImage}/> 
      }

      
      <Information  numbering={3} name="연어" engName="鰱魚 | Salmon" explain="연어(鰱魚)는 연어속에 속하는 물고기이다. 치어는 강에서 태어나 바다로 가서 살다가 성체가 되면 다시 강을 거슬러 올라와 상류에서 알을 낳는 회유성 어종이다. 이 독특한 회유 습성으로 인해 생태계의 영양 셔틀 역할을 한다. 횟감이나 구이, 샐러드 요리 등으로 인기가 많은 생선이다"/>
    </div>
  );
}