app.controller( 'AllController', [ '$scope', '$http', 'heroQueryFactory', function (  $scope, $http, heroQuery ) {

	// $http.get('/heroes').success(function(data) {
	// 	$scope.filteredHero = data;
	// });

	heroQuery.getHeroes( function ( heroes ) {
		$scope.filteredHero = heroes;
	} );

	$scope.showModal = 'false';
	$scope.isCreating = false;
	$scope.isEditing = false;
	$scope.ModelTitle = null;
	$scope.editedHero = null;

	// Checkings
	$scope.startCreating = function () {
		$scope.isCreating = true;
		$scope.isEditing = false;
		$scope.ModelTitle = "Add Hero!"

	}

	$scope.startEditing = function ( $event ) {
		$event.preventDefault();

		$scope.isCreating = false;
		$scope.isEditing = true;
		$scope.ModelTitle = "Edit Hero";

	}

	$scope.cancelCreateEdit = function () {
		$scope.isCreating = false;
		$scope.isEditing = false;

		resetForm();
	}

	$scope.cancelEdit = function () {
		$scope.isEditing = false;
		resetForm();
	}

	$scope.submitHero = function ( hero ) {

		if ( $scope.isCreating && !$scope.isEditing ) {
			addHero( hero );
		}else if ( !$scope.isCreating && $scope.isEditing ){
			updateHero( hero );
		}
		$('#heroModal').modal('hide');
	}



	$scope.setEditValues = function ( hero ) {
		$scope.hero = angular.copy( hero );
	}

	function addHero( newHero ) {
		var now = new Date();

		newHero.id      = hashIt(now);
		newHero.imgUrl  = '/resources/img/default-img.jpg';
		newHero.flagged = false;
		heroQuery.addHero( newHero );
		//$scope.filteredHero.push( newHero );
		console.log( $scope.filteredHero )
		resetForm();
	}

	function updateHero( hero ) {
		// console.log($scope.hero)
		// var index = _.findIndex( $scope.filteredHero, function ( i ) {
		// 	console.log(i)
		// 	return i.id == hero.id;
		// } )
		// console.log( index );
		// $scope.filteredHero[index] = hero;
		heroQuery.setHero( hero );
		$scope.isEditing = false;
		resetForm();
	}

	$scope.removeHero = function ( $event, hero ) {
		$event.preventDefault();	
		console.log(hero.id);
		heroQuery.deleteHero( hero );
	}

	function resetForm () {
		$scope.hero = {
			'heroName'  : '',
			'firstName' : '',
			'lastName'  : '',
			'flagged'   : false
		}

	}

	function hashIt ( date ) {
		var keyCode = 'GaBzO0123o'

		var dateParsed = ( Date.parse( date ) ).toString();
		console.log(dateParsed.length)
		var id = null;
		for( var i=0 ; i<dateParsed.length ; i++ ) {
			console.log('dasds');
			if ( id ) {
				id += keyCode[ dateParsed[ i ] ];
			} else {
				id = keyCode[ dateParsed[ i ] ];
			}
		}
		return id;
	}

	$scope.toggleFave = function ( $event, person ) {
		$event.preventDefault();
		if ( person.flagged ) {
			person.flagged = false;
		} else {
			person.flagged = true;
		}
		console.log(person);
		var index = _.findIndex( $scope.filteredHero, function ( i ) {
			return i.id == person.id;
		} )

		$scope.filteredHero[index] = person;
		console.log( $scope.filteredHero[0] );
	}

	// ============================ //
	//      CRUD                   //
	// =========================== //

} ] );

