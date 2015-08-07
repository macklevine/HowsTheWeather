var InputView = Backbone.View.extend({
  tagName: 'input', //what's the difference between this and el: '<input>'?

  events: {//any DOM events you can catch for the view.
    'keypress': 'keyAction'
  },

  initialize: function(){
    this.render()
  },

  render: function(){
    this.$el.attr('placeholder', 'Enter a zip code');
  },

  keyAction: function(e){
    var isEnterKey = (e.which === 13); //maps to the enter key.
    if (isEnterKey){
      //do something
      this.collection.addNewWeatherEntry(this.$el.val());
      this.$el.val();
    }
  }
})

// var InputView = Backbone.View.extend({

//   tagName: 'input',
//   // el: '<input>',

//   events: {
//     'keydown': 'keyAction',
//   },

//   initialize: function() {
//     this.render();
//   },

//   render: function() {
//     this.resetInput();
//     return this;
//   },

//   keyAction: function(e) {

//     var isEnterKey = (e.which === 13);

//     if(isEnterKey && !this.$el.val().trim().match(/^(?=.*[0-9].*)[0-9]{5}$/)) {

//       this.$el.attr({
//         placeholder: 'Sorry, zip code invalid.'
//       });
//       this.clearInput();

//     } else if(isEnterKey) {

//       this.collection.addWeatherEntry(this.$el.val());
//       this.resetInput();

//     }

//   },

//   resetInput: function() {
//     this.$el.attr({
//       placeholder: 'Enter a zip code'
//     });
//     this.clearInput();
//   },

//   clearInput: function() {
//     this.$el.val('');
//   }

// });
