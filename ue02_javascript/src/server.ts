
// Node.js Modul
import * as path from 'path';
import * as express from 'express';


export class Server {

    private _port: number;
    private _server: express.Express;

     constructor (port: number) {
        const assetsPath = path.join(__dirname, '..', 'assets');
        this._port = port;
        this._server = express();
        this._server.use('/public', express.static(assetsPath));
        this._server.get('/liste', (req, res, next) => this.handleGetListe(req, res, next));
        this._server.get('image.png', (req, res, next) => this.handleSendImage(res));
    }

    public start () {
        this._server.listen(this._port);
        console.log('HTTP server gestartet auf port ' + this._port);
    }

    public get port () {
        return this._port;
    }

    private handleGetListe(req: express.Request, res: express.Response, next: express.NextFunction) {
        const filePath = path.join(__dirname, '../assets', 'liste.html');
        res.sendFile('liste.html');
    }
    private handleSendImage(res: express.Response) {
        const filePath = path.join(__dirname, '../assets', 'image.png');
        res.sendFile(filePath);
    }
}
