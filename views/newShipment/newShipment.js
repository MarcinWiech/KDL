'use strict';

angular.module('myApp.newShipment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/newShipment', {
            templateUrl: 'views/newShipment/newShipment.html',
            controller: 'newShipmentCtrl'
        });
    }])
    //-------THIS CONTROLLER IS USED SOLELY BY newShipment.html AND COMMUNICATES WITH editConsignment.js ONLY------
    .controller('newShipmentCtrl', ['$scope', '$mdToast', function($scope, $mdToast) {

        $scope.deleteConsignment = function(index) {
            $scope.consignments.splice(index, 1);
        };

        $scope.finishShipmentToast = function() {

            $mdToast.show(
                $mdToast.simple()
                    .textContent('Shipment added to my shipments')
                    .position('top right')
                    .hideDelay(2000)
            );
        };
        //----------------------------------COPIED FROM NEW CONSIGNMENT START------------------------------------------//
        $scope.products = [];

        $scope.addProduct = function() {

            $scope.serialNumbersArray = [];
            $scope.showSerialNumbers = false;

            for (var i = 0; i <$scope.nOI; i++){

                $scope.serialNumbersArray.push({'serialNumber': ''});

            }

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


        $scope.consignments = [];

        $scope.addConsignment = function() {

            if($scope.getConsignments !== null){
                $scope.consignments = $scope.getConsignments;
            }
            //add all the products as a new consignment to the consignments array
            $scope.consignments.push({'products' : $scope.products});

            //clear products so that the new consignment is empty
            $scope.products = [];

            //save consignments to the local memory
            $scope.saveConsignments($scope.consignments);
        };

        //save consignments to the local memory
        $scope.saveConsignments = function(consignments){
            window.localStorage.setItem('newShipmentConsignments',JSON.stringify(consignments));
        };

        $scope.getConsignments = JSON.parse(window.localStorage.getItem('newShipmentConsignments'));

        $scope.showProductSerialNumbers = function(product){
            product.showSerialNumbers = !product.showSerialNumbers;
        };


        $scope.removeConsignment = function(consignment){

            $scope.index = $scope.getConsignments.indexOf(consignment);
            if ($scope.index > -1) {
                $scope.currentConsignments = $scope.getConsignments;
                $scope.currentConsignments.splice($scope.index, 1);
                $scope.saveConsignments($scope.currentConsignments);
            }
        };

        $scope.setEditConsignment = function(index , originPage){

            window.localStorage.setItem('editedConsignmentIndex',index);
            window.localStorage.setItem('editedConsignment',JSON.stringify($scope.getConsignments[index]));
            window.localStorage.setItem('originPage', originPage);
        };


        $scope.deleteProductPopUp = function(ev, index) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Are you sure you want to delete?')
                .textContent('You cannot undo this action once you confirm')
                .targetEvent(ev)
                .ok('Confirm delete')
                .cancel('Cancel');

            $mdDialog.show(confirm, index).then(function() {
                $scope.products.splice(index, 1);
            });
        };

        $scope.deleteConsignmentPopUp = function(ev, index) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Are you sure you want to delete?')
                .textContent('You cannot undo this action once you confirm')
                .targetEvent(ev)
                .ok('Confirm delete')
                .cancel('Cancel');

            $mdDialog.show(confirm, index).then(function() {
                $scope.getConsignments.splice(index, 1);
                $scope.saveConsignments($scope.getConsignments);
            });
        };

        //----------------------------------FROM NEW CONSIGNMENT END------------------------------------------//

        $scope.shipment = {
            id : '',
            consignments : [],


        };





    }]);