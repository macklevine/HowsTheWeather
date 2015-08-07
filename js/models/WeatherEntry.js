var WeatherEntry = Backbone.Model.extend({
  defaults: {
    'weather': '',
    'city': '',
    'zipcode': ''
  },

  convertToCelsius: function(){
    //would perform the conversion
  }
})

// var WeatherEntry = Backbone.Model.extend({

//   defaults: {
//     zipcode: '',
//     city: '',
//     weather: ''
//   },

//   initialize: function() {},

// });
