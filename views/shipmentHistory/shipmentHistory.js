'use strict';

angular.module('myApp.shipmentHistory', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/shipmentHistory', {
            templateUrl: 'views/shipmentHistory/shipmentHistory.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);

