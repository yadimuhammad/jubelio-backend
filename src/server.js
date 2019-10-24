import Hapi from 'hapi';
import { routes } from './routes';

const server = Hapi.server({
    host: 'localhost',
    port: '5000',
    routes: {cors : true}
});

routes.forEach((route) =>{ // (route) => is an function arrow, from javascript to make function easier.
    server.route(route);
})


async function start(){
    try {
        await server.start();
    } catch (err) {
        console.log(err);
    }

    console.log('Hapi server is running');
}

start();