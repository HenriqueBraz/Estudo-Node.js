Este método cria uma página básica no servidor local. A palavra reservada "require" é o equivalente em Java ao "import", servindo
para chamar as bibliotecas (neste caso a http). Temos declarados 4 variáveis; a  http, que recebe a biblioteca,  a 
server, que recebe a função da http create server, cujo os parâmetros são recebidos pelas variaveis req (requisição) e
res (resposta).

```
// inicio do método

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
		res.write ('Em 06/05/2018');
		
		res.end();
});

// fim do método

//chamada do método

server.listen (3000, function(){
	
	console.log('Servidor rodando na porta 3000');
});
```
Quando chamamos a função .listen dentro de server, setamos os parâmetros para a porta 3000 do servidor, sendo que se está ok ela retorna,
ainda dentro do console, a frase "Servidor rodando na porta 3000". Para verificar a página criada, basta ir no navegador e 
digitar: localhost:3000
