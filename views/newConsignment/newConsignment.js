'use strict';

angular.module('myApp.newConsignment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/newConsignment', {
            templateUrl: 'views/newConsignment/newConsignment.html',
            controller: 'newConsignmentCtrl'
        });
    }])

    .controller('newConsignmentCtrl', ['$scope', '$mdDialog', function($scope) {

        //adding products to the consignment

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
            window.localStorage.setItem('consignmentsStorage',JSON.stringify(consignments));
        }

        $scope.getConsignments = JSON.parse(window.localStorage.getItem('consignmentsStorage'));

/*
        $scope.showHideSerialNumbers = function(){
            $scope.getConsignments.products.showSerialNumbers = !$scope.getConsignments.products.showSerialNumbers;
        };
        */
        $scope.showHideSerialNumbers = function(product){
            
        }

        $scope.removeConsignment = function(consignment){

            $scope.index = $scope.getConsignments.indexOf(consignment);
            if ($scope.index > -1) {
                $scope.saveConsignments($scope.getConsignments.splice($scope.index, 1));
            }
        }


    }]);




/*
https://github.com/tkssharma/Angular-Common
(function () {
    'use strict';
    var app = angular.module('Angularapps');

    app.factory('$localStorage', ['$window', function($window) {
        return {
            set: function(key, value) {
                $window.localStorage[key] = value;
            },
            get: function(key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function(key) {
                return JSON.parse($window.localStorage[key] || '{}');
            },
            remove: function(key){
                delete $window.localStorage[key];
            }
        }
    }]);

})();
*/