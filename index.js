// start your server here
const express= require('express')
const projectRoutes = require('./api/project/router')
const resourceRoutes = require('./api/resource/router')

const server= express()

server.use(projectRoutes)
server.use(resourceRoutes)

const port = process.env.PORT || 5000

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

