var a = 10;
console.log(a);
let tong = 0;
var b = 20;
if(a == b) {
    console.log("Bằng nhau");
}
else {
    console.log("Khác nhau");
}
a == b ? console.log("Bằng nhau") : console.log("Khác nhau");

for(let i = 0; i < 10; i++) {
    tong = tong + i;
}
console.log(tong);
const tinhtong = (a, b) => {
    return a + b;
}

console.log(tinhtong(10, 20));

function tinhHieu(a,b,ham) {
    ham(a,b);
}

function hieu(a,b) {
    const c = a - b;
    console.log(c);
}
tinhHieu(10, 20, hieu);


// const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// mang.forEach((item, index) => {
//     console.log(item);
// });
// const tung = mang.map((item, index) => {
//     return (item * 2);
// });
// console.log(tung);

const promise = new Promise((resolve, reject) => {
    resolve("Success!");
  });
  
promise.then(result => console.log(result));
  
const fetchApi = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchApi();