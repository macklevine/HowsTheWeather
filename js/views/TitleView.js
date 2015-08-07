var TitleView = Backbone.View.extend({
  el: '<h1>', //a totally new dom node by adding the brackets as opposed to an existing one

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.text("How's The Weather?");
  }
})

// var TitleView = Backbone.View.extend({

//   el: '<h1>',

//   initialize: function() {
//     this.render();
//   },

//   render: function() {
//     this.$el.text('How\'s the weather?');
//     return this;
//   }

// });
