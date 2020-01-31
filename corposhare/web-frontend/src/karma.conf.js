// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'pact', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('@pact-foundation/karma-pact')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        files: [
            'http://maps.googleapis.com/maps/api/js?sensor=false',
            'mocks/maps.googleapis.com-maps-api.js'
        ],
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, '../coverage'),
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        pact: [{
            cors: true,
            port: 1234,
            consumer: "ui",
            provider: "api/groups",
            dir: "target/pacts",
            spec: 2
        }],
        proxies: {
            '/api/groups': 'http://127.0.0.1:1234/api/groups'
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        browserNoActivityTimeout: 400000,
        browserDisconnectTolerance: 2
    });
};