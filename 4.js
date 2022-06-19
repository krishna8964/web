/* ----------------------------------------------------------------------------------------------1*/
/*no of vowels in string
coun = (str) => {
    let n = str.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ||
            str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') count++;
    }
    return count;
}

let str = prompt("Enter the string");
let res = coun(str);
document.write(`The count of the vowels in the string is: ${res}`); * /

/*--------------------------------------------------------------------------------------------------------2*/
/*numbers 2-254-6-8
dashTwixt2Evens = (num) => {

    let str = "";
    for (let i = 0; i < num.length - 1; i++) {
        let ele = parseInt(num[i]);
        str = str + num[i];
        if (ele % 2 == 0) {
            let ele1 = parseInt(num[i + 1]);
            if (ele1 % 2 == 0) {
                str = str + '-';
            }
        }

    }
    str = str + num[num.length - 1];
    return str;


}


let num = prompt("Enter the number");
let res = dashTwixt2Evens(num);
document.write(`Tne number is ${res}`); */
/*---------------------------------------------------------------------------------------------3*/
/*array of numbers sum of even numbers


sumEven=(arr)=>{

    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sum=sum+arr[i];
        }
    }
    return sum;


}


let n=prompt("Enter the length of the Array");
let arr=[];
for(let i=0;i<n;i++){
    arr[i]=parseInt(prompt("Enter the element"));
}


let res=sumEven(arr);
document.write(`The sum of the even numbers in the array is: ${res}`);*/
/*--------------------------------------------------------------------------------------------4*/
/*rewrite 3 functions as arrow functions


const createFullName =(firstName, lastName)=> {
    return firstName + " " + lastName;
  }
  
const doubleNumber=(number)=> {
    return number * 2;
  }
  
const getEvenNumbers=(array)=> {
    let evenNumbers = [];
    for (let i of array) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  }


  let fname=prompt("Enter the first Name");
  let lname=prompt("Enter the last Name");
  let res=createFullName(fname,lname);

  document.write(`The full name is ${res}`);
document.write("<br>");
  let num=prompt("Enter the number");
  let res1=doubleNumber(num);
  document.write(`The Double number is ${res1}`);

  document.write("<br>");
  let n=prompt("Enter the length of the Array");
  let arr=[];
  for(let i=0;i<n;i++){
      arr[i]=parseInt(prompt("Enter the element"));
  }
  let res2=[];
  res2=getEvenNumbers(arr);
  document.write(`The Even number array is ${res2}`);*/
/*----------------------------------------------------------------------------------------------5*/
/*reerse given num


reverse=(num)=>{

    let res;
    let sum=0;
    while(num>0){
        res=parseInt(num%10);
        sum=res+sum*10;
        num=parseInt(num/10);

    }
    return sum;
}


let num=prompt("Enter the number");

let res=reverse(num);
document.write(` The reverse of the  given Number is: ${res}`);*/