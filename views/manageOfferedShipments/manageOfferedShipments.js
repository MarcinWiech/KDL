'use strict';

angular.module('myApp.manageOfferedShipments', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/manageOfferedShipments', {
            templateUrl: 'views/manageOfferedShipments/manageOfferedShipments.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);