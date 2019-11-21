(function() {
  "use strict";

  angular
    .module("pokedexApp")
    .controller("allPokemonsController", ["pokemonApi", allPokemonsController]);

  function allPokemonsController(pokemonApi) {
    var vm = this;

    pokemonApi.getPokemons()
    .then(data => {
      vm.allPokemons = data;
    })
    .catch(err => {
      console.log('errooor' + err);
    });
  }
})();
