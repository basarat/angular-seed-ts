'use strict';
var View2Ctrl = (function () {
    function View2Ctrl() {
    }
    View2Ctrl.$inject = [];
    return View2Ctrl;
})();
angular.module('myApp.view2', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])
    .controller('View2Ctrl', View2Ctrl);
