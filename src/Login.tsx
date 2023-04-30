import { useState } from "react"

const Login= ()=>{
    const [inputValue,setInputValue] = useState({
        email:"",
        password:""
    })
    const [errors,setErrors]=useState("")
  function onSubmit(e:React.FormEvent<HTMLFormElement>):void{
    e.preventDefault();
    setErrors('')
    if(inputValue.email==='' ||  inputValue.password===''){
       setErrors('Please enter compulsory fields')
       return;
    }

    if(inputValue.email==='rehan' && inputValue.password==='rehan') 
    {
     console.log("LOGIN")
     return;
    }
    setErrors('Invalid Username password')
     
  }

  function onInputChange(e:React.ChangeEvent<HTMLInputElement>):void{
    e.preventDefault()
      setInputValue({
        ...inputValue,
        [e.target.name]:e.target.value
      })
 }
    return(
        <>
        <h1>
            Login Form
            <form onSubmit={onSubmit}>
                <input type={'text'} placeholder="email" value={inputValue.email} name='email' onChange={onInputChange}/>
                <input type={"text"} placeholder='password' value={inputValue.password} name='password' onChange={onInputChange}/>
                <input type="submit" value='Login'/>
            </form>
            {errors&&<p>{errors}</p>}
        </h1>
        </>
    )
}

export default Login