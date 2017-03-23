/*
Creating a server

AIM: To reduce the code 
*/

//importing or including libaray in a variable 
var http=require('http');

//creating a server and handeling req and listening using lamda functiom and chaining 
http.createServer((req,res) =>
{
    //set headers of response
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Hello World</h1>');
    res.end();
    console.log('we had a visitor for request '+ req.url);
}).listen(8090);

