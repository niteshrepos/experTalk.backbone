var Person = function(config){
	this.name = config.name;
	this.occupation = config.occupation;

};

Person.prototype.greet = function(){
	console.log(this.name);
};



