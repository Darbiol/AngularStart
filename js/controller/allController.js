app.controller( 'AllController', [ '$scope', '$http',  function (  $scope, $http ) {

	$http.get('/heroes').success(function(data) {
		$scope.filteredHero = data;
	});

	$scope.showModal = 'false';
	$scope.isCreating = false;
	$scope.isEditing = false;
	$scope.ModelTitle = null;

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
		$scope.ModelTitle = "Edit Hero"
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
		var now = undefined;

		hero.id      = now | 69;
		hero.imgUrl  = '/resources/img/default-img.jpg';

		hero.flagged = false;
		$scope.filteredHero.push( hero );
		console.log(hero)
		resetForm();
	}

	function resetForm () {
		$scope.hero = {
			'heroName'  : '',
			'firstName' : '',
			'lastName'  : '',
			'flagged'   : false
		}
	}

	$scope.toggleFave = function ( $event, person ) {
		$event.stopPropagation();
		console.log(person)
		if ( person.flagged ) {
			person.flagged = false;
		} else {
			person.flagged = true;
		}
		console.log($scope.filteredHero)

	}

	// ============================ //
	//      CRUD                   //
	// =========================== //

	console.log($scope)
} ] );

