Package.describe({
  name: 'twbs:bootstrap-noglyph',  // http://atmospherejs.com/twbs/bootstrap-noglyph
  summary: 'Bootstrap without the Glyphicons font (official): the most popular HTML/CSS/JS responsive framework',  // limited to 100 characters
  version: '3.3.5',
  git: 'https://github.com/MeteorPackaging/twbs-bootstrap-noglyph.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');

  api.use([
    'jquery',
  ], ['client']);

  api.imply([
    'jquery',
  ], ['client']);

  api.addFiles([
    'upstream/dist/css/bootstrap.css',
    'upstream/dist/js/bootstrap.js',
  ], 'client');
});

Package.on_test(function(api) {
  api.use('twbs:bootstrap-noglyph');

  api.use([
    'tinytest',
    'http',
  ], ['client']);

  api.add_files([
    'tests/tests.js',
  ], ['client']);
});
