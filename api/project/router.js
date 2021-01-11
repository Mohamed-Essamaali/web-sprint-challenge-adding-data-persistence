// build your `/api/projects` router here

const model = require('./model')
const express = require('express')
const router = express.Router()

router.get('/api/projects',async (req,res,next)=>{
try {
    const projects = await model.getProjects()
    res.status(200).json(projects)
}catch(err){next(err)}
})

router.get('/api/projects/:id',async (req,res,next)=>{
    try {
        
        const project = await model.getProjectById(req.params.id)
        res.status(200).json(project)
    }catch(err){next(err)}
    })

    router.post('/api/projects',async (req,res,next)=>{
        try {
            const addedProject = await model.addProject(req.body)
            res.status(200).json(addedProject)
        }catch(err){next(err)}
        })

        module.exports =router
