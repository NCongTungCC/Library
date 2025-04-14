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
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchApi();
const id = 1;
const deleteApi = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE'
      })
        const data = await response.json();
        console.log(data);
    }
    deleteApi(id);
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
const updateApi = async (id, products) => {
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
updateApi(id, products);