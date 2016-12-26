 angular.module('YelpMe', []) 

.controller('MainController', ['$scope', '$http', '$log', ($scope, $http, $log) => {
  $scope.data = {};
  $scope.storage = [];

  $scope.apiCall = (city) => {
    return $http({
      method: 'POST',	
      url: '/api/food', 
      data: JSON.stringify($scope.data)
    }).then((returnedData) => {
      $scope.data.businesses = returnedData.data.businesses;
      return returnedData;
    });
  };

  $scope.addToBookMarks = () => {
    if ($scope.data.food === undefined && $scope.data.city === undefined) {
      $log.warn('Add search queries!');
    } else if ($scope.data.city === undefined) {
      $log.warn('Add search query to cities!');
    } else if ($scope.data.food === undefined) {
      $log.warn('Add search query!');
    } else {
      $scope.storage.push({
        food: $scope.data.food,
        city: $scope.data.city
      });
      $log.log('All search results have been added', $scope.storage);
    }
  };
 
}]);
