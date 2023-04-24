//constant variable array
const hobbies = ["reading", "cooking"];

//Adding one more element to the end of the array even though it's a constant
hobbies.push("programming");
console.log(hobbies); //no error about editing a constant value

//reference types only store an address pointing to the memory location where the array is stored
//when we change an array the address points to the same location in memory
//therefore, we are not actually editing the variable value, but the value its pointing to
//these rules also apply to objects

const hobbiesObject = {
    name: 'Nata',
    type: 'Programming'
}

//Adding a new property to the object
hobbiesObject.age = 26;

console.log(hobbiesObject);

//primitive type and not a reference type since this is a number
const number = 12
//reassigning this will not work since it is not a reference type variable
// number = 13;
