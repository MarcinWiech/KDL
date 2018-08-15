'use strict';

angular.module('myApp.employeesInvolved', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/employeesInvolved', {
            templateUrl: 'views/employeesInvolved/employeesInvolved.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);