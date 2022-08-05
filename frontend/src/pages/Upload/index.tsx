import React,{useEffect, useState} from "react";
import Information from '../../components/Infomation'
import InfomationBlank from '../../components/infomationBlank'
import Infomation_2 from '../../components/Infomation_2'
import axios from 'axios';
import './style.css'
import ImageUploadComponent from "../../components/ImageUpload/ImageUploadComponent"
import Pagenation from "../../components/Pagenation/Pagenation"
import { Box as ChakraBox } from "@chakra-ui/react";
import NaviBar from "../../components/NaviBar";
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector } from "react-redux";




export default function Home() {
  let [imageFile,setImageFile]=useState();
  const [button,setButton]=useState(false);
  const [url,setUrl]=useState('');
  const [name,setName]=useState('');   
  const [toxicity,setToxicity]=useState('');   
  const [prohibit_period,setProhibit_period]=useState('');   
  const [prohibit_area,setProhibit_area]=useState('');   
  const [description,setDescription]=useState('');                 
  const [loading,setLoading]=useState(false);

  const onChangeImage = (event: any) => {
    setImageFile(event.target.files);
  };

  
  const sendImage = async(e: any)=>{
    setLoading(true);
    const formdata=new FormData();
    formdata.append('uploadImage', imageFile![0]);
    axios.post("http://localhost:8000/api/v1/images/",formdata, {withCredentials: true})
      .then((response=>{
        setUrl(response.data.url);
        setName(response.data.name)
        setToxicity(response.data.toxicity)
        setProhibit_period(response.data.prohibit_period)
        setProhibit_area(response.data.prohibit_area)
        setDescription(response.data.description)
        setButton(true);
        alert('분석완료 하였습니다');
        setLoading(false);
      }))
      .catch((error)=>{
        console.log(error);
        setLoading(false);
      })
    
  }


  useEffect(()=>{ //이미지 프리뷰를 위해 useEffect사용
    preview();
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
        {loading?<LinearProgress color="inherit" />:<></>}
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
              <label htmlFor="chooseFile"><img style={{marginBottom:"8rem" , cursor:"pointer"}} src="img/miniCrossbar.png" alt=""/></label>
              <input id="chooseFile" hidden accept="image/*" multiple type="file" onChange={onChangeImage} />
              <div className='outBox'>
                <div className='inBox_under'>
                  {/* <Pagenation /> */}
                </div>
              </div>
              <div className="nintendo_under_right">
                <img style={{marginBottom:"9rem",marginTop:"3rem",cursor:"pointer"}} src="img/miniButton.png" alt="" onClick={sendImage}/>
                <img style={{marginRight:"4rem"}} src="img/powerButton.png" alt=""/>
              </div>
            </div> 
          </div>
          
          {
          button
          ? <Infomation_2  url={url} name={name} toxicity={toxicity} prohibit_period={prohibit_period} prohibit_area={prohibit_area} description={description}/>
          : <InfomationBlank/>
          }
        </div>
        
    </>
  );
}