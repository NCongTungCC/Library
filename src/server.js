const port = 3000;
const http = require('http');
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
    }
});

app.listen(port, () => {
    console.log(`Server đang khởi chạy tại port ${port}`);
});
