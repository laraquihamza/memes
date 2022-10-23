import React, { Component } from 'react';
import Logo from "../images/logo.svg"
import { ReactDOM } from 'react-dom';
import reactDom from 'react-dom';
import {app, auth } from '../database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { render } from '@testing-library/react';
class Header extends Component {
     logo=require("../images/rect4534.png")
     show=false;
     loading = true;
     burgerString='☰';
     state={
         uid:""
     }
     componentDidMount(){
         console.log(auth.currentUser);
         onAuthStateChanged(auth, (user) => {
             this.loading=false;
            if (user) {
                this.setState({... this.state,  uid:user.uid})

             
    // redirect to home if user is on /login page 
        } 

     })
     }
     handleClick=()=>{
        var burger=document.getElementsByClassName("burger-button")[0]
        var nav=reactDom.findDOMNode(document.getElementById("nav"));
        if(this.show===false){
            nav.className="unwrapped";
            burger.innerHTML="X"    
        }
        if(this.show===true){
            nav.className="wrapped";   
            burger.innerHTML="☰" ;

        }
        this.show=!this.show;
    }
    handleSignout=()=>{
        auth.signOut();
        window.location.reload();
    }
    render(){
        return (
            this.loading ? <header></header> :
            <header>
                <div className="header-wrapper">
                <a href="/">
                    <img src={this.logo}/>
                </a>
                <span className='burger-button' onClick={this.handleClick}>
                {this.burgerString}
                </span>
    
                </div>
                <nav id="nav">
                <ul>
                <li className="upload">
                <a href="upload">+Upload</a>
                </li>
                <li className="login">
                    {   this.state.uid===""?
                        <a href='signup'>Sign Up / Login</a>
                        :
                        <a href='signup'onClick={this.handleSignout}>Sign Out</a>
                    }                    
                </li>
                </ul>
                </nav>
            </header>
        );
        }

};

export default Header;