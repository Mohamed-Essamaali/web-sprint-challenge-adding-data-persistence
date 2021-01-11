// build your `/api/resources` router here

const model = require('./model')
const express = require('express')
const router = express.Router()

router.get('/api/resources',async (req,res,next)=>{
try {
    const resources = await model.getResources()
    res.status(200).json(resources)
}catch(err){next(err)}
})

router.get('/api/resources/:id',async (req,res,next)=>{
    try {
        
        const resource = await model.getResourceById(req.params.id)
        res.status(200).json(resource)
    }catch(err){next(err)}
    })

    router.post('/api/resources',async (req,res,next)=>{
        try {
            const addedResource = await model.addResource(req.body)
            res.status(200).json(addedResource)
        }catch(err){next(err)}
        })

 module.exports =router

