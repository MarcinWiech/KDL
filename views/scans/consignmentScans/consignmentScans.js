'use strict';

angular.module('myApp.consignmentScans', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/consignmentScans', {
            templateUrl: 'views/scans/consignmentScans/consignmentScans.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);

