'use strict';

angular.module('myApp.company', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/myConsignments', {
                templateUrl: 'views/company/html/myConsignments.html',
            })
            .when('/companyDashboard', {
                templateUrl: 'views/company/html/companyDashboard.html',
                //controller: 'companyDashboardCtrl'
            })
            .when('/3SCI', {
                templateUrl: 'views/company/html/3SCI.html',
                //controller: 'companyDashboardCtrl'
            })
            .when('/editConsignment', {
                templateUrl: 'views/company/html/editConsignment.html',
                //controller: 'companyDashboardCtrl'
            })
            .when('/finishedShipments', {
                templateUrl: 'views/company/html/finishedShipments.html',
            })
            .when('/manageOfferedShipments', {
                templateUrl: 'views/company/html/manageOfferedShipments.html',
            })
            .when('/map', {
                templateUrl: 'views/company/html/map.html',
            })
            .when('/myShipments', {
                templateUrl: 'views/company/html/myShipments.html',
            })
            .when('/newConsignment', {
                templateUrl: 'views/company/html/newConsignment.html',
                controller: 'newConsignmentCtrl'
            })
            .when('/changeOfCustody', {
                templateUrl: 'views/company/html/changeOfCustody.html',
                controller: 'changeOfCustodyCtrl'
            })
            .when('/employeesInvolved', {
                templateUrl: 'views/company/html/employeesInvolved.html',
            })
            .when('/newShipment', {
                templateUrl: 'views/company/html/newShipment.html',
                controller: 'newShipmentCtrl'
            })
            .when('/shipmentHistory', {
                templateUrl: 'views/company/html/shipmentHistory.html',
            })
            .when('/templates', {
                templateUrl: 'views/company/html/templates.html',
            })
            .when('/companyScans', {
                templateUrl: 'views/company/html/companyScans.html',
            })
            .when('/consignmentScans', {
                templateUrl: 'views/company/html/consignmentScans.html',
            });

    }])

    .controller('myConsignmentsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    }])

    .controller('dashboardCtrl', ['$scope', '$route', function ($scope, $route) {

        $scope.viewProductsOrCountries = false;
        $scope.location = $route.current.$$route.originalPath;
    }])

    .controller('editConsignmentCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {

    $scope.editProducts = JSON.parse(window.localStorage.getItem('editedConsignment'));

    $scope.addProductToEdit = function() {

        $scope.setGetConsignments();

        $scope.serialNumbersArray = [];
        $scope.showSerialNumbers = false;

        for (var i = 0; i <$scope.nOI; i++){

            $scope.serialNumbersArray.push('');

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
    }])

    .controller('myShipmentsCtrl', ['$scope', '$rootScope', function($scope, $rootScope){


        $scope.getShipments = JSON.parse(window.localStorage.getItem('shipments'));

    }])

    .controller('newConsignmentCtrl', ['$scope', '$mdToast', '$mdDialog', '$location', function($scope, $mdToast, $mdDialog, $location) {

        //the array of the products in the current (new) consignment
        $scope.products = [];

        //adding products to the consignment
        $scope.addProduct = function() {

            $scope.serialNumbersArray = [];
            $scope.showSerialNumbers = false;

            for (var i = 0; i <$scope.nOI; i++){

                $scope.serialNumbersArray.push('');

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
        $scope.showNoConsignmentsMessage = function(){
            if($scope.getConsignments.length === 0){
                return true;
            }

            return false;
        };

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

        $scope.setEditConsignment = function(index, originPage){

            window.localStorage.setItem('editedConsignmentIndex',index);
            window.localStorage.setItem('editedConsignment',JSON.stringify($scope.getConsignments[index]));
            window.localStorage.setItem('originPage', originPage)
        };

        $scope.addConsignmentToShipment = function(index){

            $scope.NewShipmentConsignments = JSON.parse(window.localStorage.getItem('newShipmentConsignments'));
            if ($scope.NewShipmentConsignments !== null) {
                $scope.NewShipmentConsignments.push($scope.getConsignments[index]);
                window.localStorage.setItem('newShipmentConsignments',JSON.stringify($scope.NewShipmentConsignments));
            }

            else {
                window.localStorage.setItem('newShipmentConsignments',JSON.stringify($scope.getConsignments[index]));
            }

            $scope.getConsignments.splice(index, 1);
            $scope.saveConsignments($scope.getConsignments);

            $mdToast.show(
                $mdToast.simple()
                    .textContent('Consignment added to new shipment')
                    .position('top right')
                    .hideDelay(2000)
            );
        };

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

        //need to test this
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
    }])

    //-------THIS CONTROLLER IS USED SOLELY BY newShipment.html AND COMMUNICATES WITH editConsignment.js ONLY------
    .controller('newShipmentCtrl', ['$scope', '$mdToast', '$mdDialog', '$rootScope', '$location', '$route', function($scope, $mdToast, $mdDialog, $rootScope, $location, $route) {

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

    $scope.canShowNewConsignment = false;

    $scope.showNewConsignment = function() {
        $scope.canShowNewConsignment = !$scope.canShowNewConsignment;
    };

    //----------------------------------COPIED FROM NEW CONSIGNMENT START------------------------------------------//
    $scope.products = [];

    $scope.addProduct = function() {

        $scope.serialNumbersArray = [];
        $scope.showSerialNumbers = false;

        for (var i = 0; i <$scope.nOI; i++){

            $scope.serialNumbersArray.push('');

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

    //different $scope variable than myConsignments
    $scope.getConsignments = JSON.parse(window.localStorage.getItem('newShipmentConsignments'));

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

    //when deleting a consignment request user to confirm
    $scope.deleteConsignmentPopUp = function(ev, index) {
        // Appending dialog to document.body to cover sidenav in docs app
        $mdDialog.show($scope.showPopUp(ev), index).then(function() {
            $scope.getConsignments.splice(index, 1);
            $scope.saveConsignments($scope.getConsignments);
        });
    };

    //----------------------------------FROM NEW CONSIGNMENT END------------------------------------------//

    //whenever the same controller is used somewhere else it sets shipments to an empty array. This prevented rootScope from working
    if ($route.current.$$route.originalPath === '/newShipment') {

        $scope.id = function () {
            // Math.random should be unique because of its seeding algorithm.
            // Convert it to base 36 (numbers + letters), and grab the first 9 characters
            // after the decimal.
            return Math.random().toString(36).substr(2, 20);
        };

        $scope.addTemporaryCreatedShipment = function(){
            window.localStorage.setItem('temporaryCreatedShipment',JSON.stringify({'consignments': $scope.getConsignments, 'ALEI': '', 'status': 'pending', 'id': $scope.id(), 'photo': '', 'history based on other objects': ''}));

            //reset consignments by overriding them with an empty array
            $scope.saveConsignments([]);
            $location.path('/changeOfCustody');
        }
    }

    /*
    //whenever the same controller is used somewhere else it sets shipments to an empty array. This prevented rootScope from working
    if ($route.current.$$route.originalPath === '/newShipment') {

        $scope.addTemporaryCreatedShipment = function(){
            $rootScope.temporaryCreatedShipment = {'consignments': $scope.getConsignments, 'ALEI': ''};
            //reset consignments by overriding them with an empty array
            $scope.saveConsignments([]);
            $location.path('/changeOfCustody');
        }
    }
    */
    $scope.removeConsignmentFromShipment = function(index){

        $scope.myConsignmentsConsignments = JSON.parse(window.localStorage.getItem('myConsignmentsConsignments'));
        if ($scope.myConsignmentsConsignments !== null) {
            $scope.myConsignmentsConsignments.push($scope.getConsignments[index]);
            window.localStorage.setItem('myConsignmentsConsignments',JSON.stringify($scope.myConsignmentsConsignments));
        }

        else {
            window.localStorage.setItem('myConsignmentsConsignments',JSON.stringify($scope.getConsignments[index]));
        }

        $scope.getConsignments.splice(index, 1);
        $scope.saveConsignments($scope.getConsignments);

        $mdToast.show(
            $mdToast.simple()
                .textContent('Consignment moved to my consignments')
                .position('top right')
                .hideDelay(2000)
        );
    };
}]);