(function() {

  'use strict';

  angular
    .module('app.post.service', ['ngResource'])
    .factory('PostService', PostService);
    

  PostService.$inject = ['$resource'];

  function PostService($resource) {
    return $resource(
      '/api/post/:id',
      {id: '@id'},
      {
        'update': {method: 'PUT'}
      }
    );
  }


})();