 angular.module('EatMe', []) 


.controller('MainController', function($scope, $http) {
  // $scope.groupTable = true;
  // var food =  $scope.food;
  // var city = $scope.city;
  
  $scope.data = {};

  
//   $scope.SendData = function () {
// // use $.param jQuery function to serialize data from JSON 
//   var data = $.param({
//     food: $scope.food,
//     city: $scope.city
//   });
  

   //  var config = {
   //  headers : {
   //  'Content-Type': 'application/json;charset=utf-8;'
   //  }
   // }



   $scope.printFood= function(food, city) {
    console.log("++++++++++++++++++++++++++++>>FOOD and", $scope.food)
    return $scope.food;
   }

   $scope.printCity = function (city) {
  	console.log("++++++++++++++++++++++++++++++++++CITY>", $scope.city)
    console.log("CiTYyyyyyYYYYY", city);
    return $http({
    	method: 'POST',
    	url: "/api/food", 
    	data: $scope.data
    }).then(function(returnedData) {
       console.log("RETURNEDDATA",returnedData)
       return returnedData;
    })  
  }


  $http.get('/api/food')
    .success(function(data) {
     console.log("+++++++++++++++++++++++++ DATA", data)
     $scope.data = data;
     console.log($scope.data)
      // $scope.food = data.businesses[1].name;
      $scope.address = data.businesses[0].location.address;
      $scope.city = data.businesses[0].location.city;
      $scope.image = data.businesses[0].image_url;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    })
    
    // $scope.callAll = function() {

    // }
   
   // $http.post("/api/food", data)  
   // .success(function(data){
   //   console.log("DATA", data)


   //     }, 
   //     function(response){
   //       // failure callback
   //     }
    // )}

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