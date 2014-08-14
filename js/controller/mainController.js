app.controller( 'MainController', function ( $scope ) {
	$scope.selectedPerson = 0;
	$scope.selectedGenre  = null;
	$scope.people	      = [
		{
			'id'        : 0,
			'firstName' : 'Bruce',
			'lastName'  : 'Wayne',
			'heroName'  : 'Batman',
			'Powers'    : [
				'Martial Artist',
				'Acrobatics',
				'Wealthy',
				'High IQ'
			],
			'flagged' : true
		},
		{
			'id'        : 1,
			'firstName' : 'Diana',
			'lastName'  : 'of Themyscira',
			'heroName'  : 'Wonderwoman',
			'Powers'    : [
				'Flying',
				'Cowgirl',
				'Pilot',
				'Super female strength'
			],
			'flagged'   : true
		},
		{
			'id'        : 2,
			'firstName' : 'Barry',
			'lastName'  : 'Allen',
			'heroName'  : 'Flash',
			'Powers'    : [
				'Lightning speed',
				'Time travel',
				'Lightning Reflexes',
			],
			'flagged'   : true
		},
		{
			'id'        : 3,
			'firstName' : 'Clark',
			'lastName'  : 'Kent',
			'heroName'  : 'Superman',
			'Powers'    : [
				'Flying',
				'Bullet speed',
				'Bullet proof',
				'Ice breath',
				'Heat vision',
				'X-ray vision',
				'Superhuman strength'
			],
			'flagged'   : true
		},
		{
			'id'        : 4,
			'firstName' : 'Hal',
			'lastName'  : 'Jordan',
			'heroName'  : 'Green Lantern',
			'Powers'    : [
				'Power Ring',
				'Imaginative',
				'String Willed',
			],
			'flagged'   : false
		}
	];
	$scope.newPerson = null;
	$scope.addNew = function () {
		if ( $scope.newPerson != null && $scope.newPerson != "" ) {
			$scope.people.push( {
				'id' : $scope.people.length,
				'name' : $scope.newPerson,
				'flagged' : true,
				'Powers' : []
			} );
		}
	}
	$scope.showModal = function () {
		console.log(this)
	}
} );