'use strict';

angular.module('myApp.newShipment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/newShipment', {
            templateUrl: 'views/newShipment/newShipment.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);