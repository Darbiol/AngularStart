app.controller( 'ProfileController', [ '$scope', '$routeParams', 'heroQueryFactory',  function ( $scope, $routeParams, heroQuery ) {

	heroQuery.getHero( $routeParams.id, function ( hero ) {
		$scope.person = hero;
		$scope.selectedImage = $scope.person.info[0].imageUrl[0]
		$scope.profileImg = $scope.person.imgUrl
	} );

	

	// $http.get( 'resources/data/' + $scope.id + '.json' ).success( function ( data ) {
	// 	console.log(data[0])
	// 	$scope.person = data;
	// 	$scope.selectedImage = data[0].imageUrl[ 0 ];
	// } );

	$scope.setImage = function ( imgUrl ) {
		$scope.selectedImage = imgUrl;
	}

} ] );
