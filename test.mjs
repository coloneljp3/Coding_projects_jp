import React, { useState } from "react";
import { ReactDOM } from "react";
import { Axios } from "axios";
import jQuery, { get } from "jquery";
import { NavLink } from "react-router-dom";
import website from "./website.js";
import {BrowserRouter as Router, Route} from "react-router-dom";
    const NODE_ENV = process.env.NODE_ENV;
   

export const Boi = () =>{
return(<nav style = {{bordercolor:"#414841",fontFamily:"verdana",fontWeight:"bold",borderBottomStyle:"solid",borderBottomWidth:"2px",borderBottomColor:"black"}}><form style = {{display:"inline"}}><a href = "http://localhost:3000/"><button id = "b_1" onMouseLeave={()=>{document.getElementById("b_1").style.color = "green"; document.getElementById('b_1').style.backgroundColor = "white"}} onMouseOver={() => {document.getElementById("b_1").style.color = "white"; document.getElementById('b_1').style.backgroundColor = "green"}} style ={{width:'100px',height:'100px',borderStyle:"solid",color:"green",backgroundColor:"white",fontFamily:"verdana"}} type = {'submit'}>About</button></a><span></span></form>
<form  style = {{display:"inline"}}action={"http://localhost:5000/services"} method = "post"><button onMouseLeave={()=>{document.getElementById("b_2").style.color = "green"; document.getElementById('b_2').style.backgroundColor = "white"}} onMouseOver={() => {document.getElementById("b_2").style.color = "white"; document.getElementById('b_2').style.backgroundColor = "green"}} id = "b_2" type = {'submit'} style ={{borderStyle:'solid',width:'100px',height:'100px',color:"green",backgroundColor:"white",fontFamily:"verdana"}} >Services</button></form>
<form  style = {{display:"inline"}}><button onMouseLeave={()=>{document.getElementById("b_3").style.color = "green"; document.getElementById('b_3').style.backgroundColor = "white"}} onMouseOver={() => {document.getElementById("b_3").style.color = "white"; document.getElementById('b_3').style.backgroundColor = "green"}} id = "b_3" type = {'submit'}style ={{borderStyle:'solid',width:'100px',height:'100px',color:"green",backgroundColor:"white",fontFamily:"verdana"}}>Customers</button></form>
<form  action = "http://localhost:2000/hiring" method = {"get"}style = {{display:"inline"}}><button onMouseLeave={()=>{document.getElementById("b_4").style.color = "green"; document.getElementById('b_4').style.backgroundColor = "white"}} onMouseOver={() => {document.getElementById("b_4").style.color = "white"; document.getElementById('b_4').style.backgroundColor = "green"}} id = "b_4" type = {'submit'}style ={{borderStyle:'solid',width:'100px',height:'100px',color:"green",backgroundColor:"white",fontFamily:"verdana"}}>Hiring</button></form>
<span style = {{display:"inline",float:"right",height:"100px"}}>
<Mower />
</span>
<div onMouseLeave = {()=>{document.getElementById("s_1").innerHTML = "";
document.getElementById("s_2").innerHTML = "";
document.getElementById("s_3").innerHTML = "";


}} onMouseOver={()=>{document.getElementById("s_1").innerHTML = "ome ";
document.getElementById("s_2").innerHTML = "ervice "
;
document.getElementById("s_3").innerHTML = "ontractors"

}} style = {{float:"right",backgroundColor:"#414841",color:"whitesmoke",borderStyle:"solid",display:"inline",textAlign:"center",fontSize:"50px"}}><b>H</b><span id = {"s_1"}></span><b>S</b><span id = {"s_2"}></span><b>C</b><span id = {"s_3"}></span></div>
</nav>);


};
export const Pagelayout = () =>{return(<html>
<div style = {{fontFamily:"Verdana"}}>
<div style={{float:"right",color:"#7ab37a", backgroundColor:"#7ab37a", width:"10%",height:"1000px"}}>s</div>
<div style = {{display:"inline",textAlign:"center",width:"80%"}}>
<div style={{display:"inline-block"}}>
<h1 style = {{fontFamily:"Helvetica"}}>Our Mission</h1>
<div style ={{borderStyle:"solid",borderColor:"black",position:"fixed",left:"400px",top:"400px",backgroundColor:"white",color:"green",fontFamily:"helvetica"}}><h1>About Us and Contacts</h1>
<p>Since it's inception in 2023, HSC's mission<br/> has always
been clear and honest:<br/> providing our customers with affordable, professional landscaping
and home services through personalization and customization.<br/>
We know that<br/> everyone is unique;
while some lawn businesses<br/> would rather their customers
conform to their services, our <br/>business model relies on customer input.</p>
    <aside style = {{fontFamily:"Helvetica"}}><h2>Phone Number</h2><div><p>225-347-3233</p></div></aside>
    <aside style = {{fontFamily:"Helvetica"}}><h2>Email</h2><div><p>jpbreaux225@gmail.com</p></div></aside>
    <aside style = {{fontFamily:"Helvetica"}}><h2></h2><div><p></p></div></aside>
    </div>
<div style ={{borderStyle:"solid",borderColor:"black",position:"fixed",right:"400px",top:"400px",backgroundColor:"white",color:"green",fontFamily:"helvetica"}}><h1>Services</h1><p></p></div>
<div style ={{borderStyle:"solid",borderColor:"black",backgroundColor:"white",color:"green",fontFamily:"helvetica",textAlign:"center"}}><h1>Reviews</h1><p></p></div>
</div>
</div>
<div style={{float:"left",color:"#7ab37a", backgroundColor:"#7ab37a", width:"10%",height:"1000px"}}>s</div>
</div>

</html>)}
export const Imgslide = () => {
    const slides = (id) => {
        var img = document.getElementById(id).src;
        console.log(img);
        if(img ==="/ppl_1"){img = "/ppl_2";}
        else if(img ==="/ppl_2"){img = "/ppl_3";}
        else if(img ==="/ppl_3"){img = "/ppl_1";}}


return(
<html>

<img onLoad={setInterval(slides('img'),'1000')} id = "img" src = "/ppl_1.ico"/>

</html>

)


};


export const Mower =() =>{return(
<div>
<svg>
<polyline points = {"0,15 20,30 50,30 60,39.4"} style = {{fill:'none',stroke:'black',strokeWidth:'3'}}></polyline>
<polyline points = {"50,30 70,20"} style = {{fill:'none',stroke:'black',strokeWidth:'3'}}></polyline>
<polyline style = {{fill:'none',stroke:'black',strokeWidth:'3'}} points = "83,28.2 60,39.4"/>
<polyline points = {"0,15 20,7 40,20 70,20 82.8,28.2"}style = {{fill:'none',stroke:'black',strokeWidth:'3'}}></polyline>
<polyline style = {{fill:'none',stroke:'black', strokeWidth:'3'}} points = {"20,30 20,40"}/>
<polyline style = {{fill:'none',stroke:'black', strokeWidth:'3'}} points = {"20,40 60,39.4"}/>
<polyline points = {"40,20 20,30"} style = {{fill:'none', stroke:'black',strokeWidth:'3'}}/>
<circle cx = "20" r = "6" cy = "40" fill = "white" stroke = "black" strokeWidth = "3" />
<circle cx = "60" r = "6" cy = "39.4" fill = "white" stroke = "black" strokeWidth = "3" />
<circle cx = "83" r = "6" cy = "28.2" fill = "white" stroke = "black" strokeWidth = "3"/>
<polyline style = {{fill:'none',stroke:'black', strokeWidth:'3'}} points = {"30,40 30,36"} />
<polyline style = {{fill:'none',stroke:'black', strokeWidth:'3'}} points = {"50,36 30,36"} />
<polyline style = {{fill:'none',stroke:'black', strokeWidth:'3'}} points = {"50,39.4 50,36"}/>
</svg>
</div>





)}














export default function App(){
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    
return(<html><div style ={{height:"500px",borderBottomStyle:"solid",borderBottomColor:"green",borderBottomWidth:"4px"}}>
<div style={{textAlign:"center", fontFamily:"Helvetica"}} className="App">
    <div className="registration">
        <form action ="http://localhost:5000/services" method ={'post'} >
        <h1>Registration</h1>
        <label htmlFor ={"username"}>Username</label>
        <input name="User"
        type = "text"
        onChange ={(e) =>{
            setUsernameReg(e.target.value);

        }}
/>
<label htmlFor = {"password"}>Password</label>
<input name = "psw"
    type = "text"
    onChange={(e)=>{
        setPasswordReg(e.target.value);
    }}
    /><br/>
    <label htmlFor = {'email'}>Email<input name = {'email'} placeholder = {'email'}/></label>
    <label htmlFor = {'phone_numb'}>Cell Number<input name = {'phone_numb'}placeholder = {'cell number'} /></label>
    <a href="services.js"><button type={"submit"}>Register</button></a>
    </form>
    </div>
    <form>
<div className="login">
    <h1>Login</h1>
    <input type = "text" name = "User" placeholder="Username..."/>
    <input type = "password" name = "psw" placeholder="Password..."/>
    <button style ={{transition:"boxShadow 1s"}} onMouseLeave = {()=>{document.getElementById("login").style.boxShadow = "4px 4px 4px white";}} onMouseOver={()=>{document.getElementById("login").style.boxShadow = "2px 2px 10px gray";}} id = "login" > Register </button>
    </div>
    </form> 
</div>
</div>
</html>
)    
}
