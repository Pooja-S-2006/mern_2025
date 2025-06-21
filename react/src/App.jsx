import React from 'react'
import Child from './components/Child'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Hooks from './pages/Hooks'
import State from './hooks/State'
import Effect from './hooks/Effect'
import Effect2 from './hooks/Effect2'
import Ref from './hooks/Ref'
import Reducer from './hooks/Reducer'
import Context from './hooks/Context'
import {Routes,Route} from 'react-router-dom'


const App = () => {
   var fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']
   var user = {username: 'Pooja',password: '1234'}
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
      {/* <Counter /> */}
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home items = {fruits} users = {user}/>} />
        <Route path = '/about' element = {<About items = {fruits} users = {user}/>} />
        <Route path = '/contact' element = {<Contact />} />
        <Route path = '/skills' element = {<Skills />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/signup' element = {<Signup />} />
        <Route path = '/counter' element = {<Counter />} />
        <Route path = '/hooks' element = {<Hooks />} />
        <Route path = '/state' element = {<State />} />
        <Route path = '/effect' element = {<Effect />} />
        <Route path = '/effect2' element = {<Effect2 />} />
        <Route path = '/ref' element = {<Ref />} />
        <Route path = '/reducer' element = {<Reducer />} />
        <Route path = '/context' element = {<Context />} />



      </Routes>

      

      {/* <Counter /> */}





    </div>
  )
}

export default App