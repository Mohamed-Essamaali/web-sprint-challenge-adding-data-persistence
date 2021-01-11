// build your `Task` model here

const db  = require('../../data/dbConfig')


const getTasks = ()=>{
    return db('tasks')
}

const getTaskById = id=>{
    return db('tasks').where('id',id)
}

const addTask = (newTask,project_id) =>{
    return db('tasks').insert(newTask).where('id',project_id).then(ids=>{return getTaskById(ids[0])})
}



module.exports = {getTasks,getTaskById,addTask}