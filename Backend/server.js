
// const app = express();
// app.listen(3000,() =>{
//     console.log('Server is running on http://localhost:3000');
// })

const express = require('express');

const dotenv = require('dotenv');
const todoRoute = require('./routers/todoRouters')
dotenv.config();
const connectDB = require('./config/db');
const cors = require('cors');
const router = require('./routers/egRouter')


const app = express();
app.use(cors());
const PORT = process.env.PORT;
connectDB();
// app.get('/get',(req,res)=>{
//     res.send('Get route is working');

// })

// app.post('/post',(req,res)=>{
//     res.send('Post route is working');

// })

// app.put('/put',(req,res)=>{
//     res.send('Put route is working');

// })

// app.delete('/delete',(req,res)=>{
//     res.send('Delete route is working');

// })




app.use(express.json())
app.use(router)
app.use('/todo',todoRoute)
app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`);
})


