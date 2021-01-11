// build your `/api/tasks` router here

const model = require('./model')
const express = require('express')
const router = express.Router()

router.get('/api/tasks',async (req,res,next)=>{
try {
    const tasks = await model.getTasks()
    res.status(200).json(tasks)
}catch(err){next(err)}
})

router.get('/api/tasks/:id',async (req,res,next)=>{
    try {
        
        const task = await model.getTaskById(req.params.id)
        res.status(200).json(task)
    }catch(err){next(err)}
    })

    router.post('/api/tasks',async (req,res,next)=>{
        try {
            const addedTask = await model.addTask(req.body)
            res.status(200).json(addedTask)
        }catch(err){next(err)}
        })

 module.exports =router

