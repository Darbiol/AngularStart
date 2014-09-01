var express    = require( 'express' );
var app        = express();
var path       = require( 'path' );
var files      = path.join( process.cwd() );
var bodyParser = require( 'body-parser' );
var fs         = require( 'fs' );
var port       = 3031;

app.use( express.static( files ) );
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.get( '/heroes', function ( req, res ) {
	fs.readFile( __dirname+'/resources/data/heroCollection.json', 'utf8', function ( err, data ) {
		res.status( 200 ).send( data );
		res.end();
	} );
} )

app.put( '/heroes', function ( req, res ) {
	console.log(req.body.toString())
	fs.writeFile( __dirname+'/resources/data/heroCollection.json', JSON.stringify(req.body), function ( err ) {
		if( err ) throw err;
		fs.readFile( __dirname+'/resources/data/heroCollection.json', 'utf8', function ( err, data ) {
			res.status( 200 ).send( data )
			res.end();
		} );
	} );
} );

app.listen( port,function () {
	console.log( 'Now listening :' + port );
} );