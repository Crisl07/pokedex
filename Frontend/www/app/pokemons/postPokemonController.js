(function() {
  "use strict";

  angular
    .module("pokedexApp")
    .controller("postPokemonController", ["pokemonApi", "$state", postPokemonController]);

  function postPokemonController(pokemonApi, $state) {
    var vm = this;
    vm.pokemon = {
      name: null,
      img: null,
      description: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      typeId: null
    };
    vm.postData = (pokemonAttributes) => {
      console.log(pokemonAttributes);
      pokemonApi
        .postPokemon(pokemonAttributes)
        .then(data => {
          $state.go("pokemons");
          console.log(data);
        })
        .catch(err => {
          $state.go("pokemons");
          console.log("erroooor" + err);
        });
    };
  }
})();
