const port = 3000;
const http = require('http');
const fs = require('fs');
const url = require('url');
const app = http.createServer((req, res) => {
    const { method, url } = req;
    if(method === 'GET' && url === '/') {
        res.end("Hello World");
        return;
    }
    if(method === 'POST' && url === '/data') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); 
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
                message: 'Tạo thành công', 
                data: JSON.parse(body) }));
        });
        return;
    } 
    if(method === 'PUT' && url === '/data') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); 
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
                message: 'Cập nhật thành công', 
                data: JSON.parse(body) }));
        });
        return;
    }
    if(method === 'DELETE' && url === '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Xóa' }));
        return;
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        return;
    }
});
const a = () => {
    console.log("A");
}
process.nextTick(() => {
    console.log("Next Tick 1s");
});
setTimeout(() => {
    console.log("Timeout 1s");
}, 0);
console.log(3);
setImmediate(() => {
    console.log("Immediate 1s");
});
fs.readFile('index.html', (err, data) => {
    if(err) {
       throw err;}
    console.log(data.toString());
});
const promise = new Promise((resolve, reject) => {
    resolve("Success!");
  });
promise.then(result => console.log(result));
a();
/* Khi chương trình chạy, nó sẽ thực hiện các tác vụ đồng bộ trước
còn các tác vụ bất đồng bộ sẽ được đưa vào hàng đợi và được thực hiện sau khi hoàn thành 
các tác vụ đồng bộ */

app.listen(port, () => {
    console.log(`Server đang khởi chạy tại port ${port}`);
});
