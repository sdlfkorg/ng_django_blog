(function() {
  
  'use strict';
  
  angular
    .module('app', ['ngResource', 'ngRoute'])
    .config(RouterConfig)
    .controller('DemoCtrl', DemoCtrl);


  RouterConfig.$inject = ['$routeProvider', '$locationProvider'];
  
  function RouterConfig($routeProvider, $locationProvider) {
    //to allow vskyconsole protocol
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
        )
    
  }

  DemoCtrl.$inject = ['$scope', '$http'];

  function DemoCtrl($scope, $http){

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

  }
  
})();