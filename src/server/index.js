import http from 'http';
import { devLogger, prodLogger } from '../app/services/logger';
import apiApp from './bootstrap';
import normalizePort from '../app/utils/normalizePort';

const createServer = () => {
    const port = normalizePort(process.env.API_PORT || '3000');
    apiApp.set('port', port);

    const server = http.createServer(apiApp);

    // Server event listeners
    const onServerError = (err) => {
        devLogger('Server on error', err);
    };
    const onServerListening = () => {
        devLogger(`Listnening..... update another => ${server.address().port}`);
        prodLogger(`Server is running => ${server.address().port}`);
    };

    // Server events

    server.on('error', onServerError);
    server.on('listening', onServerListening);

    // Start server

    server.listen(port);
};

export default createServer;
