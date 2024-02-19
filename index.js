
import http from 'http'
import fs from 'fs'

const PORT = 8000;

http.createServer((req, res) => {
    if (req.url === '/')
    {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            res.end();
        })
    }

    else if (req.url === '/about')
    {
        fs.readFile('about.html', (err, data) => {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            res.end();
        })
    }

    else if (req.url === '/contact-me')
    {
        fs.readFile('contact-me.html', (err, data) => {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            res.end();
        })
    }
    
    else
    {
        fs.readFile('404.html', (err, data) => {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            res.end();
        })
    }
    
}).listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

