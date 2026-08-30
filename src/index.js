let id =0
const todos =[
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
]

function checkdone(item){
 console.log(item.done)
 return item.done == false
}
const filteredTodos = todos.filter(checkdone)
 console.log(filteredTodos)

//ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }`