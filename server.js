var express = require('express');
var app = express();
var path = require('path');
var port = '3002';

app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'public','views'));

app.use(express.static(path.resolve(__dirname,'public')));

app.get('/*',function(req,res){
	res.render('index.ejs');
});

app.listen(port,function(){
	console.log('Server listening at '+ port);
});