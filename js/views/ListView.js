var ListView = Backbone.View.extend({
  // el: '<div>'
  // tagName: 'div'
  //if we don't say anything else, this view will actually be an empty div.
  //we don't need to do either of the above.
  id: 'list', //now it's an empty div with id="list"

  initialize: function(){
    this.listenTo(this.collection, 'add', this.render)//kind of like .on
    //but we don't have to pass 'this' in as an argument.
    this.render();
  },

  render: function(){
    //do something
    //when its collection property does something.
    //what about when the add event is triggered?
    //it can be listened to by any view that is bound to the collection!

    //this needs to create entry views using every model in this collection.
    this.$el.empty();

    this.entries = this.collection.map(function(model){
      return new EntryView({'model': model});
    })
    //this.entries is now equal to an array of entryviews.
    var $els = this.entries.map(function(entry){
      return entry.$el;
    })
    //now have a list of $els.
    //append them...
    this.$el.append($els); //can append array of dom nodes.
  }
})

// var ListView = Backbone.View.extend({

//   id: 'list',

//   initialize: function() {
//     this.listenTo(this.collection, 'add', this.render);
//     //this.collection.on('add', this.render, this);
//   },

//   render: function() {

//     this.$el.empty();

//     this.entries = this.collection.models.map(function(model) {
//       return new EntryView({
//         model: model
//       });
//     });

//     var $els = this.entries.map(function(entry) {
//       return entry.$el;
//     });

//     this.$el.append($els);

//     return this;
//   }

// });
