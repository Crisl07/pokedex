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

    var reloadPage = () => {
      location.reload();
    };

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
          alert("Pokemon was deleted!");
          console.log(data);
        })
        .catch(err => {
          alert("Something went wrong");
          console.log("erroooor" + err);
        });
      $state.go("pokemons");
      $timeout(reloadPage, 1000);
    };
  }
})();
