
exports.seed = async function(knex) {
 await knex('projects').insert([
   {name:'Intro React',description:'Create an app to keep updating the score of soccer game',completed:false},
   {name:'Data state and props in React',description:'pass data from component to another via props',completed:false},
   {name:'redux',description:'Create project using redux',completed:false},
   {name:'context API',description:'Refactor the soccer game app by using Context API',completed:false},
   {name:'Intro SQL',description:'Create some queries with condition',completed:false},
 ])
};
