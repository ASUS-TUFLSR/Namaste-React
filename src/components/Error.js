import React from 'react';
import { useRouteError } from 'react-router-dom';
import { SW_W } from '../utils/constant';

const Error = () => {
 
    const err = useRouteError();
    console.log(err);

    return <div>
           <h3>Oops! something went wrong</h3>
           <h4>{err.status}: {err.statusText}</h4>
           <div style={{textAlign:"center"}} >
           <img style={{ height:"400px", width:"600px"}} src={SW_W} />
           </div>
           
    </div>
}

export default Error;