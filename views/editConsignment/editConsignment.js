'use strict';

angular.module('myApp.editConsignment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/editConsignment', {
            templateUrl: 'views/editConsignment/editConsignment.html',
            controller: 'editConsignmentCtrl'
        });
    }])

    .controller('editConsignmentCtrl', ['$scope', function($scope) {

    }]);