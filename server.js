var express = require( 'express' );
var app     = express();
var path    = require( 'path' );
var files   = path.join( process.cwd() );
var port    = 3031;

app.use( express.static( files ) )

app.listen( port,function () {
	console.log( 'Now listening :' + port );
} );