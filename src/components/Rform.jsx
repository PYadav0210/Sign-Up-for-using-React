import React , {useState} from 'react'
import './Abc.css'

export default function Rform() {
  const [data,setData]= useState({
    "name": "",
    "password":"password",
    "email": "email",
  });

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  function signUpClicked(){
    console.log(data.name, data.password, data.email)
  }

  function onNameChange(e){
    setData({
      "password": data.password,
      "email" : data.email,
      "name": e.target.value
    })

    setName(e.target.value)
  }

  function onPasswordChange(e){
    setData({
      "name": data.name,
      "email": data.email,
      "password": e.target.value
    })
    setPassword(e.target.value)
  }

  function onEmailChange(e){
    setData({
      "name": data.name,
      "password": data.password,
      "email": e.target.value
    })
    setEmail(e.target.value)
  }


  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className='underline'></div>
      </div>
    <div className='inputs'>
      <div className='input'>
        <input type='text' placeholder="Enter Your Name" onChange={onNameChange}></input>
        
      </div>
      <div className='input'>
        <input type='email' placeholder="Enter Your Email" onChange={onEmailChange}></input>
      </div>
      <div className='input'>
        <input type='password' placeholder="Enter Your password" onChange={onPasswordChange}></input>
      </div>
    </div>
    <button className='forget-password'>Forget Password?</button>
    
    <div className='submit-container'>
      <div className={data==="login"? "submit gray":"submit"} onClick={signUpClicked}>Sign Up</div>
      <div className= "submit gray" onClick={signUpClicked}>Login</div>
    </div>
    </div>
  
  )
}
