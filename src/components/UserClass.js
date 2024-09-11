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
  // console.log("Child Constructor");
     
  }

 async componentDidMount(){
  // console.log("Child Component Did Mount")
   const data = await fetch("https://api.github.com/users/ASUS-TUFLSR")
  const json = await data.json();
    this.setState({
      userInfo:json,
    })
  
 // console.log(json);
  }

  
        render(){
          
          const {name, location, avatar_url, html_url} = this.state.userInfo;
          
         // console.log("Child Render ")
            return(
                <div className="user-card" style={{padding:"10px", textAlign:"center"}}>    
                  <div > <img src={avatar_url} style={{height:"125px", width:"125px", borderRadius:"50%"}}  /> </div>         
                   <h4>Creator: {name}</h4>
                   <h5>Location: {location}</h5>
                   <h6>Contact: <Link to={html_url} >link</Link></h6>
                </div>
            )
        }

        componentDidUpdate(){
       //   console.log("Child ComponentDidUpdate")
        }

        componentWillUnmount(){
      //    console.log("Child componentWillUnmount")
        }
        

}


export default UserClass;