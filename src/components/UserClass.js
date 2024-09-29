import React, {Component} from "react";
import { Link } from "react-router-dom";

class UserClass extends Component {

  constructor(props){
    super(props);

    this.state = {
      userInfo : {
        name: "Dummy",
        location: "Anonymous"
       }
    };
     
  }

 async componentDidMount(){
  
   const data = await fetch("https://api.github.com/users/ASUS-TUFLSR")
   const json = await data.json();
   this.setState({
      userInfo:json,
    })
  
 
  }

  
        render(){
          
          const {name, location, avatar_url, html_url} = this.state.userInfo;

            return(
                <div className="user-card items-center" style={{padding:"10px", textAlign:"center"}}>    
                  <div className="items-center p-3" > <img src={avatar_url} style={{height:"125px", width:"125px", borderRadius:"50%",marginLeft:"44%"}}  /> </div>         
                   <h4>Creator: {name}</h4>
                   <h5>Location: {location}</h5>
                   <h6>Contact: <Link to={html_url} >link</Link></h6>
                </div>
            )
        }
}


export default UserClass;