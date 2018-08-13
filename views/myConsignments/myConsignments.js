'use strict';

angular.module('myApp.myConsignments', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/myConsignments', {
            templateUrl: 'views/myConsignments/myConsignments.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);