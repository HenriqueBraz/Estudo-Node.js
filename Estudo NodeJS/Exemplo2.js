
Aqui nós temos o uso de duas bibliotecas, a http e a fs (file system). Este método é muito parecido com o exemplo anterior,
porém neste caso nós chamamos um arquivo.html(aqui trata-se do index.html) criado externamente para exibir como página da web.
Este arquivo está no diretório Arquivos e a palavra reservada "__dirname" retorna o caminho onde se encontra o diretório.
Temos ainda um controle caso o arquivo index não seja encontrado, retornando a menssagem "Arquivo index.html não encontrado...";
para testar, basta mudar o nome de index.html para qualquer outro nome, como index2222.html, por exemplo.

```
//inicio do método

var http = require('http'); // biblioteca http
var arquivo = require('fs'); //biblioteca file system
	
var server = http.createServer(function(req,res){
		res.writeHead(200,{'Content-type': 'text/html;charset=utf-8;'});
		
	// __dirname = retorna o diretório do projeto	
	arquivo.readFile(__dirname+'/Arquivos/index.html',function(err,html){

		if(err){
			res.write('Arquivo index.html não encontrado...');
		} 
		else{
	  		res.write(html);
       		}

    		res.end();
	}); 	
});

// fim do método

//chamada do método

server.listen(3000, function(){
		console.log ('Servidor rodando na porta 3000');
})

```
A chamada do método continua a mesma, retornando no console a menssagem "Servidor rodando na porta 3000" caso esteja ok.
Para verificar a página, basta digitar localhost:3000 no navegador.
