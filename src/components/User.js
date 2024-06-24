import React, { useEffect, useState } from 'react';


const User = ({name, location}) => {
    
    const [count, setCount] = useState(0);

    useEffect(()=>{
    //API Calls
    }, [])


    return <div className='user-card' style={{textAlign:"center"}} >
          
          <h4>Creator: {name}</h4>
          <h5>Location: {location}</h5>
          <h6>Contact: some@gmail.com</h6>
    </div>
}

export default User;