 angular.module('YelpMe', []) 


.controller('MainController', function($scope, $http) {
   $scope.data = {};
   $scope.storage = [];
   // $scope.bookMarks = {};
   // $scope.data.model = null;

   $scope.printCity = function (city) {
  	console.log("++++++++++++++++++++++++++++++++++CITY>", $scope.data.city)
    return $http({
    	method: 'POST',	
    	url: "/api/food", 
    	data: JSON.stringify($scope.data)
    }).then(function(returnedData) {
       console.log("RETURNEDDATA",returnedData)
       $scope.data.businesses = returnedData.data.businesses;
       // var parsedData = JSON.parse(returnedData)
       return returnedData;
    });
  };

     $scope.bookMark = function() {
    
    if($scope.data.food === undefined && $scope.data.city === undefined) {
      console.log("Add the search queries!");
    } 
    else if($scope.data.city === undefined) {
      console.log("Add a search query to the cities!");
    }
    else if ($scope.data.food === undefined) {
      console.log("Add a search query!");
    } 
    else {
      // $scope.bookMarks.food = $scope.data.food;
      // $scope.bookMarks.city = $scope.data.city;
      $scope.storage.push({
        food: $scope.data.food,
        city: $scope.data.city
      });
      console.log("All search result has been added", $scope.storage);
    }
  };
 
});
