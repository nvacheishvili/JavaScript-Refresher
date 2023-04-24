//How to declare an object - using {}
const person = {
    name: 'Nata',
    age: 26,
    // greet: () => {
    //     console.log("Hi my name is "+this.name); -- this.name refers to global scope, not the object's therefore it this.name here would be undefined
    // },
    greet: function() {
        //this.name here would have a value of Nata, since it refers to the scope of the object itself
        console.log("Hi my name is ", this.name)
    }
}

//See the output of a person
console.log(person);

//See the output of greet function
person.greet()
