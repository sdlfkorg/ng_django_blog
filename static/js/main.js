app = angular.module('app', [])

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
