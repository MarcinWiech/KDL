'use strict';

angular.module('myApp.editConsignment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/editConsignment', {
            templateUrl: 'views/editConsignment/editConsignment.html',
            controller: 'editConsignmentCtrl'
        });
    }])

    .controller('editConsignmentCtrl', ['$scope', function($scope) {

        $scope.editProducts = JSON.parse(window.localStorage.getItem('editedConsignment'));

        $scope.addProductToEdit = function() {

            $scope.serialNumbersArray = [];
            $scope.showSerialNumbers = false;

            for (var i = 0; i <$scope.nOI; i++){

                $scope.serialNumbersArray.push({'serialNumber': ''});

            }

            $scope.editProducts.products.push({'iso8000Identifier': $scope.newProductName, 'NoI': $scope.nOI, 'batchNumber': $scope.batchNumber, 'serialNumbers': $scope.serialNumbersArray, 'showSerialNumbers':$scope.showSerialNumbers});
            //empty the array ready for the next product entry
            $scope.serialNumbersArray = [];
            $scope.newProductName = '';
            $scope.nOI = '';
            $scope.batchNumber = '';
        };

        $scope.deleteEditProduct = function(index) {
            $scope.editProducts.products.splice(index, 1);
        };

        $scope.saveConsignments = function(consignments){
            window.localStorage.setItem('consignmentsStorage',JSON.stringify(consignments));
        };

        $scope.getConsignments = JSON.parse(window.localStorage.getItem('consignmentsStorage'));

        $scope.consignmentIndex = window.localStorage.getItem('editedConsignmentIndex');

        $scope.addConsignmentFromEdit = function() {


            $scope.getConsignments[window.localStorage.getItem('editedConsignmentIndex')] = $scope.editProducts;

            //save consignments to the local memory
            $scope.saveConsignments($scope.getConsignments);
        }; //watch out for indexing issues

    }]);