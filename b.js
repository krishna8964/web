/*let fun = loc => new Promise(function(resolve, reject) {
    if (loc == "paris") {
        resolve("lets go to paris");
    } else {
        reject("invalid input");
    }
})
loc = prompt("enter the location");
fun(loc).then((val) => {
    console.log(val)
}).catch((val) => {
    console.log(val)
});*/






/*
let ob = {};
let map = new Map();
let res = ['kittu', 'krishna', 'krisna', 'kitty'];
for (i = 0; i < res.length; i++) {
    ob[i] = res[i];
    map.set(i, ob[i]);
}
console.log(ob);
console.log(map);
console.time('ob');
res = ob.hasOwnProperty('kitty');
console.timeEnd('ob');
console.time('Map');
res = map.has('kitty');
console.timeEnd('Map');*/





/*
let arr = [];
let set = new Set();
let res = ['kittu', 'kitty', 'krisna', 'krishna'];
for (let item of res) {
    arr.push(item);
    set.add(item);
}
console.log(arr);
console.log(set);
console.time('arr');
res = arr.indexOf('krishna');
console.timeEnd('arr');
console.time('set');
res = set.has('krishna');
console.timeEnd('set');*/





/*
let bookflight = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let book = true;
        if (book) {
            resolve(true);
        } else {
            reject(false);
        }
    }, 4000)
})
async function bookhotel() {
    let result = await bookflight;
    if (result) {
        console.log("hotel booked ");
    } else {
        console.log('hotel not booked');
    }
}
bookhotel();*/



/*
wei = (n) => {
    if (n > 150) {
        return "obese";
    }
    if (n > 100 && n < 150) {
        return "ok";
    }
    if (n < 100) {
        return "under weight";
    }
}
let n = prompt("enter the number");
n = n * 2.2;
let res = wei(n);
console.log(res);*/




/*
const func = () => {
    let str = prompt("enter the name:");
    let sub = prompt("enter the code:");
    const x = sub.length;
    let cnt = 0;
    if (str.length < sub.length) {
        console.log("negative code:");
        return;
    }
    let y = 0;
    for (let i = 0; i < x; i++) {
        for (let j = y; j < str.length; j++) {
            if (str[i] == sub[j]) {
                cnt++;
                y = j;
                break;
            } else {
                y = 0;
            }
        }
    }
    if (cnt == sub.length) {
      console.log("Positive") }
       else {
        console.log("Negative")
    }
};
func();*/






/*
let promise1 = (a, b) => new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(a + b);
    }, 4000)
})
let promise2 = (a, b) => new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(a - b);
    }, 4000)
})
let promise3 = (a, b) => new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(a * b);
    }, 4000)
})
let promise4 = (a, b) => new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(a / b);
    }, 4000)
})
async function aop(a, b) {
    let result1 = await promise1(a, b);
    console.log(result1)
    let result2 = await promise2(a, b);
    console.log(result2)
    let result3 = await promise3(a, b);
    console.log(result3)
    let result4 = await promise4(a, b);
    console.log(result4)
}
let a = parseInt(prompt("enter the first num a: "));
let b = parseInt(prompt("enter the second num b: "));
aop(a, b);*/