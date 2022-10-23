import React, { Component } from 'react';
import { app,db } from './database';
import {createUserWithEmailAndPassword,getAuth} from "firebase/auth"
import {query,getDocs, collection, addDoc,setDoc,doc, getDoc, where } from "firebase/firestore"; 
import {Navigate} from "react-router-dom";
class Signup extends Component {
    state={
        name:"",
        email:"",
        username:"",
        password:"",
        uid:""
    }
    handleChange=(event)=>{
        var {name,value}=event.target
        this.setState({[name]:value})
    }
    handleClick=async () =>{
        if(this.state.name!="" && this.state.email!="" && this.state.username!="" && this.state.password.length>=8){
            var q=query(collection(db,"users"),where("username","==",this.state.username))
            var snapshot= await getDocs(q)
            snapshot.forEach((doc)=>{
                alert("Le nom d'utilisateur est déjà utilisé")
            })
            var q=query(collection(db,"users"),where("email","==",this.state.email))
            var snapshot= await getDocs(q)
            snapshot.forEach((doc)=>{
                alert("L'email est déjà utilisé")
            })
            createUserWithEmailAndPassword(getAuth(app),this.state.email,this.state.password).then((userCredential)=>{
                var user=userCredential.user;

                addDoc(collection(db,"users"),{
                    email:this.state.email,
                    name:this.state.name,
                    username:this.state.username
                })
                this.setState({... this.state,  uid:user.uid})
            }).catch((error)=>{
                    alert(error.message)
            })

        }
        else{
            alert("Veuillez saisir correctement les champs")
        }
    }
    render() {
        if(this.state.uid!=""){
            return(<Navigate to="/"/>)
        }
            return (
                <div className="signup-container">
                    <div className='signup-left'>
                        <img className="signup-logo" src={require("../src/images/logo-white.png")}/>
                        <span className='signup-discover'>Discover Morocco's first MEMEs platform</span>
                    </div>
                    <div className='signup-right'>
                        <a href="signin" className='already-a-member'>Already a member? Sign in</a>
                        <div className='signup-form'>
    
                            <h1 className='signup-title'>Sign up</h1>
                            <div className='signup-social google'>
                                <img src={require("../src/images/google-logo.png")}/>
                                <span>Signup with Google</span>
                            </div>
                            <div className='signup-social facebook'>
                                <img src={require("../src/images/facebook-logo.png")}/>
                                <span>Signup with Facebook</span>
                            </div>
                            <div className='signup-box'>
                                <div className='signup-two-fields'>
                                    <div className='field'>
                                        <label>Full Name</label>
                                        <input name="name" value={this.state.name} onChange={this.handleChange} ></input>
                                    </div>
                                    <div className='field'>
                                        <label>Username</label>
                                        <input name="username" value={this.state.username} onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                <div className='field'>
                                        <label>Email address</label>
                                        <input name="email" value={this.state.email} onChange={this.handleChange}></input>
                                    </div>
                                    <div className='field'>
                                        <label>Password</label>
                                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                                    </div>
                                    <div className='checkbox-field'>
                                        <input type="checkbox"/>
                                        <span>Creating an account means you’re okay with our Terms of Service, Privacy, Policy, and our default Notification Settings</span>
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
    }


export default Signup ;