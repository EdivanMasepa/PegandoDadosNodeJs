const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res) {

  res.render('form');

});

app.post('/enviado', function(req, res){
  var name = req.body.nameButton;
  var age  = req.body.ageButton;
  res.send("Nome: "+name+" Idade: "+age);
})

app.listen(8080, function(){  
  console.log('Server started at http://localhost:8080')
});