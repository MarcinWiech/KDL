'use strict';

angular.module('myApp.newShipment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/newShipment', {
            templateUrl: 'views/newShipment/newShipment.html',
            controller: 'newShipmentCtrl'
        });
    }])

    .controller('newShipmentCtrl', ['$scope', '$mdToast', function($scope, $mdToast) {

        //$scope.consignments = [];
        /*
        $scope.addConsignment = function() {
            var newConsignmentNumber = $scope.consignments.length+1;
            $scope.consignments.push({'id': 'Consignment number ' + newConsignmentNumber, 'name': 'Consignment number ' + newConsignmentNumber});
        };
        */
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



        $scope.addProduct = function(){

            $scope.temp = [];
        }


    }]);