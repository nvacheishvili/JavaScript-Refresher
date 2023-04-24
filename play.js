//How to declare a variable?

var name = "Nata"; //example of string
var age = 26; //example of number
var userHobbies = true; //example of boolean

//Run this file in your terminal to see outputted result by console.log
//It should output: Nata
console.log(name, age, userHobbies);


var nameAgeCombination = name+age; //Global Variable
//How to declare a function
/***
 *
 * @param name - Name of the user
 * @param age - Age of the user
 * @returns {string} - would return a string such as Name is Nata, Age is 26
 */
function whoIsUser(name, age){
    /* console.log(nameAgeCombination) - This will be accessible since the variable is defined outside and would console log Nata26
       but if you were to define nameAgeCombination variable here instead and tried to access it outside of this function
       due to function scoping, this variable would be undefined.
     */
    return "Name is "+name+", Age is "+age;
}
// See the output of the function with given arguments of name and age
console.log(whoIsUser(name, age));

