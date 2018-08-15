'use strict';

angular.module('myApp.companyScans', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/companyScans', {
            templateUrl: 'views/scans/companyScans/companyScans.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);

