import InputGroup from "../global_components/input_group";
import image_of_person from "../../assets/images/Group_2019.svg";
import React, {useEffect, useState} from "react";
import {REGEX} from '../../assets/javascript/global';
import "./login.scss";


function Login() {

    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);

    useEffect(() =>{
        document.title = "The Wall | Sign In";
    },[])

    useEffect(() => {
        if(!emailError && !passwordError){
            window.location.href = "/home";
        }
    }, [emailError, passwordError]);

    const submitLoginForm = (event) => {
        event.preventDefault();
        validateForm(event);
    }

    const validateForm = (input) =>{
        const email_input_value = input.target.email.value;
        const password_input_value = input.target.password.value;

        if(!email_input_value){
            setEmailError("Email field is required.");
        }
        else if(email_input_value !== "ndasco@gmail.com"){
            setEmailError("Email field is invalid.");
        }
        else if(!email_input_value.match(REGEX.valid_email)){
            setEmailError("Email field is invalid.");
        }
        else{
            setEmailError(false);
        }

        if(!password_input_value){
            setPasswordError("Password field is required.");
        }
        else if(password_input_value!== "test123"){
            setPasswordError("Password field is invalid.");
        }
        else{
            setPasswordError(false);
        }
    }

    return (
        <div className="login">
            <main>
                <form onSubmit={submitLoginForm}>
                    <h1>The Wall</h1>
                    <h2>Log In</h2>
                    <InputGroup 
                        label="Email" 
                        input_type="email" 
                        input_name="email"
                        error_message={emailError} 
                        tab_index={1}/>
                    <InputGroup 
                        label="Password" 
                        input_type="password"
                        input_name="password"
                        error_message={passwordError} 
                        login_email={true} 
                        tab_index={2}/>
                    <button type="submit" formNoValidate="formnovalidate">SIGN IN</button>
                    <p className="sign_up_link">I don't have an account? <a href="/register">Sign Up</a></p>
                </form>
            </main>
        <div className="image_holder">
          <img src={image_of_person} alt="A person without a face holding a brown paper" />
        </div>
      </div>
    );
  }
  
  export default Login;
  