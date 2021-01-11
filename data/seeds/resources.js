
exports.seed = async function(knex) {
  await knex('resources').insert([
    {name:'relational Databases',description:'install sqlite3'},
    {name:'redux documentation',description:' install redux dependencies'},
    {name:'react library',description:'import react library'},
    {name:'Boostrap',description:''},
  
  ])
 };
 