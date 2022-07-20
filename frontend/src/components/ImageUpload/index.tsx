import React from 'react'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Button from '@mui/material/Button';
import Pagenation from "../../components/Pagenation/Pagenation";
import './style.css'
type ImageUpload = {
    onChangeImage(event:any):void
};
function index({onChangeImage}:ImageUpload) {
  return (
    <div className='uploadpage_left'>
      <div className="UploadImageBox">
          <CloudUploadOutlinedIcon sx={{ fontSize: 50 }}/>
              <span className="big"> Select a file or drag and drop here </span>
              <span className="small">JPG, PNG or PDF, file size no more than 10MB</span>
              <Button variant="contained" component="label">
                  Upload
                  <input hidden accept="image/*" multiple type="file" onChange={onChangeImage} />
              </Button>
      
      </div>
      <Pagenation />
    </div>
  )
}

export default index