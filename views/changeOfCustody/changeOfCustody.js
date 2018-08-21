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

    }]);
