const greet = () => {
    console.log("Arrow functions provide a concise syntax for writing functions and do not bind their own this context.");
};

greet();  // Output: Hello, World!


// ex 2
var add = (a,b) =>  a+b;   // logic function
var result = add(123 , 7);
 console.log(result);  // output : 130
