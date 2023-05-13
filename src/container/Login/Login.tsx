import  { ChangeEvent, useState,FormEvent } from 'react';
import { signIn } from './utils';
import { LoginPayload } from './type';
import "./style.css"
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formValues,setFormValues]=useState<LoginPayload>({username:'',password:''})
 const [errors,setErrors]=useState<string>('')
 const navigate = useNavigate();
  const handleFormValue = (e:ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    setFormValues({...formValues,[e.target.name]:e.target.value});
  }

  const handleSubmit = async(e:FormEvent):Promise<void> => {
    e.preventDefault();
    if(formValues.username === '' || formValues.password === ''){
      setErrors('Enter Required Field');
      return
    }
    const response = await signIn(formValues);
    if(response?.status===200 && response?.data){
       setFormValues({username:'',password:''})
        localStorage.setItem('authToken',response?.data?.token);
         navigate("/home")
    }
    else if(response.error){
      setErrors(response?.error)
    }
  };

  return (
    <div className={"login-form"}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleFormValue}
            data-testid='username'
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleFormValue}
            data-testid='password'
          />
        </div>
        <button type="submit" data-testid='login'>Login</button>
      </form>
      <p style={{color:"red"}}>{errors?errors:''}</p>
    </div>
  );
};

export default LoginForm;
