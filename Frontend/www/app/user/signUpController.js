(function() {
  "use strict";

  angular
    .module("pokedexApp")
    .controller("signUpController", [
      "user",
      "$state",
      "$timeout",
      signUpController
    ]);

  function signUpController(user, $state, $timeout) {
    var vm = this;
    vm.user = {
      name: null,
      email: null,
      password: null,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    vm.postUser = newUser => {
      console.log(newUser);
      user
        .signUpUser(newUser)
        .then(data => {
          alert("You have signed up successfully!");
          console.log(data);
        })
        .catch(err => {
          alert("Something went wrong");
          console.log("errooooor " + err);
        });
      $state.go("pokemons");
    };
  }
})();
