// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 	'/scripts/lib/jquery',
        mustache: 	'/scripts/lib/mustache',
        text: 		'/scripts/lib/text'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main', 'utilities/compose'/*, 'events'*/]);