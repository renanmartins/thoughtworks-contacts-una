module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/bower_components/jquery/jquery.min.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/underscore/underscore.js',
      'app/js/controllers/controllers.js',
      'app/js/controllers/add-contact.js',
      'app/js/controllers/edit-contact.js',
      'app/js/controllers/view-contact.js',
      'app/js/controllers/list-contacts.js',
      'app/js/controllers/search-contacts.js',
      'app/js/directives/directives.js',
      'app/js/directives/focus.js',
      'app/js/directives/need-confirmation.js',
      'app/js/filters/tel.js',
      'app/js/factories/contacts.js',
      'app/js/app.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};