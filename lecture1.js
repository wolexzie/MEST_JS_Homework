/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var stCar = 'Doge'; // A variable cant start with a number
var vary = 'variable'; //"var" is reserved
var firstName = 'Jerry'; // variables should be camel case
var SchoolName = 'MEST'; //
var totalNumber = 100; // variables should be camel case 

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'It\'s nice to me you today!';// the string had a single quote in the string
var response = "Ashwin said, \"Yes Sir!";// the string has a double quote in the body


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here // This checks equality and typw
 */


/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */

 var pizza = {
 	name: 'peperonni',
 	price: '30',
 	size: 'medium',
 	weight: '12',

 }
var pizza = new Object();
pizza.name = 'peperonni';
pizza.price = '30';
pizza.size = 'medium';
pizza.weight = '12';

/////


/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

function Animal(specie, legs) {
	this.specie = specie;
	this.legs = legs;
}
var cow = new animal("mammal", 4);
var frog = new animal("amphibian", 2);


/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */

 var menu = prompt('items')
 switch (menu)
 	case 1:
 		alert('We have Banku');
 		break;
 	case 2:
 		alert('We have Wakkye');
 		break;
 	default:
 	alert('item you selected is not on the list');
 	break;



/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
 for (i=0, i<studentScores.length; 1++){
 	if (studentScores[i] <= 50){
 		alert('fail')
 	}
 	else if(studentScores[i] >=51 && studentScores[i] <= 80){
 		alert('pass')
 	}
 	else{
 		alert('marks not in range')
 	}
 }

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */