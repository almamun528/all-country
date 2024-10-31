import React, { useState } from "react";

const Contact = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [name , setName] = useState(null)

  
  
    const handleSubmite = (e)  =>{
    e.preventDefault()

    // console.log(e.target.name.value);
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);
    
  }
  const handleUserName = e =>{
    console.log(e.target.value)
    setName(e.target.value)
  }
const handlePassword = (e) =>{

  console.log(e.target.value)
  setPassword(e.target.value)
}
const handleEmail =(e) =>{
  console.log(e.target.value)
  setEmail(e.target.value)
}


  return (
    <>
      <main className="w-10/12 mx-auto bg-gray-300 my-3 p-2">
        <h1>Contact Us</h1>

        <br />

        <form onSubmit={handleSubmite}>
          <input onChange={handleUserName}
           type="text" placeholder=" Name" name="name" /> <br /> <br />
          <input  onChange={handleEmail}
           type="email" name='email' placeholder="email"/> <br /><br />
          <input onChange={handlePassword}
           type="password" placeholder="password" name="password" />
          <br />
          <br />
          <input  className="btn" type="submit" value="submit" />
        </form>
      </main>
    </>
  );
};

export default Contact;
