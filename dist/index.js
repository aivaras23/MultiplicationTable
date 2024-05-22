"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((request, response) => {
    const url = request.url;
    const difficulty1 = 10;
    const difficulty2 = 30;
    const difficulty3 = 50;
    let currentPercentage = 0;
    if (url != null) {
        currentPercentage = parseInt(url.split('/')[1]);
        console.log(currentPercentage);
    }
    response.setHeader('Content-type', 'text/html; charset=utf-8');
    response.write('<!DOCTYPE html>');
    response.write('<html>');
    response.write('<head>');
    response.write('<title>Daugybos lentele</title>');
    response.write('<style>');
    response.write('body {display:grid; place-items:center; margin-top:100px}');
    response.write('table {border-collapse: collapse}');
    response.write('th,td {border: 1px solid black; padding:8px;}');
    response.write('.nav { display:flex; gap:20px; font-size:25px; margin-bottom:20px}');
    response.write('</style>');
    response.write('</head>');
    response.write('</html>');
    response.write('<body>');
    response.write('<h1>Pasirinkti sudėtinguma</h1>');
    response.write('<div class="nav">');
    response.write(`<a href="${difficulty1}">10%</a>`);
    response.write(`<a href="${difficulty2}">30%</a>`);
    response.write(`<a href="${difficulty3}">50%</a>`);
    response.write('</div>');
    response.write('<table>');
    response.write('<tr>');
    response.write('<th></th>');
    // virsutine eilute 
    for (let i = 1; i <= 10; i++) {
        response.write(`<th>${i}</th>`);
    }
    response.write('</tr>');
    for (let j = 1; j <= 10; j++) {
        // stulpelis
        response.write('<tr>');
        response.write(`<th>${j}</th>`);
        // 10x10 daugybos lentele
        for (let k = 1; k <= 10; k++) {
            if (Math.random() > currentPercentage / 100) {
                response.write(`<td>${j * k}</td>`);
            }
            else {
                response.write(`<td></td>`);
            }
        }
        response.write('</tr>');
    }
    response.write('</table>');
    response.write('</body>');
});
server.listen(3000, 'localhost');
