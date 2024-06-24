import React, { Component } from "react";
import User from './User';
import UserClass from './UserClass'


class About extends Component{

   constructor(props){
    super(props);
    console.log("Parent Constructor");
   }

   componentDidMount(){
   console.log("Parent Component Did Mount");
   }

    render(){
        console.log("Parent Render");
        return <div style={{padding:"10px"}}>
        <h1>This is Ordero</h1>
        <p>This website wil get you delicious food delivered by your doorsteps</p>
        <UserClass name={"First"} location={"Japan(Class)"} />
     </div>
    }
}

export default About;