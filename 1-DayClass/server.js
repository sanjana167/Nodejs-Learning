 require('dotenv').config()
 const express = require('express')

//  const app=express()
//  const port= 4000

//  app.get('/', (req,res)=>{
//     res.send('hello sanjana')
//  })

//  app.get('/about', (req,res)=>{
//     req.send('<h1> i am from abohar</h1>')
//  })

//   app.get('/contact', (req,res)=>{
//     req.send('<h1> email:khushinigam674@gmail.com</h1> , <h2>ph number: 6280713749</h2>')
//  })

// //  app.listen(port,()=>{
// //     console.log(`Example app listening on port ${port}`);
    
// //  })

//  app.listen(process.env.PORT,()=>{
//     console.log(`Example app listening on port ${port}`);
    
//  })

const app = express()
const port = process.env.PORT || 4000
app.listen(port ,()=>{
   console.log(`Server is  running on port ${3000}`);
   
}) 