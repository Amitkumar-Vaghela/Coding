//A higher-order function is a function that takes another function
// as an argument or returns a function as a result.

function greet(name) {
    return function(message) {
        console.log(`${name}, ${message}`);
    };
}

const greetJohn = greet("John");
greetJohn("welcome to the team!");  

// Output: John, welcome to the team!
