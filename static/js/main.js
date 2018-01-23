app = angular.module('app', [
    'ngResource',
    'ngRoute',])

// app.config(function($locationProvider) {
//     $locationProvider.html5Mode(true);
// });

app.config(function($routeProvider, $locationProvider) {
        // $locationProvider.html5Mode({
        //   enabled: true,
        //   $locationProvider.hashPrefix('!');
        // });

        $routeProvider.when(
            '/',
            {
                templateUrl : '/static/js/templates/index.html',
                controller  : 'DemoCtrl'
            }
        ).when(
            '/about', 
            {
                templateUrl : '/static/js/templates/about.html',
                controller  : 'DemoCtrl'
            }
        )
});


app.controller('DemoCtrl', ['$scope', '$http', function($scope, $http){
    //  $scope.num = 0;
    //  $scope.save = function(){
    //      $(".data").html("Click: " + $scope.num);
    //      $scope.num += 1;
    //  };

    // $scope.posts = [{
    //     user_name: 'Joe',
    //     title: 'Sample Post #1',
    //     content: 'This is the first sample post'
    //     }
    // 	,{
    //     user_name: 'Karen',
    //     title: 'Sample Post #2',
    //     content: 'This is another sample post'
	   //  }
    // ];
    // console.log($scope.posts);
    var data = $http.get('/api/post').then(
    	function(response){
    		console.log('response');
    		console.log(response);
    		$scope.posts = response.data;
    	},
    	function(errorResponse){
    		console.log(errorResponse);
    	}
    );
    // console.log($scope.data);


}]);
