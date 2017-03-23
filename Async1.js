/*
Creating a server

AIM: Call to asynchronus method

*/

//importing or including libaray in a variable 
var http=require('http');
var fs=require('fs');


//creating a server and handeling req and listening using lamda functiom and chaining 
http.createServer((req,res) =>
{
    //get requested resource from url 
    var file='.'+req.url;
    fs.readFile(file,(err,data)=>{
        if(err!=null)
        {
            res.writeHead(500);
            res.end(err.message);
        }
        else{
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end(data);
        }
    });

    
}).listen(8090);

