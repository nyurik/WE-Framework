/**
 * This JavaScript is a loader of EditionEditor from WE-Framework, works only
 * for other sites (ruwiki users should use local gadgets)
 *
 * @see https://github.com/vlsergey/WE-Framework
 * @author vlsergey
 */
( function() {

	/** @const */
	var version = 1479771615;

	try {
		mw.loader.addSource( "wiki", "/w/load.php" );
		mw.loader.addSource( "ruwiki", "//ru.wikipedia.org/w/load.php" );
		mw.loader.register( 'ext.gadget.wefcore', version, [ 'jquery.ui.autocomplete', //
		'jquery.ui.dialog', //
		'jquery.ui.tabs', //
		'jquery.uls.data', //
		'mediawiki.ForeignApi', //
		], undefined, 'wiki' );
		mw.loader.register( 'ext.gadget.wefflags', version, undefined, undefined, 'ruwiki' );
	} catch ( error ) {
		// already registered
	}

	mw.loader.register( 'ext.gadget.wef-TagEditor', version, [ 'ext.gadget.wefcore', 'ext.gadget.wefflags' ], undefined, 'wiki' );

	mw.loader.using( [ //
	'ext.gadget.wefcore', //
	'ext.gadget.wefflags', //
	'ext.gadget.wef-TagEditor' //
	], function() {
		console.log( '[WE-F] all WE-F modules were loaded' );
	}, function() {
		console.log( '[WE-F] unable to load WE-F functions: ' );
		console.log( arguments );
	} );

} )();
