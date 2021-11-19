//In this file you can find the Node Server for this project
const http = require( 'http' );
const fs = require( 'fs' );

const server = http.createServer( function( request, response ){

    //Routes
    if( request.url === "/"){
        fs.readFile( 'views/index.html', 'utf-8', function( errors, contents ){
        response.writeHead( 200, {'Content-Type' : 'text/html'});
        response.write( contents );
        response.end(); 
    });
    }
    else if(request.url === "/cars") {
        fs.readFile("views/cars.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/cars/new") {
        fs.readFile("views/newcar.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/cats") {
        fs.readFile("views/cats.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }

    //Route to display cars images
    else if(request.url === "/images/2020_chevrolet_silverado.jpg") {
        fs.readFile("./images/2020_chevrolet_silverado.jpeg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/images/FordRaptor.jpg") {
        fs.readFile("./images/FordRaptor.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/images/toyota-tacoma.jpg") {
        fs.readFile("./images/toyota-tacoma.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }

    //Route to display cats images
    else if(request.url === "/images/cat1.jpg") {
        fs.readFile("./images/cat1.jfif", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jfif"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/images/cat2.jpg") {
        fs.readFile("./images/cat2.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/images/cat3.jpg") {
        fs.readFile("./images/cat3.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else {
        response.writeHead(404);
        response.end("Route Not Found!");
    }


});

server.listen( 7077 );
console.log("Running in local host 7077");

