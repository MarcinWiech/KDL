'use strict';

angular.module('myApp.newConsignment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/newConsignment', {
            templateUrl: 'views/newConsignment/newConsignment.html',
            controller: 'newConsignmentCtrl'
        });
    }])

    .controller('newConsignmentCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {

        $scope.products = [];

        $scope.addProduct = function() {

            $scope.serialNumbersArray = [];
            $scope.showSerialNumbers = false;

            for (var i = 0; i <$scope.nOI; i++){

                $scope.serialNumbersArray.push({'serialNumber': ''});

            };

            $scope.products.push({'iso8000Identifier': $scope.newProductName, 'NoI': $scope.nOI, 'batchNumber': $scope.batchNumber, 'serialNumbers': $scope.serialNumbersArray, 'showSerialNumbers':$scope.showSerialNumbers});
            $scope.serialNumbersArray = [];
            $scope.newProductName = '';
            $scope.nOI = '';
            $scope.batchNumber = '';
        };

        $scope.deleteProduct = function(index) {
            $scope.products.splice(index, 1);
        };


        $scope.showHideSerialNumbers = function(index){
            $scope.products[index].showSerialNumbers = !$scope.products[index].showSerialNumbers;
        };



    }]);