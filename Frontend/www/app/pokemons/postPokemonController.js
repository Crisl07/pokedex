(function() {
  "use strict";

  angular
    .module("pokedexApp")
    .controller("postPokemonController", [
      "pokemonApi",
      "$state",
      "$timeout",
      postPokemonController
    ]);

  function postPokemonController(pokemonApi, $state, $timeout) {
    var vm = this;
    vm.pokemon = {
      name: null,
      img: null,
      description: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      typeId: null
    };

    var reloadPage = () => {
      location.reload();
    };

    vm.postData = pokemonAttributes => {
      pokemonApi
        .postPokemon(pokemonAttributes)
        .then(data => {
          alert("Pokemon was created successfully");
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
