//console.log(window);
//console.log(navigator.appVersion);
//console.log(geolocation);

//const s1 = 'Hello';
//console.log(typeof s1);

//const s2 = new String('hello');
//console.log(typeof s2);

//object literal
const book1 = {
	title : 'Book 1',
	auhtor: 'chandan kr',
	year: '2013',
	getSummary : function(){
		return `$(this.title) was written by $(this.author) in $(this.year)`;
	} 
}
console.log(book1.getSummary());