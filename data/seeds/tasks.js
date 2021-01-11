
exports.seed = async function(knex) {

  await knex('tasks').insert([
    {description:'npm create-react-app app_name ',notes:'install the needed dependencies',completed:false,project_id:1},
    {description:'pass data via props fom parents components to children components',notes:'',completed:false,project_id:2},
    {description:'use redux to complete your project',notes:'create a store import required dependencies',completed:false,project_id:3},
    {description:'query data from different tables',notes:'try to use alias to clarify the heading',completed:false,project_id:4},
  ])
};
