// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 	'lib/jquery',
        mustache: 	'lib/mustache',
        text: 		'lib/text',
        bootstrap:  'lib/bootstrap'
    },
    shim: {
    	bootstrap: ['jquery']
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main', 'utilities/compose', 'jquery', 'bootstrap' /*, 'events'*/]);