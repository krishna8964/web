/**sort items of array
let a = [4, 6, 7, 8, 2, 1, -2];
for (i = 0; i < a.length; i++) {
    for (j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) {
            let t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
    }
}
console.log(a);*/
/*------------------------------------------------------------------2*/
/*most frequent item
let arr= [1, 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9,'a'];
let m=0,v;
for(i=0;i<arr.length;i++)
{
let x=arr[i];
c=0;
for(j=0;j<arr.length;j++)
{
if(x===arr[j])
c++;
}
if(c>m)
{
m=c;
v=x;
}
}
console.log(m);*/
/*------------------------------------------------------------------3*/
/*
return true identical
function com(a,b){
if(a.length==b.length)
{
for(i=0;i<a.length;i++)
{
if(a[i]===b[i])
{
return true;
}
else
{
return false;
}
}
}
else
return false;
}
let a=[4, 6, 7, 8, 2, 1, -2];
let b=[4, 6, 7, 8, 2, 1, -2];
console.log(com(a,b));*/
/*------------------------------------------------------------------4*/
/*array intoparts of determines size of array
function splits(arr,size){
let newarr=[];
let s=(arr.length/size)+1;
for(let i=0;i<s-1;i++)
{
newarr[i]=[];
}
let cnt=0,z=0;
for(let i=0;i<arr.length;i++)
{
newarr[z][cnt]=arr[i];
cnt++;
if(cnt===size)
{
cnt=0;
z++;
}
}
console.log(newarr);
}
let arr1=[4, 6, 7, 8, 2, 1,-2,8,9];
splits(arr1,2);*/
/*------------------------------------------------------------------5*/
/*return a duplicate-free array
function f(arr){
let temp=[];
let j = 0;
let n=arr.length;
for (i=0; i<n-1; i++)
{
if (arr[i] != arr[i+1])
temp[j++] = arr[i];
}
temp[j++] = arr[n-1];
for (i=0; i<n; i++)
arr[i] = temp[i];
console.log(temp);
}
let arr=[4,4,6,6, 7, 8, 2, 1, -2];
f(arr);*/
/*------------------------------------------------------------------6*/
/*reverts the input
function fun(a){
let t=[];
let j=0;
for(i=a.length-1;i>=0;i--)
{
t[j]=a[i];
j++;
}
console.log(t);
}
let a=[4, 6, 7, 8, 2, 1, -2];
fun(a);*/
/*------------------------------------------------------------------7*/
/*leap year
function f(x,y){
let a=[];
for(i=x;i<=y;i++)
{
if(x>y)
console.log(0);
if(i%4===0)
{
if(i%100!=0 || i%400===0)
{
// a.push(i);
console.log(i);
}
}
}
console.log(a);
}
let num1=prompt("Enter the num1");
let num2=prompt("Enter the num2");
let x=parseInt(num1);
let y=parseInt(num2);
f(x,y);*/
/*------------------------------------------------------------------8*/
/*fibonacci sequence
function fib(n){
let a=0,b=1;
if(n<1)
{
return;
}
console.log(a);
for(i=1;i<n;i++)
{
console.log(b);
let c=a+b;
a=b;
b=c;
}
}
let x=prompt("Enter the number ");
let n=parseInt(x);
fib(n);*/
/*------------------------------------------------------------------9*/
/*add elementsto existing array 
var a = [ 20, 30, 40, 50, 60 ];
a.splice(1, 2, 3, 4, 5);
console.log(a);*/
/*------------------------------------------------------------------10*/
/*delete existing elementsto existing
var a = [ 20, 30, 40, 50, 60 ];
a.splice(1, 2);
console.log(a);*/
/*-------------------------------------------------------------letlet-----11*/
/*/*
//Example1
let a = 10;

function f() {
    let b = 9
    console.log(b);
    console.log(a);
}
f(); */
//Example2
/*let a = 10;
function f() {
if (true) {
let b = 9
// It prints 9
console.log(b);
}
// It gives error as it
// defined in if block
console.log(b);
}
f()
// It prints 10
console.log(a)*/
//Example3
//Users cannot re-declare the variable defined with the let keyword but
//can update it.
//let a = 10
// It is not allowed
/*let a = 9
// It is allowed
a = 7
console.log(a);*/
//Example4
/*Users can declare the variable with the same name
in different blocks using the let keyword*/
/*let a = 10
if (true) {
let a=9
console.log(a) // It prints 9
}
console.log(a) // It prints 10*/
//Example5
/*If users use the let variable before the declaration,
it does not initialize with undefined just like a var variable and return
an error*/
/*
console.log(a);
let a = 10;*/
/*-------------------------------------------------------------varvar-----11*/
//Example 1
/*var a = 10
function f(){
console.log(a)
}
f();
console.log(a);*/
//Example2
/*function f() {
// It can be accessible any
// where within this function
var a = 10;
console.log(a)
}
f();
// A cannot be accessible
// outside of function
console.log(a);*/
//Example3
/*var a = 10
// User can re-declare
// variable using var
var a = 8
console.log(a);
// User can update var variable
a = 7
console.log(a);*/
//Example4
/*
console.log(a);
var a = 10; */
/*------------------------------------------------------------------12*/
/*

function print() {
    let name = document.getElementById("st").value;
    // console.log(id);
    let l = name.length;
    alert("Length of the sting is :-" + l);
}

function sl() {
    let sname = document.getElementById("sl1").value;
    let st = document.getElementById("sl2").value;
    let en = document.getElementById("sl3").value;
    let start = parseInt(st);
    let end = parseInt(en);
    let sn = sname.slice(start, end);
    alert(sn);
}

function ss() {
    let snam = document.getElementById("ss1").value;
    let st = document.getElementById("ss2").value;
    let en = document.getElementById("ss3").value;
    let start = parseInt(st);
    let end = parseInt(en);
    let s = snam.slice(start, end);
    alert(s);
}

function re() {
    let snam = document.getElementById("re1").value;
    let st = document.getElementById("re2").value;
    let en = document.getElementById("re3").value;
    // let start=parseInt(st);
    // let end=parseInt(en);
    let s = snam.replace(st, en);
    alert(s);
}

function conc() {
    let snam = document.getElementById("co1").value;
    let st = document.getElementById("co2").value;
    let s = snam.concat(" ", st);
    alert(s);
}

function pa() {
    let snam = document.getElementById("pa1").value;
    let st = document.getElementById("pa2").value;
    let re = document.getElementById("pa3").value;
    let n = parseInt(st);
    let s = snam.padStart(st, re);
    alert(s);*/