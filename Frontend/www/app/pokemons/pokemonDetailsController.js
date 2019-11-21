(function() {
  "use strict";

  angular
    .module("pokedexApp")
    .controller("pokemonDetailsController", [
      "pokemonApi",
      "$stateParams",
      "$state",
      pokemonDetailsController
    ]);

  function pokemonDetailsController(pokemonApi, $stateParams, $state) {
    var vm = this;

    pokemonApi
      .getOnePokemon($stateParams.id)
      .then(data => {
        console.log(data);
        vm.pokemon = data;
      })
      .catch(err => {
        console.log("erroooor" + err);
      });

    vm.deletePokemon = () => {
      pokemonApi
        .deleteOnePokemon($stateParams.id)
        .then(data => {
          $state.go("pokemons");
          alert(data.status);
        })
        .catch(err => {
          $state.go("pokemons");
          console.log("erroooor" + err);
        });
    };
  }
})();
