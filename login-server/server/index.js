const express=require('express')
const app=express()
const cors=require('cors')

app.use(cors())
app.use(express.json())

app.post('/register',(req,res)=>{
    console.log(req.body)
    res.json({status:'ok'})
})

app.listen(5000,()=>{
    console.log('Server listening to port 5000...')
})