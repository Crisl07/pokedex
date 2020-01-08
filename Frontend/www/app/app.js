var token;
var refreshToken;

angular
  .module("pokedexApp", ["ionic"])

  .run($ionicPlatform => {
    $ionicPlatform.ready(function () {
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

  .factory("httpRequestInterceptor", httpRequestInterceptor)

  .config(($stateProvider, $urlRouterProvider, $httpProvider) => {

    $httpProvider.interceptors.push('httpRequestInterceptor');

    $stateProvider
      .state("signIn", {
        url: "/signin",
        templateUrl: "app/user/signIn.html"
      })

      .state("signUp", {
        url: "/signup",
        templateUrl: "app/user/signUp.html"
      })

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

    $urlRouterProvider.otherwise(function ($injector) {
      var httpService = $injector.get('$http');
      var stateService = $injector.get('$state');
      refreshToken = window.localStorage.getItem("jid");

      httpService
        .post("http://localhost:5000/user/refresh_token", { refreshToken })
        .then(function (data) {
          window.localStorage.setItem("jid", data.data.refreshToken)
          token = data.data.accessToken;
          if (token) {
            stateService.go("pokemons");
          } else {
            stateService.go("signIn");
          }
        })
        .catch(function (err) {
          console.log(err);
        })
    });
  });

httpRequestInterceptor.$inject = [];

function httpRequestInterceptor() {
  return {
    request: function (config) {

      config.headers['Authorization'] = token;
      return config;
    }
  }
}