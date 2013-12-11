// Karma configuration
// Generated on Mon Dec 02 2013 14:30:57 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: 'public/javascripts',


    // frameworks to use
    frameworks: ['mocha', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: '*.js', included: false, served: true},
      {pattern: 'specs/**/*.js', included: false},
      {pattern: 'test-util/chai.js', included: false},
      {pattern: 'test-util/sinon-chai.js', included: false},
      {pattern: 'test-util/expect.js', included: false},
      {pattern: 'external/lodash.js', included: false},
      'test-util/sinon-1.7.3.js',
      'test-util/spec-main.js'
    ],

    plugins: [
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-requirejs'
    ],

    // list of files to exclude
    exclude: [
      'external/require.js',
      'main.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
