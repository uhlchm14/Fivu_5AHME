"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
class Server {
    constructor(port) {
        const assetsPath = path.join(__dirname, '..', 'assets');
        this._port = port;
        this._server = express();
        this._server.use('/public', express.static(assetsPath));
        this._server.get('/liste', (req, res, next) => this.handleGetListe(req, res, next));
        this._server.get('image.png', (req, res, next) => this.handleSendImage(res));
    }
    start() {
        this._server.listen(this._port);
        console.log('HTTP server gestartet auf port ' + this._port);
    }
    get port() {
        return this._port;
    }
    handleGetListe(req, res, next) {
        const filePath = path.join(__dirname, '../assets', 'liste.html');
        res.sendFile('liste.html');
    }
    handleSendImage(res) {
        const filePath = path.join(__dirname, '../assets', 'image.png');
        res.sendFile(filePath);
    }
}
exports.Server = Server;

//# sourceMappingURL=server.js.map
