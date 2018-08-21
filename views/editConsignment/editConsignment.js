'use strict';

angular.module('myApp.editConsignment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/editConsignment', {
            templateUrl: 'views/editConsignment/editConsignment.html',
            controller: 'editConsignmentCtrl'
        });
    }])
    //---------THIS CONTROLLER COMMUNICATES WITH BOTH newShipment.js and myConsignments.js
    .controller('editConsignmentCtrl', ['$scope', function($scope) {

        $scope.editProducts = JSON.parse(window.localStorage.getItem('editedConsignment'));

        $scope.addProductToEdit = function() {

            $scope.setGetConsignments();

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

            if($scope.originPage === 'myConsignments'){
                window.localStorage.setItem('consignmentsStorage',JSON.stringify(consignments));
            }

            else if($scope.originPage === 'newShipment'){
                window.localStorage.setItem('creatingShipmentConsignments',JSON.stringify(consignments));
            }
        };

        $scope.originPage = window.localStorage.getItem('originPage');
        //depending on the origin page (that is either myConsignments or newShipment) different local storages must be used
        $scope.setGetConsignments = function(){


            if($scope.originPage === 'myConsignments'){
                $scope.getConsignments = JSON.parse(window.localStorage.getItem('consignmentsStorage'));
            }

            else if($scope.originPage === 'newShipment'){
                $scope.getConsignments = JSON.parse(window.localStorage.getItem('creatingShipmentConsignments'));
            }
        };

        $scope.consignmentIndex = window.localStorage.getItem('editedConsignmentIndex');

        $scope.addConsignmentFromEdit = function() {


            $scope.getConsignments[window.localStorage.getItem('editedConsignmentIndex')] = $scope.editProducts;

            //save consignments to the local memory
            $scope.saveConsignments($scope.getConsignments);
        }; //watch out for indexing issues

        $scope.doTheBack = function() {
            window.history.back();
        };

    }]);