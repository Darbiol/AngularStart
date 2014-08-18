app.controller( 'AllController', [ '$rootScope', '$http',  function ( $rootScope, $http ) {

	
	$http.get('resources/data/heroCollection.json').success(function(data) {
		console.log(data);
		$rootScope.people = data
	});



	$rootScope.addNew = function () {
		if ( $rootScope.newPerson != null && $rootScope.newPerson != "" ) {
			$rootScope.people.push( {
				'id' : $rootScope.people.length,
				'name' : $rootScope.newPerson,
				'flagged' : true,
				'Powers' : []
			} );
		}
	}
	$rootScope.toggleFave = function () {
		if ( this.person.flagged ) {
			this.person.flagged = false;
		}else {
			this.person.flagged = true;
		}
	}
} ] );
