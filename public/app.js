 angular.module('EatMe', []) 


.controller('MainController', function($scope, $http) {
   $scope.data = {};
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
  }
});
