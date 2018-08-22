'use strict';

angular.module('myApp.changeOfCustody', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/changeOfCustody', {
            templateUrl: 'views/changeOfCustody/changeOfCustody.html',
            controller: 'changeOfCustodyCtrl'
        });
    }])

    .controller('changeOfCustodyCtrl', ['$rootScope', '$scope', '$mdToast', function($rootScope, $scope, $mdToast) {

        $scope.finishShipmentToast = function () {

            $mdToast.show(
                $mdToast.simple()
                    .textContent('Shipment added to my shipments')
                    .position('top right')
                    .hideDelay(2000)
            );
        };

        //i need to test this
        /*
        $rootScope.addShipment = function () {

            if($rootScope.shipments === undefined){
                $rootScope.shipments = [];
            }
            $rootScope.shipments.push($rootScope.temporaryCreatedShipment);
            $rootScope.temporaryCreatedShipment = null;
        };
        */
        $scope.alei ='';
        $scope.temporaryCreatedShipment = JSON.parse(window.localStorage.getItem('temporaryCreatedShipment'));

        $scope.addAleiToTemporaryCreatedShipment = function(){
            $scope.temporaryCreatedShipment.ALEI = $scope.alei;
        }

        $scope.addShipment = function () {

            if('shipments' in localStorage){
                $scope.shipments = JSON.parse(window.localStorage.getItem('shipments'));
            }
            else{
                $scope.shipments = [];
            }

            $scope.shipments.push($scope.temporaryCreatedShipment);
            window.localStorage.setItem('shipments', JSON.stringify($scope.shipments));
            $rootScope.temporaryCreatedShipment = null;
        };
    }]);
