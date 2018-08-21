'use strict';

angular.module('myApp.newConsignment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/newConsignment', {
            templateUrl: 'views/newConsignment/newConsignment.html',
            controller: 'newConsignmentCtrl'
        });
    }])

    .controller('newConsignmentCtrl', ['$scope', '$mdToast', '$mdDialog', function($scope, $mdToast, $mdDialog) {

        //the array of the products in the current (new) consignment
        $scope.products = [];

        //adding products to the consignment
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

        //when deleting a product request user to confirm
        $scope.deleteProductPopUp = function(ev, index) {
            // Appending dialog to document.body to cover sidenav in docs app
            $mdDialog.show($scope.showPopUp(ev), index).then(function() {
                $scope.products.splice(index, 1);
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


        $scope.showHideSerialNumbers = function(index){
            $scope.products[index].showSerialNumbers = !$scope.products[index].showSerialNumbers;
        };

        //myConsignments.html
        $scope.getConsignments = JSON.parse(window.localStorage.getItem('myConsignmentsConsignments'));

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
            window.localStorage.setItem('myConsignmentsConsignments',JSON.stringify(consignments));
        };

        //when deleting a consignment request user to confirm
        $scope.deleteConsignmentPopUp = function(ev, index) {
            // Appending dialog to document.body to cover sidenav in docs app
            $mdDialog.show($scope.showPopUp(ev), index).then(function() {
                $scope.getConsignments.splice(index, 1);
                $scope.saveConsignments($scope.getConsignments);
            });
        };

        $scope.showProductSerialNumbers = function(product){
            product.showSerialNumbers = !product.showSerialNumbers;
        };

        $scope.downloadFile = function(downloadPath) {
            window.open(downloadPath);
        };

        $scope.finishConsignmentToast = function() {

            $mdToast.show(
                $mdToast.simple()
                    .textContent('Consignment added to my consignments')
                    .position('top right')
                    .hideDelay(2000)
            );
        };

        $scope.finishShipmentToast = function() {

            $mdToast.show(
                $mdToast.simple()
                    .textContent('Shipment added to my shipments')
                    .position('top right')
                    .hideDelay(2000)
            );
        };

        $scope.setEditConsignment = function(index, originPage){

            window.localStorage.setItem('editedConsignmentIndex',index);
            window.localStorage.setItem('editedConsignment',JSON.stringify($scope.getConsignments[index]));
            window.localStorage.setItem('originPage', originPage)
        };
    }]);