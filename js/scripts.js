document.getElementById( 'show-modal' ).addEventListener( 'click', function () {
	var modal = document.getElementById('addHero-modal');
	var overlay = document.getElementById('overlay');
	modal.style.display='block';
	modal.style.visibility = 'visible';
	document.getElementByTagName('body').style.overflow = 'hidden'
} );

document.getElementById( 'dismiss-modal' ).addEventListener( 'click', function () {
	var modal = document.getElementById('addHero-modal')
	modal.style.display='none';
	modal.style.visibility = 'hidden';
	document.getElementByTagName('body').style.overflow = 'auto'
} );