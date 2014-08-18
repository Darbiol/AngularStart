var app = angular.module( "MyTutorialApp", ['ngRoute'] );


// Configure visitRoutes

app.config( function ( $routeProvider ) {

	$routeProvider
		// Default Route
		.when( '/', {
			'templateUrl' : 'js/templates/all.html',
			'controller'  : 'AllController'
		} )
		// all view
		.when( '/all', {
			'templateUrl' : 'js/templates/all.html',
			'controller'  : 'AllController'
		} )
		// Favorites route
		.when( '/favorites', {
			'templateUrl' : 'js/templates/favorites.html',
			'controller'  : 'FavoriteController'
		} )
		// non favorite routes
		.when( '/non-favorites', {
			'templateUrl' : 'js/templates/nonfavorites.html',
			'controller'  : 'NonFavoriteController'
		} )
		// Specific Id
		.when( '/hero/:id', {
			'templateUrl' : 'js/templates/profile.html',
			'controller'  : 'ProfileController'
		} )
} );