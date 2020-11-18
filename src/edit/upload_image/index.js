import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import { useFirebase } from "../../firebase/FirebaseContext";
import './animation.css'

const UploadImage = ({onChange, value}) => {
  
  const firebase = useFirebase();
  const storage = firebase.storage();

  const [picture, setPicture] = useState();

  // State Machine
  const [status, setStatus] = useState("initial");

  React.useEffect(()=>{
    const timer = setTimeout(()=>{
      if(value){
        setPicture(value)
        setStatus('success')
      }
    },1000)
    return () => clearTimeout(timer)
  },[value])

  const onDrop = (picture) => {
    const _name = picture[0].name.replaceAll(" ", "_");
    const d = new Date();
    var name = `${_name}-(${d.getDate()}-${d.getMonth()}.${d.getMilliseconds()})`;

    // todo update meta data
    const metadata = {
 
    };

    var upload = storage.child(name).put(picture[0], metadata);

    upload.on(
      "state_changed",
      function (snapshot) {
        // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setStatus("start upload");
      },
      function (error) {
        setStatus("error");
        console.log(error);
        // Handle unsuccessful uploads
      },
      function () {
        // Handle successful uploads on complete
        upload.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          setPicture(downloadURL);
          onChange(downloadURL)
          setStatus("success");
        });
      }
    );
  };



  if (status === "error") {
    return <p>check console</p>;
  }

  if (status === "start upload") {
    return <ProgressSpinner/>;
  }

  if (status === "success") {
    return (
      <div className='relative'>
        <button
          onClick={() => setStatus("initial")}
          className=" absolute top-0 right-0 m-1  px-2  bg-red-600 text-white text-xs rounded-sm shadow-xl animation duration-200 ease transform hover:-translate-y-px hover:bg-red-200"
        >
          X
        </button>
        <img className='rounded-md' src={picture} alt='preview'/>
      </div>
    );
  }

  // status === 'initial'
  return (
    <div className='max-w-full overflow-hidden border border-sb-lightGray'>
      <ImageUploader
        singleImage={true}
        withIcon={false}
        withLabel={false}
        fileContainerStyle={{boxShadow:'none', padding: '0px'}}
        buttonText="UPLOAD"
        buttonStyles={{background:'transparent', border: '1px solid #D6D6D6', color: '#D6D6D6', borderRadius:' 3px', letterSpacing: '1px'}}
        onChange={onDrop}
        withPreview
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
    </div>
  );
};

export default UploadImage;




const ProgressSpinner = () => {
  return(
<div class="sk-chase mx-auto my-4">
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
</div>
  )
}