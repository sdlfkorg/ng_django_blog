(function() {
  
  'use strict';
  
  angular
    .module('app', ['ngResource', 'ngRoute', 'app.post.controller', 'app.post.service'])
    .config(RouterConfig);


  RouterConfig.$inject = ['$routeProvider', '$locationProvider'];
  
  function RouterConfig($routeProvider, $locationProvider) {
    $routeProvider.when(
      '/',
        {
            templateUrl : '/static/js/templates/index.html',
            controller  : 'PostCtrl'
        }
      ).when(
      '/posts/:id', {
          templateUrl: '/static/js/templates/post-detail.html',
          controller: 'PostDetailCtrl'
      })
      .when(
        '/about', 
        {
            templateUrl : '/static/js/templates/about.html',
        }
      );
  }
  
})();