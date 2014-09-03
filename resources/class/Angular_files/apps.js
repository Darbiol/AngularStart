var app = angular.module( 'WowApp', [ 'ngRoute' ] );

app.config( function ( $routeProvider ) {

	$routeProvider
		$routeProvider
		// Default Route
		.when( '/', {
			'templateUrl' : 'js/templates/home.html',
			'controller'  : 'MainContoller'
		} )
		// all view
		.when( '/home', {
			'templateUrl' : 'js/templates/all.html',
			'controller'  : 'MainContoller'
		} )


} );