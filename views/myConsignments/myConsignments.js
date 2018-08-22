'use strict';

angular.module('myApp.myConsignments', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/myConsignments', {
            templateUrl: 'views/myConsignments/myConsignments.html',
            controller: 'myConsignmentsCtrl'
        });
    }])

    .controller('myConsignmentsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    }]);