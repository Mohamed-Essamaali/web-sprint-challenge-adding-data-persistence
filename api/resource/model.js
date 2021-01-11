// build your `Resource` model here
const db  = require('../../data/dbConfig')

const getresources = ()=>{
    return db('resources')
}

const getResourceById = id=>{
    return db('resources').where('id',id)
}

const addResources = newResource =>{
    return db('resources').insert(newResource).then(ids=>{return getResourceById(ids[0])})
}



module.exports = {getresources,getResourceById,addResources}