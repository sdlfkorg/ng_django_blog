(function() {
  
  'use strict';
  
  angular
    .module('app', ['ngResource', 'ngRoute', 'app.post.service'])
    .config(RouterConfig)
    .controller('DemoCtrl', DemoCtrl);


  RouterConfig.$inject = ['$routeProvider', '$locationProvider'];
  
  function RouterConfig($routeProvider, $locationProvider) {
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
        }
      );
  }

  DemoCtrl.$inject = ['$scope', '$http', 'PostService'];

  function DemoCtrl($scope, $http, Post){

    var data = Post.query().$promise.then(
      function(response){
        console.log('response from resource');
        console.log(response);
        $scope.posts = response;
      },
      function(errResponse){
        console.log(errResponse);
      }
    );

    // var data = $http.get('/api/post').then(
    //   function(response){
    //     console.log('response');
    //     console.log(response);
    //     $scope.posts = response.data;
    //   }
    // );

  }
  
})();