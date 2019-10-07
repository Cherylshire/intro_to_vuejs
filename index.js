var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Mr.Vue!",
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
    number5: 0,
    number6: 0,
    number7: 0,
    number8: 0,
    sum: 0,
    showInfo: true,
    showCloak: true,
    movies: ["LotR", "HP", "PoC", "Star Wars"],
    newMovie: ""
  },
  methods: {
    calculationSum: function() {
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3) + parseInt(this.number4) + parseInt(this.number5) + parseInt(this.number6) + parseInt(this.number7) + parseInt(this.number8);
    },
    toggleCloak: function() {
      this.showCloak = !this.showCloak;
    },
    toggleInfo: function() {
        this.showInfo = !this.showInfo;
    },
    addMovie: function() {
      this.movies.push(this.newMovie);
      this.newMovie = "";
      }
    }
});

// // 52.toString();
// var num = 52; // set variable "an integer".
// num.toString(); // convert it into a string.
// parseInt("52") // convert it back to an integer.