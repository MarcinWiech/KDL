'use strict';

angular.module('myApp.newConsignment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/newConsignment', {
            templateUrl: 'views/newConsignment/newConsignment.html',
            controller: 'newConsignmentController'
        });
    }])

    .controller('newConsignmentController', ['$scope', function($scope) {

        $scope.products = [];

        $scope.addProduct = function() {
            $scope.products.push({'ISO': $scope.newProduct, 'NoI': $scope.nOI});
            $scope.newProduct= '';
            $scope.nOI = '';
        };

    }]);
