// creating multidimensional array
var fruit = [ ["apples","banana"],["kiwi","peach"],["pear","oranges"]]
console.log("my fruits are: " + fruit[0][0]  + " " + fruit[1][0])

// creating 2 loops to display fruits
	for (var i = 0; i < fruit[0].length; i++) {
console.log(fruit[0][i]);
};

or (var i = 0; i < fruit[1].length; i++) {
console.log(fruit[1][i]);
};

// creating a while loop
	var beer = 100;
	while (beer > 0) {
	console.log(beer + " bottles of beer on the wall" + beer + " bottles of beer...take one down pass it around...");
	beer--;
    };

 // variable scope
 	scope();
	var globalVariable = "Happy programming!!";
	console.log(globalVariable)
	function scope() {
	var local = "Learning to code"
	console.log(local)
    };
// function that accepts string as an argument and check it for vowels
var vowels = "fjeiaojfouea";
	function vChecker() {
		console.log("vowel at index of " + vowels.indexOf("a"));
		console.log("vowel at index of " + vowels.indexOf("e"));
		console.log("vowel at index of " + vowels.indexOf("i"));
		console.log("vowel at index of " + vowels.indexOf("o"));
		console.log("vowel at index of " + vowels.indexOf("u"));
	};
// program to validate date input
var day = 30;
var year = 2015;
var month = 12;
//function date(day, month, year) {
if (day < 32 && day.toString().length === 2) {
console.log('Valid day');
} 
else {
console.log('Invalid day');
}
if (month < 13 && month.toString().length === 2) {
console.log('Valid Month');
} 
else {
console.log('Invalid Month');
}
if (year < 2016 && year.toString().length === 4) {
console.log('Valid Year');
} 
else {
console.log('Invalid Year');
};
//}