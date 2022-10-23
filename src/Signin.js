import { signInWithEmailAndPassword,getAuth } from 'firebase/auth';
import React, { Component } from 'react';
import { app, db } from './database';
import {Navigate} from "react-router-dom";
import uid, { setUid } from './user';
class Signin extends Component {
    state={
        username:"",
        password:"",
        uid:""
    }
    handleChange=(event)=>{
        var {name,value} = event.target
        this.setState({[name]:value})
    }


    handleClick=async () =>{
        if(this.state.email!="" && this.state.password.length>=8){
            signInWithEmailAndPassword(getAuth(app),this.state.email,this.state.password).then((userCredential)=>{
                var user=userCredential.user;
                setUid(userCredential.user.uid);
                this.setState({... this.state, uid:user.uid})
            }
            ).catch((error)=>{
                alert(error.message)
            })


        }
        else{
            alert("Veuillez saisir correctement les champs")
        }
    }


    render() {
        if(this.state.uid===""){
            return (
                <div className="signup-container">
                    <div className='signup-left'>
                        <img className="signup-logo" src={require("../src/images/logo-white.png")}/>
                        <span className='signup-discover'>Discover Morocco's first MEMEs platform</span>
                    </div>
                    <div className='signup-right'>
                        <a href="signup" className='already-a-member'>Not registered yet? Sign up</a>
                        <div className='signup-form'>
    
                            <h1 className='signup-title'>Sign in</h1>
                            <div className='signup-social google'>
                                <img src={require("../src/images/google-logo.png")}/>
                                <span>Sign In with Google</span>
                            </div>
                            <div className='signup-social facebook'>
                                <img src={require("../src/images/facebook-logo.png")}/>
                                <span>Sign In with Facebook</span>
                            </div>
                            <div className='signup-box'>
                                <div className='field'>
                                        <label>Email address</label>
                                        <input name="email" onChange={this.handleChange} value={this.state.email}></input>
                                    </div>
                                    <div className='field'>
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password}></input>
                                    </div>
                                    <button onClick={this.handleClick}>
                                        Sign Up
                                    </button>
    
                            </div>
    
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <Navigate to="/"/>
            )
        }
    }
}

export default Signin;