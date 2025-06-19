import React from 'react'

const Child = ({name, phoneNum, Dept}) => {
  return (
    <div>
        <h1>Name: {name}</h1>
        <h2>Phone Number: {phoneNum}</h2>
        <h3>Department: {Dept}</h3>
    </div>
  )
}

export default Child