import React from 'react'
import Child from './components/Child'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Login from './pages/Login'
import Counter from './components/Counter'

const App = () => {
  // var fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']
  // var user = {username: 'Pooja',password: '1234'}
  return (
    <div>

      {/* <Login /> */}
      {/* <h1>Hello World</h1>
      <Child name= 'Pooja' phoneNum='123-456-7890' Dept='IT'/>
      <Child name= 'Pooju' phoneNum='098-765-4321' Dept='IT'/>
      <Home items={fruits} users = {user}/> */}
      {/* <About />
      <Contact />
      <Skills /> */}
      <Counter />
    </div>
  )
}

export default App