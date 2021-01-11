// build your `Project` model here

const db  = require('../../data/dbConfig')


const getProjects = ()=>{
    return db('projects')
}

const getProjectById = id=>{
    return db('projects').where('id',id)
}

const addProject = newProject =>{
    return db('projects').insert(newProject).then(ids=>{return getProjectById(ids[0])})
}



module.exports = {getProjects,getProjectById,addProject}