(function() {
  "use strict";

  angular
    .module("pokedexApp")
    .controller("pokemonDetailsController", [
      "pokemonApi",
      "$stateParams",
      "$state",
      "$timeout",
      pokemonDetailsController
    ]);

  function pokemonDetailsController(
    pokemonApi,
    $stateParams,
    $state,
    $timeout
  ) {
    var vm = this;

    pokemonApi
      .getOnePokemon($stateParams.id)
      .then(data => {
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
          $timeout(location.reload());
        })
        .catch(err => {
          $state.go("pokemons");
          alert("Something went wrong");
          $timeout(location.reload());
          console.log("erroooor" + err);
        });
    };
  }
})();
