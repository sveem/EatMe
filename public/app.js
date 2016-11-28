 angular.module('EatMe', []) 


.controller('MainController', function($scope, $http) {
  // $scope.groupTable = true;
 $scope.food = "Pizza"

  $http.get('/api/food')
    .success(function(data) {
     console.log(data)
      $scope.food = data.businesses[0].name;
      $scope.address = data.businesses[0].location.address;
      $scope.city = data.businesses[0].location.city;
      $scope.image = data.businesses[0].image_url;

    })
    .error(function(data) {
      console.log('Error: ' + data);
    })
});



