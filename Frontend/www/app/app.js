angular
  .module("pokedexApp", ["ionic"])

  .run($ionicPlatform => {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs).
      // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
      // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
      // useful especially with forms, though we would prefer giving the user a little more room
      // to interact with the app.
      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
      }
    });
  })

  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state("pokemons", {
        url: "/pokemons",
        templateUrl: "app/pokemons/allPokemons.html"
      })

      .state("pokemonsType", {
        url: "/pokemons/:id",
        templateUrl: "app/pokemons/pokemonType.html"
      })

      .state("pokemon", {
        url: "/pokemon/:id",
        templateUrl: "app/pokemons/pokemonDetails.html"
      })

      .state("createpokemon", {
        url: "/createpokemon",
        templateUrl: "app/pokemons/createPokemon.html"
      })

    $urlRouterProvider.otherwise("/pokemons");
  });
