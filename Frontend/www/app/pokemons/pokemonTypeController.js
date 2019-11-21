(function() {
  "use strict";

  angular
    .module("pokedexApp")
    .controller("pokemonTypeController", [
      "pokemonApi",
      "$stateParams",
      pokemonTypeController
    ]);

  function pokemonTypeController(pokemonApi, $stateParams) {
    var vm = this;

    pokemonApi
      .getPokemonsByType($stateParams.id)
      .then(data => {
        vm.allPokemonsType = data;
      })
      .catch(err => {
        console.log("errooor" + err);
      });
  }
})();