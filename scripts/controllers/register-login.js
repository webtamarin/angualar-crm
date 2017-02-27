
/* 
 * Login JS
 */

MainApp.controller('loginFormController', function ($scope, $http, $location, userSession) {

    $scope.userInfo = userSession.getUserInfo();

    $scope.email = "";
    $scope.pass = "";
    $scope.remember = false;
    $scope.allUsers = {};
    var allUsers = {};
    $scope.submit = function () {
        var formData = {
            username: $scope.email,
            password: $scope.pass,
            remember: $scope.remember
        };
        $http({
            method: 'GET',
            //url: 'assets/user.json'
            url: 'http://localhost/angular/crm/php/response.php?data=login&username=' + formData.username + '&password=' + formData.password
        }).then(function (response) {
            user = response.data;
            userSession.setUserInfo(user);
            userSession.setLoggedInStatus(true);
            $location.url('/dashboard');            
        }, function (error) {
            console.log(error);
        });

    };
});



/*
 * Register JS 
 */
//var MyRegisterApp = angular.module('MyRegister', []);

MainApp.controller('registerFormController', function ($scope) {
    $scope.name = $scope.email = $scope.pass = $scope.cpass = $scope.phone = $scope.dob = $scope.address = "";
    // Datepicker
    $scope.today = function () {
        $scope.dob = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dob = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };
    function disabled(data) {
        var date = data.date,
                mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };
    function getDayClass(data) {
        var date = data.date,
                mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }

    $scope.submit = function () {
        var formData = [
            {
                name: $scope.name,
                email: $scope.email,
                password: $scope.pass,
                phone: $scope.phone,
                dob: $scope.dob,
                address: $scope.address,
            }
        ]
    };
});