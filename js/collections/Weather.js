var Weather = Backbone.Collection.extend({
  model: WeatherEntry, //defines what model the collection holds.

  addNewWeatherEntry: function(zipcode){
    $.get(
      'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial',
      function(data){
        this.add({
          'zipcode': zipcode, //the one the person passed in.
          'weater': data.main.temp,
          'city': data.name
        }) //will create a weather model with those properties in this object.

      }.bind(this));
  }//bind it to the weather collection--not to JQuery.

})

// var Weather = Backbone.Collection.extend({

//   model: WeatherEntry,

//   addWeatherEntry: function(zipcode) {

//     $.get(
//       'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial',
//       function(data) {
//         this.add({         
//             zipcode: zipcode,
//             city: data.name,
//             weather: data.main.temp + '°F'
//           });
//       }.bind(this)
//     );
//   }

// });
