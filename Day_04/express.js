const express = require('express')
const app = express()

const user  = require('./data')

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
}   )

app.get('/user', (req, res) => {
  res.json({
    success:true,
    data:user,
  })
}   )

app.post("/data" ,(req,res)=>{
    const {id ,name } = req.body
    user.push({id , name,})
    res.json({
        success:true,
        data:user,
        message:`Data received: Name - ${name}, Age - ${id}`
    })
})

app.listen(4000, () => {
  console.log('Server is running on  : 4000')
})