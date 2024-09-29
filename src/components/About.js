import React, { Component } from "react";
import User from './User';
import UserClass from './UserClass'
import UserContext from "../utils/UserContext";


class About extends Component{

   constructor(props){
    super(props);
   }

    render(){

 return <div className="p-10 text-center">

        <h1>This is Ordero</h1>
          <div>
             User:
               <UserContext.Consumer>
                {({LoggedInUser}) => <h1 className="text-lg font-bold" >{LoggedInUser}</h1>}
               </UserContext.Consumer>
         </div>
             <p>This website wil get you delicious food delivered by your doorsteps</p>
              <UserClass name={"First"} location={"Japan(Class)"} />
         </div>
    }
}

export default About;