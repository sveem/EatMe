 angular.module('EatMe', []) 


.controller('MainController', function($scope, $http) {
  
   $scope.data = {};

   // $scope.printFood= function(food, city) {
   //  console.log("++++++++++++++++++++++++++++>>FOOD and", $scope.food)
   //  return $scope.food;
   // }

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

























 // $scope.findGroup = function(zipcode, category) {
 //      // ERROR HANDLING BEFORE SENDING A GET REQUEST TO API
 //      if (zipcode === undefined && category === undefined) {
 //        alert('Please select a category and enter zip code');
 //      } else if (category === undefined) {
 //        alert('Please select a category');
 //      } else if (zipcode === undefined) {
 //        alert('Please enter a zip code');
 //      } else if ( zipcode.match(/[a-z]/i) ) {
 //        alert('Please enter a valid zip code');
 //      } else {
 //        // VALIDATION PASSES
 //        // SEND REQUIRED SEACH PARAMATERS FOR API
 //        $http.get('/api/groups', {params: {category_id: $scope.selected.id, zip: $scope.zipcode}})
 //          .success(function(data) {
 //              $scope.groups = data;
 //              $scope.groupTable = false;
 //          })
 //          .error(function(errorData) {
 //            console.log('Error: ' + errorData);
 //          });
 //      }
 //    }  