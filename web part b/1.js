let arr = [];
let s = new Set();
let res = ["koushik", "sanjay", "krupananda", "yashwanth", "vishnu", "narasimha"];


console.log("Time taken to insert elements into the array ");
console.time("Array");
for (let i = 0; i < res.length; i++) {
    arr.push(res[i]);
}
console.timeEnd("Array");

console.log("Time taken to insert elements into the set ");
console.time("Set");
for (let i = 0; i < res.length; i++) {
    s.add(res[i]);
}
console.timeEnd("Set");

console.log("Time for accessing element in array ");
console.time("Array");
let r1 = arr.indexOf("koushik");
console.timeEnd("Array");

console.log("Time for accessing element in set ");
console.time("Set");
let r2 = s.has("koushik");
console.timeEnd("Set");