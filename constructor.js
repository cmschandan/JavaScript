// Constructor
function Book(title, author, year){
	this.title = title;
	this.author = author;
	this.year = year;
	this.getSummary = function(){
		return `$(this.title) was written by $(this.author) in $(this.year)`;
	}
}

//instantiate 
const book1 = new Book('ramayan','Ramcharitmanas','2012');
const book2 = new Book('My Book','Self learner','2016');

//console.log(book1.getSummary());
console.log(window);