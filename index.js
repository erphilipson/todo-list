const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('public'))
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

let todo = [];
let html ='';

app.get ('/', function (req, res){
  res.render ('index', {todo: todo});
});

app.post ('/', function (req, res){
  todo.unshift(req.body.todo);
  res.redirect('/');
})

app.listen(3000, function(){
  console.log('Ok good whatever');
})


// LOL SO BROKEN OMG ^_^


// app.get('/', function(req, res){
//    html  = '<form action="/" method="post">' +
//              '<input type="text" name="todo" placeholder="Add a todo...">' +
//              '<button type="submit">Add todo</button>' +
//              '</form>'
//   res.send(html);
// })
//
// app.post('/', function (req, res){
//   todo = req.body.todo;
//   html +=   ` <form action='/' method='post'>
//               <button type='submit' class='button'>Mark complete</button> ${todo} <br>
//               </form>
//             `
//   res.send(html);
// })
//
// app.post('/', function (req, res){
//   todo =
//   html += `
//           <br> ${todo}
//           `;
//   res.send(html);
// })
