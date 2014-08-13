app.controller( 'MainController', function ( $scope ) {
	$scope.selectedPerson = 0;
	$scope.selectedGenre  = null;
	$scope.people	      = [
		{
			'id'             : 0,
			'name'           : 'Bruce Wayne',
			'Superhero Name' : 'Batman',
			'Powers' : [
				'Martial Artist',
				'Acrobatics',
				'Wealthy',
				'High IQ'
			],
			'flagged' : true
		},
		{
			'id'             : 1,
			'name'           : 'Diana',
			'Superhero Name' : 'Wonderwoman',
			'Powers' : [
				'Flying',
				'Cowgirl',
				'Pilot',
				'Super female strength'
			],
			'flagged' : true
		},
		{
			'id'             : 2,
			'name'           : 'Barry Allen',
			'Superhero Name' : 'Flash',
			'Powers' : [
				'Lightning speed',
				'Time travel',
				'Lightning Reflexes',
			],
			'flagged' : true
		},
		{
			'id'             : 3,
			'name'           : 'Clark Kent',
			'Superhero Name' : 'Superman',
			'Powers' : [
				'Flying',
				'Bullet speen',
				'Bullet proof',
				'Ice breath',
				'Heat vision',
				'X-ray vision',
				'Superhuman strength'
			],
			'flagged' : true
		},
		{
			'id'             : 4,
			'name'           : 'Hal Jordan',
			'Superhero Name' : 'Green Lantern',
			'Powers' : [
				'Power Ring',
				'Imaginative',
				'String Willed',
			],
			'flagged' : false
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
} );  