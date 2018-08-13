'use strict';

angular.module('myApp.finishedShipments', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/finishedShipments', {
            templateUrl: 'views/finishedShipments/finishedShipments.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);