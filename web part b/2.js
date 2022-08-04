let obj = {};
let m1 = new Map();
let arr = ["koushik", "sanjay", "krupananda", "yashwanth", "vishnu", "narasimha"];

console.log("Time taken for inserting into objects ");
console.time("Object");
for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
}
console.timeEnd("Object");

console.log("Time for map insertion ");
console.time("Map");
for (let i = 0; i < arr.length; i++) {
    m1.set(i, arr[i]);
}
console.timeEnd("Map");

console.log("Time taken for accesing elements in object ");
console.time("Object");
let res = obj.hasOwnProperty("koushik");
console.timeEnd("Object");


console.log("Time taken for accesing elements in map ");
console.time("Map");
let res1 = m1.has("sanjay");
console.timeEnd("Map");


console.log("For deleting elements ");
console.time("Object");
delete obj.yashwanth;
console.timeEnd("Object");

console.log("For deleting elements ");
console.time("Map");
delete m1.yashwanth;
//m1.delete("yashwanth");
console.timeEnd("Map");