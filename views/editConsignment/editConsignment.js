'use strict';

angular.module('myApp.editConsignment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/editConsignment', {
            templateUrl: 'views/editConsignment/editConsignment.html',
            controller: 'editConsignmentCtrl'
        });
    }])
    //---------THIS CONTROLLER COMMUNICATES WITH BOTH newShipment.js and myConsignments.js----//
    .controller('editConsignmentCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {

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

        //when deleting a product from the edit screen request user to confirm
        $scope.deleteEditProductPopUp = function(ev, index) {
            // Appending dialog to document.body to cover sidenav in docs app
            $mdDialog.show($scope.showPopUp(ev), index).then(function() {
                $scope.editProducts.products.splice(index, 1);
            });
        };

        $scope.showPopUp = function(ev){
            return confirm = $mdDialog.confirm()
                .title('Are you sure you want to delete?')
                .textContent('You cannot undo this action once you confirm')
                .targetEvent(ev)
                .ok('Confirm delete')
                .cancel('Cancel');
        };

        $scope.saveConsignments = function(consignments){

            if($scope.originPage === 'myConsignments'){
                window.localStorage.setItem('myConsignmentsConsignments',JSON.stringify(consignments));
            }

            else if($scope.originPage === 'newShipment'){
                window.localStorage.setItem('newShipmentConsignments',JSON.stringify(consignments));
            }
        };

        $scope.originPage = window.localStorage.getItem('originPage');
        //depending on the origin page (that is either myConsignments or newShipment) different local storages must be used
        $scope.setGetConsignments = function(){


            if($scope.originPage === 'myConsignments'){
                $scope.getConsignments = JSON.parse(window.localStorage.getItem('myConsignmentsConsignments'));
            }

            else if($scope.originPage === 'newShipment'){
                $scope.getConsignments = JSON.parse(window.localStorage.getItem('newShipmentConsignments'));
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