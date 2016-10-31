/**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
 *  func(); // what is the output? Why?  // The function, func, is declared in the global scope (as it is declared outside a function), which is the window level scope.
So, THIS, points/refers to the window object
 *
 *  var obj = {
 *      func: func // what is the second func here? // An object was instantiated here
 *  };
 *
 *  obj.func(); //what is the output? try to explain why. // The output is the behaviour that the funtion funct() passes to the obj object
 *
 *  obj.func.bind(window)(); // what is the output? why? // Output is window. And it binds the function func to the window object
 *
 *  obj.func.bind(this)();  // what is the output? why? // Same as above
 *
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why? // It binds the func function to the people object
 */

/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */
  	input = "hi, welcome to mest";
 	input = input.split(" ");
 	for(var i = 0; i < input.length; i++){
 		console.log(input[i].slice(0,1).toUpperCase() + input[i].slice(1));
 	}

/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 */
 ^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
 

/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference
 */
 	For local storage, the data stored in localStorage persists until explicitly deleted.
    Changes made are saved and available for all current and future visits to the site.

    For sessionStorage, changes are only available per window (or tab in browsers like Chrome and Firefox).
    Changes made are saved and available for the current page, as well as future visits to the site on the same window.
    Once the window is closed, the storage is deleted. 