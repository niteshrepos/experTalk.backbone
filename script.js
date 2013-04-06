var Person = Backbone.Model.extend({
	defaults:{
		name :"nitesh",
		occupation :"web designer"
	},

	greet: function(){
		console.log(this.get("name"));
	},

	initialize: function(){
		console.log("init");
	}
});

var person = new Person({
	name: "mayank",
	occupation: "hr",
	age: 23
});




