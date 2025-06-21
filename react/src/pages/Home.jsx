import React from 'react'
import About from './About'
import image from '../assets/image.jpg'

const Home = ({items, users}) => {
  return (
    <div>
      
      {/* <About items={items} user={users}/> */}
        {/* <ol>
            {items.map((fruits) =>( <li>{fruits}</li>))}
        </ol>
        <h1>{users.username}</h1>
        <h2>{users.password}</h2> */}
        <img src={image} alt="Home" style={{width: '100%', height: 'auto'}} />
        
    </div>

  )
}

export default Home