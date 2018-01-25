(function() {

  'use strict';

  angular
    .module('app.post.controller', [])
    .controller('PostCtrl', PostCtrl)
    .controller('PostDetailCtrl', PostDetailCtrl);
    
  PostCtrl.$inject = ['$scope', '$http', 'PostService'];

  function PostCtrl($scope, $http, Post) {
    var vm = this;
    var data = Post.query().$promise.then(
      function(response){
        $scope.posts = response;
      },
      function(errResponse){
        console.log(errResponse);
      }
    );
    
  }


  PostDetailCtrl.$inject = ['$scope', '$http', '$routeParams', 'PostService'];

  function PostDetailCtrl($scope, $http, $routeParams, Post) {
    var vm = this;
    Post.get({id: $routeParams.id}).$promise.then(
      function(response){
        $scope.post = response;
      },
      function(errResponse){
        console.log(errResponse);
      }
    );
    
  }

})();

