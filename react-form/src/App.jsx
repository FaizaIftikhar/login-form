//import LoginForm from "./LoginForm";
import React, { useState } from "react";
//import UpgradeLoginForm from "./UpgradeLoginForm";
//tgis is the parent component 
import InputField from "./InputField";

export default function App() {
  const[formData, stFormData]=useState(
    {
      username:" ",
      email: " ",
      password: " ",
      showpassword:false,
    }
  );
  const [eroor, setErrors]=useState({});
  const [message,setmessage]=useState(" ");
  //Validations
  const validate=()=>{
    let newErrors={}
    if (!formData.username.trim()){
      newErrors.username="Username is required"
    }
    if(!formData.email.includes("@")){
      newErrors.email="Emai must include @"

    }
    if(formData.Data<6){
      newErrors.password="Password must be at least 6 characters"
    }
    setErrors(newError);
    return Object.keys(newError).length==0;
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (validate()){
      setmessage(`Welcome, ${formData.username}`)
    }
    else{
      setmessage(`Please fix the errors above`)
    };
    const handleReset=()=>{
      setFormData({
        username:" ",
        email: " ",
        password:" ",
        showPasssword:false,
      });
    setErrors({});
    setMessage("");

      }
    };
    const isFormValid=validate();
    return(
      <InputField 
      setFormData={setFormData}
      errors={errors}
      handleSubmit={handleSubmit}
      handleReset={handleReset}
      message={message}
      isFormValid={isFormValid}
      formData={formData}

       />
  );
}

