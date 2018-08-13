'use strict';

angular.module('myApp.myShipments', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/myShipments', {
            templateUrl: 'views/myShipments/myShipments.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);