// ==============< data type & memory >=================================
// ***************< 1) memory stack >*************************
// example 1)
class nums1 {
  brintNumber(num) {
    const str = "your number is ";
    return `${str}: ${num}`;
  }
}
function Main1() {
  let num = new nums1();
  console.log(num.brintNumber(152));
  console.log(num.brintNumber(400));
  console.log(num.brintNumber(210));
}
Main1();
/*
stack happens in excution times
it depend on last in ==> first out
main function in memory is excuted like==>
 1- 125
 2-your number is 
 when it is finished the data is rremoved like
 2- 125
 1-your number is 
*/
// example 2)
class nums {
  brintNumber(num) {
    if (num >= 1000) return;
    const str = "your number is ";
    console.log(`${str}: ${num}`);
    this.brintNumber(num + 100);
  }
}
function Main() {
  let num = new nums();
  num.brintNumber(400);
}
Main();

// example 3)
function one() {
  console.log("one");
}
function two() {
  one();
  console.log("two");
}
function three() {
  two();
  console.log("three");
}
three();
//result one  two  three
// for explaine look at code.drawio

// *******< 2) memory stack overflow >*******************

//it is the proccess of  occupying the stack by endlessly repeating the use of data
function foo() {
  // foo();
}
foo();
// ==============< Array >=================================
const numbers = new Array();
numbers[0] = 1522;
numbers[1] = 1662;
numbers[2] = numbers[0] + numbers[1];
numbers.forEach((num) => {
  console.log(num);
});
