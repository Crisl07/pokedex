(function() {
  "use strict";

  angular.module("pokedexApp").factory("user", ["$http", "$q", user]);

  function user($http, $q) {
    function signUpUser(user) {
      var defer = $q.defer();
      $http
        .post("http://localhost:5000/user/signup", user)
        .success(data => {
          defer.resolve(data);
        })
        .error(err => {
          console.log(err);
          defer.reject();
        });
      return defer.promise;
    }

    function signInUser(user) {
      var defer = $q.defer();
      $http
        .post("http://localhost:5000/user/login", user)
        .success(data => {
          defer.resolve(data);
        })
        .error(err => {
          console.log(err);
          defer.reject();
        });
      return defer.promise;
    }

    return {
      signUpUser,
      signInUser
    };
  }
})();
