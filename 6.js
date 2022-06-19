/*-----------------------------------------------------------------------------------------------------------------1*/
/*JavaScript program to construct the following pattern, using a for loop.*/
/*
let x=prompt("Enter the length ");
let n=parseInt(x);
for(let i=1;i<=x;i++){
for(let j=i;j>0;j--){
document.write("* ");
}
document.write("<br>");
}*/
/*-----------------------------------------------------------------------------------------------------------------2*/
/* for loop that will iterate from 0 to 15. current number is odd or even*/
/*
for(let i=0;i<=15;i++){
if(i%2==0){
document.write("Even number");
document.write("<br>");
}
else{
document.write("Odd number");
document.write("<br>");
}
}*/
/*-----------------------------------------------------------------------------------------------------------------3*/
/*JavaScript conditional statement to find the largest of five numbers. Display an 
alert box to show the result.*/
/*
const func = (arr) => {
let x = arr[0];
for (let i = 0; i < arr.length; i++)
{
if (x < arr[i])
x = arr[i];
}
alert(`${x} is the Largest Number`);
};
let arr = [];
for (let i = 0; i < 5; i++)
{
arr.push(parseInt(prompt(`Enter num ${i + 1}`)));
}
console.log(arr);
func(arr);
*/
/*-----------------------------------------------------------------------------------------------------------------4*/
/*print numbers backwards from 100 to 1 by skipping 2 
numbers i.e., 100 97 94 91 88 85 82 79. . . 22 19 16 13 10 7 4 1*/
/*
onst func = () => {
for (let i = 100; i >= 1; i -= 3) document.write(i + " ");
};
func();
*/
/*-----------------------------------------------------------------------------------------------------------------5*/
/*program to print all numbers backwards from 100 to 0 i.e., 100 99 98 97 96 . . . 4 3 2 1 0.*/
/*
const func = () => {
for (let i = 100; i >= 1; i -= 1)
{
document.write(i + " ");
}
};
func();
*/
/*-----------------------------------------------------------------------------------------------------------------6*/
/*a program to print alternate numbers starting from 1 to 99 i.e., 1 3 5 7 9 11 13 . . .
95 97 99*/
/*
const func = () => {
for (let i = 1; i <= 100; i+=2)
{
document.write(i + " ");
}
};
func();
*/
/*-----------------------------------------------------------------------------------------------------------------7*/
/*print alternate numbers starting from 0 to 100 i.e. 0 2 4 6 8 10 12 . . */
/*
const func = () => {
for (let i = 0; i <= 100; i+=2)
{
document.write(i + " ");
}
};
func();
*/
/*-----------------------------------------------------------------------------------------------------------------8a*/
/* program to accept a number N and print whether the number is EVEN or 
ODD.*/
/*
onst func = () => {
let n = parseInt(prompt("Enter a number"));
if (n % 2 == 0) console.log("EVEN");
else console.log("ODD");
};
func();
*/
/*-----------------------------------------------------------------------------------------------------------------8b*/
/*a program to accept two numbers and print whether their sum is EVEN or ODD.*/
/*
const func = () => {
let n = parseInt(prompt("Enter a number1"));
let m = parseInt(prompt("Enter a number2"));
if ((n + m) % 2 == 0) console.log("EVEN");
else console.log("ODD");
};
func();
*/
/*-----------------------------------------------------------------------------------------------------------------9*/
/*d display corresponding color, below are the code 
and colors given
R-> Red
B-> Blue
G-> Green
O-> Orange
Y-> Yellow W-
> White
others-> Invalid Input.*/
/*
let func = () => {
let n = prompt("Enter a character");
switch (n) {
case "R":
console.log("Red");
break;
case "B":
console.log("Blue");
break;
case "G":
console.log("Green");
break;
case "O":
console.log("Orange");
break;
case "Y":
console.log("Yellow");
break;
case "W":
console.log("White");
break;
default:
console.log("Invalid Input");
break;
}
};
func();
*/
/*-----------------------------------------------------------------------------------------------------------------10*/
/*e Martian land faraway, a new virus has evolved and is attacking the 
individuals at a fast pace. The scientists have figured out the virus composition, V. 
The big task is to identify the people who are infected. The sample of N people is 
taken to check if they are POSITIVE or NEGATIVE.*/
/*
const func = () => {
let str = prompt("Enter the Name: ");
let sub = prompt("Enter the Code: ");
const x = sub.length;
let cnt = 0;
if (str.length < sub.length)
{
console.log("Negative");
return;
}
let y = 0;
for (let i = 0; i < x; i++)
{
for (let j = y; j < str.length; j++)
{
if (str[j] === sub[i])
{
cnt++;
y = j;
break;
}
else
y = 0;
}
}
if (cnt === sub.length)
console.log("POSITIVE");
else
console.log("NEGATIVE");
};
func();
*/