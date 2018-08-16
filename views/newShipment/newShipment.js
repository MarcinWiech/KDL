'use strict';

angular.module('myApp.newShipment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/newShipment', {
            templateUrl: 'views/newShipment/newShipment.html',
            controller: 'newShipmentCtrl'
        });
    }])

    .controller('newShipmentCtrl', ['$scope', function($scope) {

        $scope.consignments = [];

        $scope.addConsignment = function() {
            var newConsignmentNumber = $scope.consignments.length+1;
            $scope.consignments.push({'id': 'Consignment number ' + newConsignmentNumber, 'name': 'Consignment number ' + newConsignmentNumber});
        };

        $scope.deleteConsignment = function(index) {
            $scope.consignments.splice(index, 1);
        };

    }]);