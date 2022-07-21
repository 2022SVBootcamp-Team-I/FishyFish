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
    
      <div className='drag_and_drop' {...getRootProps() }>
          <input {...getInputProps()} />
              
        </div>
  )
}

export default ImageUploadComponent