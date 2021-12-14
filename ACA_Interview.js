/*

Welcome to Stage Two of the ACA interview process. 

The idea is to answer as many of the following questions as you can. The set of questions are to test your logic, reasoning and familiarity with javascript and some of its concepts. For all the questions ensure;

* Functions are to be completed as arrow functions
* To use Data Structures where applicable
* To use Ternary and Spread Operators where applicable
* BONUS - There is a React js question. Answer it for extra points.
*/

/** 
* Question 1
This function should return true if inputNumber is even, otherwise return false
*/

const isEven = function(inputNumber) {
// Write your code here
 
  //get input number and check if the number is divisible by 2 using remainder operator
  const rem = inputNumber % 2;
  
  //get the result of the remainder, if its 0 its true and if its 1 its false
  if (rem == 0){//if its even or boolean false is given as"false % 2 == 0"
    
    //alert the user to tell them the result of the function
    window.alert(inputNumber + " is Even.");
    
    //return the relevant boolean to the console
    return(true);
    
  }else if (rem == 1){//if its odd or boolean true is given as "true % 2 == 1"
    window.alert(inputNumber + " is Odd.");
    return(false);
    
  }else{//if it is a string
    window.alert(inputNumber + " is not a number!");
    return("Not a Number");
  }
}







/** 
* Question 2
This function should return true if inputNumber is does not have multiples beside 1 and itself only, otherwise return false
*/
const isPrime = function(inputNumber) {//please check your question, are you looking for multiples or factors????
// Write your code here
  
  
 //please check your question, I have never heard of prime multiples but factors instead!!!!!! *I pay attention to details...
  
  var factors = 0;
  var checkDigit = 0;
  var isMultiple;
  
  if (inputNumber == 1){//by the rules of Maths, 1 is not a prime number as it has ony 1 factor while prime numbers have exactly 2!
    window.alert(inputNumber + " is not a prime number!");
    console.log(inputNumber + " is not a prime number!");
    //return the relevant boolean to the console
    return(false);
  }else{//loop increment of numbers until we arrive at the number given
  while(checkDigit<inputNumber){
    checkDigit ++;
    isMultiple = inputNumber % checkDigit; //check if the number we are at divides the given number
    if (isMultiple == 0){//if it does, it is a factor!
      factors ++;//here we count the number of factors by increasing number of factors everytime we get a factor
    }else{
      continue;//continue the loop without increasing factors if number checked is not a factor
    }
  }
  
  if (factors > 2){//if it has more than 2 factors, it is not prime
    
    //alert the user to tell them the result of the function
    window.alert(inputNumber + " has " + factors + " factors therefore is not Prime.");
    console.log(inputNumber + " has " + factors + " factors therefore is not Prime.");
    //return the relevant boolean to the console
    return(false);
    
  }else{//if it has exactly 2, it is a prime number *condition for if it has one has been taken care of at the top
    window.alert(inputNumber + " has exactly " + factors + " factors therefore is Prime.");
    console.log(inputNumber + " has exactly " + factors + " factors therefore is Prime.");
    return(true);
  }
  }
}
//bigger numbers loop longer, will learn how to do a timeout script for longer looping scripts!!!!!!!!!









/**
* Question 3
You are required to complete the function below so that it checks if a string contain a number(s) in it.

* For example: For inputString=Alex, return false
* For inputString=Amazon49, return true
*/
const containsNumbers = function(inputString) {
// Write your code here
  const strLength = inputString.length;//get string length
  const iterte = strLength - 1;//subtract 1 from string length as array caharcters start from 0 and not 1
  var instringNumbers = 0;//initialize number count in string
  var i = 0;//start from 0
  while (i<=iterte){//get each character in string
  const charact  = inputString[i];
  const character = parseInt(charact);//convert character to an interger
  i ++;
  if (!isNaN(character)){//if the character parsed is a number/interger
    instringNumbers ++;//increase count of numbers inn the string
  }else{
    continue;//otherwise continue with the loop
  }
  }
  if (instringNumbers >=1){//if the number count is 1 or more then return true 
  console.log("There are " + instringNumbers + " numbers in the string.");
    return(true);
  }else{//return false if there is no number in the string
    console.log("There are no numbers in the string!");
    return(false);
  }
}





/**
* Question 4
* Your are required to complete the below function to determine if string inputString is a palindrome string or not. The function is expected to return true if the string it palindrom otherwise return false.

Example : For inputString = 101 , we should get true
* For inputString = abba, return true
* For inputString = abbb, return false
*/
const isPalindrome = function(inputString) {
// Write your code here
  
  //remove spaces between the string
  //remove the fixed string
  //compare the two string if they are the same
  
  
  
  
  var i = 0;//start from 0
  var fixedString = "";
  var character;
  const inputStrings = inputString.trim(); //remove white spaces on the left and right
  const strLength = inputStrings.length;//get string length
  const iterte = strLength - 1;//subtract 1 from string length because array charcters start from 0 and not 1
  while (i<=iterte){//get each character in string and concatenate again leaving space characters out
   character  = inputStrings[i];
    i ++;
    
  if ((character == ' ') || (character == '\t')){//if the character is a space, skip it
    continue;
  }else{//otherwise join the string
    fixedString += character;
  }
  }
  
   //lets reverse our fixed string
    var splitString = fixedString.split("");
    var reverseArray = splitString.reverse();
    var newString = reverseArray.join("");
  
    if (newString == fixedString){
      console.log(inputStrings + " is a Palindrome");
      return(true);
    }else{
      console.log(inputStrings + " is not a Palindrome");
      return(false);
    }
}


/**
* Question 5
Rot13 encryption
The ROT13 encoding shifts every letter by 13 places in the alphabet while leaving non-alpha characters untouched.
Encoding and decoding are done by the same function, passing an encoded string as argument will return the original version.

Example : Encoding "Alex@702" will result in "Nyrk@702"
You can read more on how rot13 works here https://en.wikipedia.org/wiki/ROT13
*/
const rot13Encoding = function(inputString) {
// Write your code here
  
  //lets first distribute alphabets to respective positions in an array
  var alphabets = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"];
  
  //declare all variables we will need
  const strLength = inputString.length;//get string length
  const iterte = strLength - 1;//subtract 1 from string length because array charcters start from 0 and not 1
  var newChar;
  var getter;
  var newPosition;
  var newString = "";
  var i = 0; //initialize iteration
  while (i<=iterte){//get all characters in string
   character  = inputString[i];
    i++;
  var position = alphabets.indexOf(character);// get position of all character in string on our alphabets array
    if (position == "-1"){//if character does not exist
      newString += character;//simply concatenate the character to our new encoded string
      
    }else{/*otherwise give us the position and add 26 to it, we add 26 because we used an array of
      capital and small letters which gives us a total of 52 alphabets and therefore making each 
      letter to double 13 to 26!*/
      
        newPosition = position + 26;//position for our new matching alphabet
      if (newPosition > 51){//if it exceed the total number of array items in alphabets
        
        newPosition = (position - 52 + 26);/*subtract 52 to start counting alphabets from 0 when we reach to last alphabet small z locating position 26 from the alphabet*/
        
        newChar = alphabets[newPosition]; //get the new alphabet letter
        newString += newChar; //concatenate it to our new encrypted string
      }else{
        newChar = alphabets[newPosition];
        newString += newChar;
      }
    }
  }
  console.log(inputString + " encrypts to " + newString);
  return(newString);//return the encrypted string
}


/**
* Question 6
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an *ampersand.

Example:

*list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

*list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

*list([ {name: 'Bart'} ])
// returns 'Bart'

*list([])
// returns ''
*/



//let us do a function which we will call for our given list, lets name it list1 because we will do another alternative code
const list1 = function(inputNames){
  //initialize variables to be used
  var outputString = '';
  var strLength = inputNames.length;
  if (strLength != 0){//check if string name list is not empty
    var position = strLength-1;
    var i = 0;
    while (i<=position){//look into each array item and get name
     if (i < (position-1)){//if it is not the last name, add a comma after the name
       var aName = inputNames[i];
       i++;
       theName = aName.name;
       outputString += theName + ", ";
      }else if(i == (position-1)){//when we get to the second last name, put an ampersand & instead of a comma after the name
       var aName = inputNames[i];
       i++;
       theName = aName.name;
       outputString += theName + " & ";
      }else{//when we get to the last name, just add it to the list and finish loop
       var aName = inputNames[i];
       i++;
       theName = aName.name;
       outputString += theName;
      }
    }
  }
  console.log("The list is " + outputString + "."); //log the names in a human understandable language.
  return(outputString);//return the list of names
}


//let us fo a function so that if anyone calls the list function specified above it will still run the program for them!
const list = function(inputNames){
  return(list1(inputNames));
}





//alternative code
const list2 = function(inputNames){
  var outputString = '';
  var strLength = inputNames.length;
  if (strLength != 0) {
    var last = inputNames.pop();
    outputString = inputNames.map( (val, i, arr) => {
      if (i !== arr[arr.length - 1]) {
        return val.name;
      }
    }).join(', ')
     
    outputString += outputString !== '' ? ' & ' + last.name : last.name + '.';
  }
  
  console.log(outputString);
  return(outputString);
}




/**
* Question 7
Bonus React question. Write a Fuction Component that takes in a property object and returns an element that say;
"My name is prop.firstName, I am a prop.collegeName and i can't wait to start at ACA"  
*/

//>>>>>>>
//I will leave this BONUS question for those who can be able to do it, as for me, I'm open to learning. 
//Please assist or teach me React js and I will do this problem without hesitation.
//<<<<<<<<