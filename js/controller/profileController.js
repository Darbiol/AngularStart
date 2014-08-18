app.controller( 'ProfileController', [ '$rootScope', '$routeParams', '$http',  function ( $rootScope, $routeParams, $http ) {
	
	$rootScope.id = $routeParams.id; 
	$http.get( 'resources/data/' + $rootScope.id + '.json' ).success( function ( data ) {
		console.log(data)
		$rootScope.person = data;
	} );

} ] );
