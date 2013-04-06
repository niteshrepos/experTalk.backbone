var Person = Backbone.Model.extend({
	defaults:{
		name :"nitesh",
		occupation :"web designer"
	},

	greet: function(){
		console.log(this.get("name"));
	},

});

var PersonView = Backbone.View.extend({
	tagName: "li",

	id: "person",

	template: _.template("<b><%= name %></b> <i><%= occupation %></i>"),

	className :"person",

	initialize: function(){

		var html = this.template(this.model.toJSON())
		this.$el.html(html);

		// this.$el.html(this.model.get("name")+this.model.get("occupation") );
	}
});



var People = Backbone.Collection.extend({
	model: Person
});

var PeopleView =Backbone.View.extend({
	tagName: "ul",

	initialize: function(){
		this.collection.each(function(person){
			var personView = new PersonView({
				model: person
			});

			this.$el.append(personView.el);
		},this)
	}
});

var people = new People([{
	name: "nitesh",
	occupation: "web designer"
},{
	name: "sanjeev",
	occupation: "dev"
}]);


var peopleView = new PeopleView({
	collection: people
})

$("body").append(peopleView.el)