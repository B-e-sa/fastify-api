import Fastify from "fastify";
import userRoutes from "./modules/user/routes/user.routes";

const server = Fastify();

server.register(userRoutes, { prefix: 'users' });
// server.register(, { prefix: '' });

(async () => {
    await server.listen({
        port: 3000,
        host: 'localhost'
    })
        .then(() => console.log('Server listening on port 3000'))
        .catch((e) => console.log(e));
})();