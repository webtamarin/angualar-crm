/*
 * App JS file
 */
var MainApp = angular.module('MyApp', ['ui.bootstrap', 'ui.router']);



/*
 * Service for maintaining session
 */
MainApp.factory('userSession', function () {
    var userInfo = {};
    var loggedInStatus = false;
    return {
        setUserInfo: function (user) {
            userInfo = user;
            sessionStorage.setItem('userInfo', JSON.stringify(user));
        },
        getUserInfo: function () {
            return sessionStorage.getItem('userInfo');
        },
        setLoggedInStatus: function (status) {
            loggedInStatus = status;
            sessionStorage.setItem('loggedInStatus', loggedInStatus);
        },
        getLoggedInStatus: function () {
            return sessionStorage.getItem('loggedInStatus');
        }
    }
    ;
});

/*
 * Main App Config
 */
MainApp.config(["$urlRouterProvider", "$stateProvider",
    function ($urlRouterProvider, $stateProvider) {

        $stateProvider.state({
            name: 'dashboard',
            url: '/dashboard',
            controller: 'dashboardController',
            templateUrl: 'views/dashboard.html'
        }).state({
            name: "login",
            url: "/login",
            templateUrl: "views/login.html"
        }).state({
            name: "register",
            url: "/register",
            templateUrl: "views/register.html"
        }).state({
            name: "allusers",
            url: "/allusers",
            templateUrl: "views/allusers.html"
        }).state({
            name: "applyleave",
            url: "/apply-leave",
            templateUrl: "views/apply-leave.html"
        }).state({
            name: "profile",
            url: "/profile",
            templateUrl: "views/profile.html"
        });

        //helloWorldProvider.setUsername('Manoj');
    }

]);

/*
 * Main Body Controller
 */
MainApp.controller('mainBodyController', ['$scope', '$state', '$location', 'userSession',
    function ($scope, $state, $location, userSession) {

        $scope.loggedInStatus = userSession.getLoggedInStatus();
        //console.log('Status: ' + $scope.loggedInStatus);
        // console.log(userSession.getUserInfo());
    }]);
/*
 * Menu
 */
MainApp.controller('topMenuController', ['$scope', '$state', '$location', 'userSession',
    function ($scope, $state, $location, userSession) {
        $scope.login = function () {
            $state.go('welcome');
        };
        $scope.login = function () {
            $state.go('login');
        };
        $scope.register = function () {
            $state.go('register');
        };
        $scope.logout = function () {
            userSession.setLoggedInStatus(false);
            userSession.setUserInfo([]);
            $location.url('/login');
            window.location.reload();
        };

    }
]);
/*
 * Content View
 */

MainApp.controller('dashboardController', ['$scope', '$state', 'userSession', function ($scope, $state, userSession) {
        var userInfo = JSON.parse(userSession.getUserInfo());
        $scope.name = userInfo[0].name;

        $scope.apply_leave = function () {
            $state.go('applyleave');
        };
        $scope.profile = function () {
            $state.go('profile');
        };
        $scope.allusers = function () {
            $state.go('allusers');
        };

    }]);


MainApp.controller('contentAreaController', ['$scope', function ($scope, userSession) {
        //console.log(userSession.getUserInfo());
        //$scope.userInfo = userSessionService.setUserInfo([]);
    }]);

MainApp.controller('rightContentController', ['$scope', function ($scope, userSession) {
    }]);

MainApp.controller('profileController', ['$scope', function ($scope, userSession) {
    }]);