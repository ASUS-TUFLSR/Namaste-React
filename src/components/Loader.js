import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner className='w-28 h-28 m-auto block' animation='border' role='status'>
      <span className='sr-only'>Loading...</span>
    </Spinner>
   
  )
}

export default Loader
