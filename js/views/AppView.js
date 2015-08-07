var AppView = Backbone.View.extend({
  //$el: $('#app'),
  //selects the target element on the DOM.
  el: '#app',
  //above, Backbone turns $el into $('#app').
  //it's binding to an element that already exists.

  initialize: function(){
    //when we initialize the app view, we create a DOM node bound to our App View
    this.title = new TitleView();
    this.input = new InputView({
      collection: this.collection
    });
    this.list = new ListView({
      collection: this.collection
    }); //
    this.render();
  },

  render: function(){
    this.$el.append([
      this.title.$el,
      this.input.$el,
      this.list.$el
      ]);
  }
});