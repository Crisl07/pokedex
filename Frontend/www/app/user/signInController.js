(function () {
  "use strict";

  angular
    .module("pokedexApp")
    .controller("signInController", [
      "user",
      "$state",
      signInController
    ]);

  function signInController(user, $state) {
    var vm = this;
    vm.user = {
      name: null,
      email: null,
      password: null
    };

    vm.postUser = newUser => {
      console.log(newUser);
      user
        .signInUser(newUser)
        .then(data => {
          alert("You have signed in successfully!");
          console.log(data);
          token = data.token;
          window.localStorage.setItem("jid", data.refreshToken);
        })
        .catch(err => {
          alert("Something went wrong");
          console.log("errooooor " + err);
        });
      $state.go("pokemons");
    };
  }
})();
