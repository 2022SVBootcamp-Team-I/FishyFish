import React,{useCallback} from 'react'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import './style.css'
import {useDropzone} from 'react-dropzone'
type ImageUpload = {
  setImageFile(event:any):void
};
function ImageUploadComponent({setImageFile}:ImageUpload) {
  const onDrop = useCallback((acceptedFiles:any) => {
        setImageFile(acceptedFiles)
        console.log(acceptedFiles)
  }, [])
  
  const {getRootProps, getInputProps} = useDropzone({onDrop})
  return (
    
      <div {...getRootProps() }>
          <input {...getInputProps()} />
          <CloudUploadOutlinedIcon sx={{ fontSize: 50 }}/>
              <span className="big"> S </span>
              <span className="small">J</span>
        </div>
  )
}

export default ImageUploadComponent