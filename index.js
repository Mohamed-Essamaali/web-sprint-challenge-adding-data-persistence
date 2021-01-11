// start your server here
const express= require('express')
const projectRoutes = require('./api/project/router')

const server= express()

server.use(projectRoutes)

const port = process.env.PORT || 5000

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

