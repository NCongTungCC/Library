var a = 10;
console.log(a);
const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tong = 0;
var b = 20;
// dieukien
if(a == b) {
    console.log("Bằng nhau");
}
else {
    console.log("Khác nhau");
}
a == b ? console.log("Bằng nhau") : console.log("Khác nhau");
//ham
for(let i = 0; i < 10; i++) {
    tong = tong + i;
}
console.log(tong);
const object = {name : "Tùng", age: 20, address: "Hà Nội"};
for(const key in object) {
    console.log(key + " : " + object[key]);
}
for(const value of mang) {
    console.log(value);
}
const tinhtong = (a, b) => {
    return a + b;
}
console.log(tinhtong(10, 20));

// callback
function tinhHieu(a,b,ham) {
    ham(a,b);
}
function hieu(a,b) {
    const c = a - b;
    console.log(c);
}
tinhHieu(10, 20, hieu);

mang.forEach((item, index) => {
    console.log(item);
});
const tung = mang.map((item, index) => {
    return (item * 2);
});
console.log(tung);
const le = mang.filter((item, index) => {
    return item % 2 == 1;
});
console.log(le);
const mang1 = le.slice(0, 3);
console.log(mang1);
const promise = new Promise((resolve, reject) => {
    resolve("Success!");
  });
promise.then(result => console.log(result));
  
const fetchApi = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchApi();
const id = 1;
const deleteApi = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE'
      })
        const data = await response.json();
        console.log(data);
    }
    deleteApi();
const products = {
    "id": 0,
    "title": "string",
    "price": 0.1,
    "description": "string",
    "category": "string",
    "image": "http://example.com"
  }
const createApi = async (products) => {
    const response = await fetch(`https://fakestoreapi.com/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(products)
    })
    const data = await response.json();
    console.log(data);
}
createApi(products);
const updateApi = async (products) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(products)
    })
    const data = await response.json();
    console.log(data);
}
updateApi(products);
// scope 
var tun;
function test() {
    var tun = 10;
}
console.log(tun); // undefined
// closure 
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const counter = createCounter();
console.log(counter()); // 1
// Hoisting
// tung()
// const tung = () => {
//     console.log("Tùng");
// }
// Uncaught ReferenceError: Cannot access 'tung' before initialization

//eventloop
console.log("Start");
setTimeout(() => {
    console.log("Timeout 1");
}, 0);
setTimeout(() => {
    console.log("Timeout 2");
}, 0);
console.log("End");
