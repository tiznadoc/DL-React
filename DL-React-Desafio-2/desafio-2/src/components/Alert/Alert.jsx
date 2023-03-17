import React from 'react';


const Alert = ({message}) => {
  return (
    <div className={`alert alert-${message.color}`}>
      <h5>{message.message}</h5>
    </div>
  )
}

export default Alert
