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
          console.log(data);
        })
        .catch(err => {
          console.log("erroooor" + err);
        });
        $state.go("pokemons")
        timeout(location.reload(), 2000)
    };
  }
})();
