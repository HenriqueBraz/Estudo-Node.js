var http = require('http');
//req = request
//res = response
/* Criando o server */
var server = http.createServer(function(req,res){
	
		res.writeHead (600, {'Content-type': 'text/html'});
		res.write('<strong>Hello World</strong>!');
		res.write('<br>');
		res.write('Aulas de Nodejs');
		res.write('<br>');
		res.write ('Em 05/05/2018');
		
		res.end();
});
	
server.listen (3000, function(){
	
	console.log('Servidor rodando na porta 3000');
});