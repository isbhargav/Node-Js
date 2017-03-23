//importing or including libaray in a variable 
var http=require('http');

//creating a server
var server=http.createServer();

//handler function
function handler(req,res)
{
    //set headers of response
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write('<h1>Hello World</h1>');
    res.end();
    console.log('we had a visitor for request '+ req.url);
}
//On the server and set handler function 
server.on('request',handler);

//start listening 
server.listen(1337);
