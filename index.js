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
  let item = {
    'task': req.body.task,
    'checked': ''
  };
  todo.push(item);
  res.render('index', {todo: todo});
})

app.listen(3000, function(){
  console.log('Ok good whatever');
})
