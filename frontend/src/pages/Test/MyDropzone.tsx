import React from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropzone() {
  const onDrop = (acceptedFiles:any) => {
        console.log(acceptedFiles)
  }
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
          <p>Drop the files here ...</p>

      }
    </div>
  )
}


export default MyDropzone