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
    <div className='uploadpage_left'>
      <div className="UploadImageBox" {...getRootProps() }>
        <input {...getInputProps()} />
        <CloudUploadOutlinedIcon sx={{ fontSize: 50 }}/>
            <span className="big"> Select a file or drag and drop here </span>
            <span className="small">JPG, PNG or PDF, file size no more than 10MB</span>
      </div>
    </div>
  )
}

export default ImageUploadComponent