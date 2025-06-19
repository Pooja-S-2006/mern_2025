import React from 'react'

const Login = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log('Username:', username);
    console.log('Password:', password);
    };
  return (
    <>
    <div>Login</div>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username</label>
            <input type = "text" id = "username" name = "username" placeholder = "Enter your name" required />
            <br />
            <br />  
            <label htmlFor="password">Password</label>
            <input type = "password" id = "password" name = "password" placeholder = "Enter your password" required />
            <br />
            <br />
            <button type="submit">Login</button>

        </div>
    </form>
    </>
  )
}

export default Login