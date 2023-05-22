console.log("hello world")
/* data type and variable 
data types: 
undefined , null , boolean , string , symbol , number , and object 
*/
var myname= "beau"// can be changed and access all over the program
myname =8

let ourName= "freecode camp"// only in the scope
 
const pi= 3.14// can't be change 

/* storing vlues with assignment operator*/
var a=null;
var b=2;
console.log(a)
a=7;
b=a;
console.log(a)
// initializing variables w/ assignment operators
var a=9;
// uninitialize variable
var a=5;
var b=10
var c="i am a ";
a=a+1;
b=b+5;
c=c+" string!";
console.log(a);
console.log(b);
console.log(c);
// js is case sensitive var S and var s are different
var study=9
var Study=10
console.log(study)
console.log(Study)
// Add number
var sum= 10+10
console.log(sum)// same for sub , mul (*) and div(/)
//increment  and dec number
var myvar=69
myvar++
myvar--
// decimal number
var ourdecimal=5.5
//multiple decimal number
var product = 2.0*3.0
console.log(product)// same for div
//reminder in js
var remainder;
remainder =11 % 3;
console.log(remainder)
// compound assignment with augmented addition/subtraction/mul/div
var a =3;
var b= 17;
var c=12;
a+=12
b+=9;
c+=7;
a-=12;
b-=9;
c-=7;
a*=5;
b*=3;
c*=10;
console.log(a)
console.log(b)
console.log(c)
// declare string variable
var firstname="alan";
var lastname="pal";
//escaping literal quotes in strings
var mystr="I am a \"double quoted\" string inside \"double quoted\"" 
console.log(mystr)
//quoting strings with single quotes
var mystr='<a href="http://www.example.com"target="_blank">LINK</a>';
//escape sequence in strings
/****
 code output
 \'   single quote
 \"   double quote
 \\   backslash
 \n   newline
 \r   carriage return 
 \t   tab
 \b   backspace 
 \f   form feed
 ****/
var mystr="firstline\n\t\\secondline\nthird line"
console.log(mystr)
//concatenating strings with plus operator
var outstr= " I come first. "+ "i come second.";
console.log(outstr)
//concatenating strings with plus equals operators
var ourstr="i come fisrt";
ourstr+="icome second"
console.log(ourstr);
 //construct strings with variables
 var ourname="hi"
 var all="by"
 var call="my name "+ourname;
 console.log(call)
 //appending variables to strings
 //find the length of string
 var lastname="pal"
lastnamelength = lastname.length;
console.log( lastnamelength)
//bracket notation to find first character in string
var firstname="aniket"
firstletter=firstname[0]
console.log(firstletter)
//string immutablility
var mystr="jello world"
mystr[0]="H"
console.log(mystr)//no change jello world
//bracket notation to find nth character in string
var firstname="ada"
var lastletter = firstname[firstname.length - 1]
console.log(lastletter)
//bracket notation to find nth to last character in string
// wordblanks
function wordblanks(myNoun,myAdjective, myVerb){
    var result="";
    result+="the"+myAdjective+myNoun+myVerb;
    return result;
}
console.log(wordblanks("dog","cat","bull"));
//store multiple values with arrays
var myarray=["john",23];
//nested arrary
var myarray=[["the university",42],["everthing",1010]];
//access array data with indexes
var ourarray=[50,60,30]
console.log(ourarray[2])
//modify array data with indexes
var myarray=[40,30,10]
myarray[2]=20
console.log(myarray)
// access multi - dimensional arrays with indexes
var my=[[1,2],[2,2]]
console.log(my[0][0])
//manuplate arrays with push()
my.push([2,4])
// pop()
my.pop()//remove last element
// shift()
my.shift()//remvoe first element
// unshift()
my.unshift([3,4])//push the element in the start
//write reusable code with functions
function ourresource(){
    console.log("heyya,world")
}
ourresource();
ourresource();
ourresource();
//passing values to functions with arguments
function ourfunction(a,b){
    console.log(a-b);
}
ourfunction(15,6);
//global scope and functions
//global var access everywhere 
// we can declare an var without var keyword but then it will become global automatically
//local scope and functions
function mylocal(){
    var myvar=5;
    console.log(myvar);
}
mylocal();
//global vs local scope in function
// if we use same name for global and local var then local have more presence
// return a value from a function with return 
function minusSeven(num){
    return num-7;
}
console.log(minusSeven(10));
//understanding undefined value returned from a function
var sum=0;
function addThree(){
    sum=sum+3;
}
//assignment with a returned value
function change(num){
    return (num+5)/3;
}
processed = change(5);
console.log(processed);
//stand in line
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr=[1,2,3,4,5]
console.log("Before:"+JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After:"+JSON.stringify(testArr));
// boolean values
function welcomeToBooleans(){
    return false;
}
//use conditonal logic with if statements
function ourTrue(isItTrue){
    if(isItTrue){
        return "yes, it's true";
    }
    return "no, it's false"
}
console.log(ourTrue(false));
// comparison with equality operator
function testEqual(val){
    if(val == 12){
        return "Equal";
    }
    return "NOt equal";
}
console.log(testEqual(12));
// comparison with the strict equality operator
/* 3===3 */
function testStrict(val){
    if(val === 7){
        return "equal";
    }
    return " not equal";
}
console.log(testStrict(7));
//practice comparing different values
console.log(testStrict("7"));
//comparison with the inequality ooperator
function estStrict(val){
    if(val != 7){
        return "equal";
    }
    return " not equal";
}
console.log(estStrict(7));
// comparison with the strict inequality operator
function iestStrict(val){
    if(val !== 7){
        return "equal";
    }
    return " not equal";
}
console.log(iestStrict(8));
// comparisons with the logical and operator
//comparison with the greater than or equal to operator
//comparison with less than operator and less then equal too
/* >,>=,<,<= */
// comparison with logical operator
// if(val <= 50 && val>= 25)
// if(val < 10 || val>20 )
// if else 
function test(val){
    if(val> 10){
        return "greatro than 10";
    }
    else if (val<5){
        return "less than 5";
    }
    else {
        return "between ";
    }
}
console.log(test(9));
// logical order in if else statements
// golf code
// switch statement
function tcase(val){
    var answer = "";
    switch(val){
        case 1: 
           answer ="alpah";
           break;
        case 2:
            answer = "beta";
            break
        case 3: 
            answer = "cat";
            break;
        default:
            answer =" stop";
    }
    return answer;
}
console.log(tcase(3));
// multiple identicalo options in switch statements


//build javascript objects 
var dog={
    "name": "camper",
    "legs":4,
    "tails":1
}

//accessing object property with Dot notation
var hat=dog.name;
console.log(hat);
// with brcket notation
var entre= dog["name"]
console.log(entre);
// accesing object properties with variables
// update object properties
dog.name="julie"
console.log(dog.name)
dog.bark="bho-bho";
//delete properties
 delete dog.bark;
 // using objects for lookups
 function phone(val){
    var result ="";
  var lookup={
    "alpha": "adams",
    "bravo": "boston",
    "charlie": "chicago"
  }
  result =lookup[val];
  return result;
}
console.log(phone ("charlie"));