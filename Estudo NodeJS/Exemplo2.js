var http = require('http'),
    arquivo = require('fs'); // file system
	
var server = http.createServer(function(req,res){
		res.writeHead(200,{'Content-type': 'text/html;charset=utf-8;'});
		
	// __dirname = retorna o diretório do projeto	
	arquivo.readFile(__dirname+'/Arquivos/index.html',function(err,html){
	if(err){
		res.write('Arquivo index.html não encontrado...');
		
	}else{
		res.write(html);
	}	
    res.end();
	}); 	
});

server.listen(3000, function(){
		console.log ('Servidor rodando na porta 3000');
})		