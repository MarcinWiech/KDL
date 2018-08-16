'use strict';

angular.module('myApp.newConsignment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/newConsignment', {
            templateUrl: 'views/newConsignment/newConsignment.html',
            controller: 'newConsignmentCtrl'
        });
    }])

    .controller('newConsignmentCtrl', ['$scope', function($scope) {

        $scope.products = [];

        $scope.addProduct = function() {
            $scope.products.push({'iso8000Identifier': $scope.newProduct, 'NoI': $scope.nOI});
            $scope.newProduct= '';
            $scope.nOI = '';
        };

        $scope.deleteProduct = function(index) {
            $scope.products.splice(index, 1);
        };

    }]);