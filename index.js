// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log(name);


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
let splitSentence = sentence.split(" ").map(str => str[0].toUpperCase()+str.substring(1)).join(" ");

console.log(splitSentence);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var number = Number(money.replace(/[^0-9.-]+/g,"")).valueOf();
console.log(number);
