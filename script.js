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



var person = new Person({
	name: "mayank",
	occupation: "hr",
	age: 23
});

var personView = new PersonView({
	model: person
});

$("body").append(personView.el)



