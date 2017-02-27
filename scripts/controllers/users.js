/* 
 * Users Listing
 */

MainApp.controller('usersListController', function ($scope, $http) {

    /*$scope.users = [
     {
     id: 1,
     name: "Manoj Kumar",
     email: "manoj@gmail.com",
     dob: "15/09/1986",
     phone: "12323235",
     address: "Mohali, Punjab, India, 123234",
     },
     {
     id: 2,
     name: "Anil Kumar",
     email: "manoj@gmail.com",
     dob: "15/09/1986",
     phone: "12323235",
     address: "Mohali, Punjab, India, 123234",
     },
     {
     id: 3,
     name: "Sunil Kumar",
     email: "manoj@gmail.com",
     dob: "15/09/1986",
     phone: "12323235",
     address: "Mohali, Punjab, India, 123234",
     },
     {
     id: 4,
     name: "Sunil Kumar",
     email: "manoj@gmail.com",
     dob: "15/09/1986",
     phone: "12323235",
     address: "Mohali, Punjab, India, 123234",
     },
     {
     id: 5,
     name: "Sunil Kumar",
     email: "manoj@gmail.com",
     dob: "15/09/1986",
     phone: "12323235",
     address: "Mohali, Punjab, India, 123234",
     },
     {
     id: 6,
     name: "Sunil Kumar",
     email: "manoj@gmail.com",
     dob: "15/09/1986",
     phone: "12323235",
     address: "Mohali, Punjab, India, 123234",
     },
     ];*/
    /*$http.get('assets/user.json').success(function (data) {
     $scope.users = data;
     });*/

    $http({
        method: 'GET',
        url: 'assets/user.json'
    }).then(function (response) {
        $scope.users = response.data;
    }, function (error) {
        console.log(error);
    });
}
);

/*
 * Directives for Users
 */
MainApp.directive("userinfo", function () {
    return {
        restrict: 'E',
        templateUrl: 'views/user.html'
    };
});