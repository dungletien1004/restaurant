import React, {useState} from 'react';
import "./LoginForm.css";
function LoginForm({Login, error}) {
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }

    return (
        <div className = "loginForm">
       <form onSubmit = {submitHandler} className = "FormLogin">
           <div className = "form-inner">
               <h2>Đăng nhập</h2>
               {(error !== "") ? (<div className = "error">{error}</div>): ""}
                <div className="form-group">
                   <label htmlFor = "email">Email: </label>
                   <input type = "email" name = "email" id = "email" onChange = {e => setDetails({...details, email: e.target.value})} value = {details.email}/>
                </div>
                <div className="form-group">
                   <label htmlFor = "password">Mật Khẩu: </label>
                   <input type = "password" name = "password" id = "password" onChange = {e => setDetails({...details, password: e.target.value})} value = {details.password}/>
                </div>
                <input type = "submit" value= "Đăng nhập" />
           </div>
       </form>
       </div>
    )
}

export default LoginForm;
