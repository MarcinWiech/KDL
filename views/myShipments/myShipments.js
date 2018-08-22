'use strict';

angular.module('myApp.myShipments', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/myShipments', {
            templateUrl: 'views/myShipments/myShipments.html',
            controller: 'myShipmentsCtrl'
        });
    }])

    .controller('myShipmentsCtrl', ['$scope', '$rootScope', function($scope, $rootScope){


        $scope.savedShipments = JSON.parse(window.localStorage.getItem('shipments'));

    }]);