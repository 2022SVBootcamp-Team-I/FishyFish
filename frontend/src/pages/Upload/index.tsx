import React,{useEffect, useState} from "react";
import Information from '../../components/Infomation'
import InfomationBlank from '../../components/infomationBlank'
import axios from 'axios';
import Button from '@mui/material/Button';
import './style.css'
import { Preview } from "@mui/icons-material";
import ImageUploadComponent from "../../components/ImageUpload/ImageUploadComponent"
import Pagenation from "../../components/Pagenation/Pagenation"
import { Box as ChakraBox } from "@chakra-ui/react";
import NaviBar from "../../components/NaviBar";


export default function Home() {
  let [imageFile,setImageFile]=useState();

  const onChangeImage = (event: any) => {

    setImageFile(event.target.files);
  };


  const sendImage = async(e: any)=>{
    
    const formdata=new FormData();
    formdata.append('uploadImage', imageFile![0]);
    axios.post("",formdata)
      .then((response=>{
        console.log(response)
      }))
      .catch((error)=>{
        console.log(error);
      })
    console.log("전송완료 전송파일 데이터",formdata)
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
    <>
    <NaviBar />
      <div className="page">
        <div className='uploadpage_left'>
          <div className="nintendo_top">
            <img  src="img/speaker.png" alt="이미지오류"></img>
            <div className='outBox'>
              <div className='inBox'>
                {imageFile 
                  ?
                  <div style={{ display:"flex" ,flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
                      <div className="previewimg"/>
                  </div>  
                  : 
                  <ImageUploadComponent setImageFile={setImageFile}/> 
                }
              </div>
            </div>
            <img src="img/speaker.png" alt="이미지오류"></img>
          </div>
          <div className="middleBar"></div>
          <div className="nintendo_under">
            <label htmlFor="chooseFile"><img style={{marginBottom:"8rem"}} src="img/miniCrossbar.png" alt=""/></label>
            <input id="chooseFile" hidden accept="image/*" multiple type="file" onChange={onChangeImage} />
            <div className='outBox'>
              <div className='inBox_under'>
                {/* <Pagenation /> */}
              </div>
            </div>
            <div className="nintendo_under_right">
              <img style={{marginBottom:"9rem",marginTop:"3rem"}} src="img/miniButton.png" alt="" onClick={sendImage}/>
              <img style={{marginRight:"4rem"}} src="img/powerButton.png" alt=""/>
            </div>
          </div> 
        </div>
        
        <InfomationBlank/>
        {/* <Information  numbering={3} name="Salmon" engName="鰱魚 | Salmon" explain="Salmon are fish in the genus Salmon. Cheek is a migratory fish that was born in a river and lives in the sea, and when it becomes an adult, it goes back up the river and lays eggs in the upper stream. Due to this unique migration habit, it serves as a nutritional shuttle for the ecosystem. It is a fish that is popular for sashimi, grilling, and salad dishes"/> */}
      </div>
    </>
  );
}