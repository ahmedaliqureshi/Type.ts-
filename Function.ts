// we are going to create  a function in which we are going to pass 
// the arguments 

// but the nature of the fucntion is the different form the funciton of the JS

// so we will break it down here, how the funciton of the TS is working 

// the name of the function is greet and in the parathensis 
// the data type of the function is string and outside of the parenthesis
// the fucntion will return the string data type

function greet(names:string) : string
{
    return `hello,${names}!`;
}
let message = greet('world'); 
console.log(message); 