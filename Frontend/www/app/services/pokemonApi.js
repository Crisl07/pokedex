(function() {
  "use strict";

  angular
    .module("pokedexApp")
    .factory("pokemonApi", ["$http", "$q", "$stateParams", pokemonApi]);

  function pokemonApi($http, $q, $stateParams) {
    function getPokemons() {
      var defer = $q.defer();
      $http
        .get("http://localhost:5000/api/pokemons")
        .success(data => {
          defer.resolve(data);
        })
        .error(() => {
          console.log("errooor");
          defer.reject();
        });

      return defer.promise;
    }

    function getPokemonsByType(id) {
      var defer = $q.defer();
      $http
        .get("http://localhost:5000/api/pokemons/" + id)
        .success(data => {
          defer.resolve(data);
        })
        .error(() => {
          console.log("errooor");
          defer.reject();
        });

      return defer.promise;
    }
    function getOnePokemon(id) {
      var defer = $q.defer();
      $http
        .get("http://localhost:5000/api/pokemon/" + id)
        .success(data => {
          defer.resolve(data);
        })
        .error(() => {
          console.log("errooor");
          defer.reject();
        });

      return defer.promise;
    }

    function postPokemon(pokemonAttributes) {
      var defer = $q.defer();
      $http
        .post("http://localhost:5000/api/pokemon", pokemonAttributes)
        .success(data => {
          defer.resolve(data);
        })
        .error(() => {
          console.log("errooor");
          defer.reject();
        });

      return defer.promise;
    }

    function deleteOnePokemon(id) {
      var defer = $q.defer();
      $http
        .delete("http://localhost:5000/api/pokemon/" + id)
        .success(data => {
          defer.resolve(data);
        })
        .error(() => {
          console.log("errooor");
          defer.reject();
        });

      return defer.promise;
    }

    return {
      getPokemons: getPokemons,
      getPokemonsByType: getPokemonsByType,
      getOnePokemon: getOnePokemon,
      postPokemon: postPokemon,
      deleteOnePokemon: deleteOnePokemon
    };
  }
})();
