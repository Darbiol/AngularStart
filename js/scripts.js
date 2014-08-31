// document.getElementById( 'show-modal' ).addEventListener( 'click', function () {
// 	var modal = document.getElementById('addHero-modal');
// 	var overlay = document.getElementById('overlay');
// 	toggleModal( overlay, modal, 'active' );
// } );

// document.getElementById( 'dismiss-modal' ).addEventListener( 'click', function () {
// 	var modal = document.getElementById('addHero-modal');
// 	var overlay = document.getElementById('overlay');
// 	toggleModal( overlay, modal, 'inactive' );
// } );

// document.getElementById('overlay').addEventListener( 'click', function () {
// 	var modal = document.getElementById('addHero-modal');
// 	var overlay = document.getElementById('overlay');
// 	toggleModal( overlay, modal, 'inactive' );
// } );

// var navArr = document.querySelectorAll('#tabs>ul>li>a');
// toggleNav(navArr);


// function toggleVisibility ( element ) {

// 	if( element.style.display === 'block' && element.style.visibility === 'visible' ) {
		
// 		element.style.display='none';
// 		element.style.visibility = 'hidden';
	
// 	}else {
// 		element.style.display='block';
// 		element.style.visibility = 'visible';
// 	}
// 	return;
// }

function toggleModal ( overlay, modal, state ) {
	toggleVisibility( modal );
	toggleVisibility( overlay );
	// active = modal is active
	if( state === 'active' ) {
		document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	}else {
		document.getElementsByTagName('body')[0].style.overflow = 'scroll';
	}		

	return;
}

// function toggleNav ( elementArr ) {

// 	for( var i=0; i< navArr.length; i++) {
		
// 		elementArr[i].addEventListener( 'click', function() {
// 			var listParent = this.parentNode;
// 			var grandParent = listParent.parentNode;
// 			var list = grandParent.childNodes;

// 			for( var j=0; j<list.length; j++ ){
// 				if( list[j].className === 'active' ) {
// 					list[j].setAttribute( 'class', '' );
// 				}
// 			}
// 			listParent.setAttribute( 'class', 'active' );
// 		} );
// 	}
// }