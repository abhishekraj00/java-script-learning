/*  26/10/23

data types
let var const
how code actually runs in the javascript
lexical enve,functional ,block  // scope
function types
arrow function
function expression and function declaration

data types
primetive and non-primitive

primetive nn,ss,bb,u
number , null , String ,Symbol ,big number, boolean,undefined

non-primitive
Object ,Array

primitive data types store value and when 
we create new variable  and copy then it asign only value ;

non-primitive :- on other handes non-primitive 
store addresses of declared variables.

example 

primitive data types

let a = 14;
let b = a; 

b= 15;
console.log(a); // 14

both will print value 14 but these two don't have any connection between them

non primitive data types





let obj = {
  name: "foo",
  roll: 34,
};

let obj2 = obj; // shallow copy

let obj3 = { ...obj }; // deep copy

let obj4 = JSON.parse(JSON.stringify(obj));

obj.name = "ashu";

console.log(obj2); // { name: "foo", roll: 34}

console.log(obj4);


var let const 

var
// redecration allowed 

var name = "abhi";
var name = 'ashu';

// update allowed
name = 'raj'

// hoisting allowed

console.log(roll); // print undefined due hoisting
roll = 34; // global scrope var keyword
var roll;

// use variables before its declration is allowed

let 
// redecration not allowed 
// use variables before its declration is not allowed (temporal dead zone)
// reinitialization allowed
// update allowed
// hoisting allowed

initialization and assign value must be in a single line 


const 
// redecration not allowed 
// use variables before its declration is not allowed (temporal dead zone)
// reinitialization not allowed
// update not allowed
// hoisting allowed
initialization and assign value must be in a single line 





printName();

console.log('hello');

var name = "Abhi";

function printName(){
    console.log(name);
}

console.log('end')


//hello , abhi  ,end

// memory creation  (function and varible define undefined and goes on the lop of the parent)

// let name = undefinded  //
// fun = printName

// code execution
// run printName fun == undefinded 
// let name = 'Abhi'  //
// end 

//undefined hello end


printName()

var name = "ashu";

function printName(){
    console.log(raj);
    var raj = 'raj';
    let name = 'Abhi';
    console.log(raj,name);

}

printName()

// memory creation 
// var name = undefinded
// function printName;

//code exsecution

// printName
//   memory creation \\ code execution 
    
    // var raj = undefinded     // print undifined
    // let name = undifinded    // raj = 'raj'  name = 'Abhi'; // print raj,'Abhi'

// var name = 'ashu'

// printName
//   memory creation \\ code execution 
    
    // var raj = undefinded     // print undifined
    // let name = undifinded    // raj = 'raj'  name = 'Abhi'; // print raj,'Abhi'
    
    
    // undifieded raj abhi undifed raj abhi
    
    

*/
