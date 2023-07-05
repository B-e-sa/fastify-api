import { FastifyInstance } from 'fastify'

const userRoutes = async (app: FastifyInstance) => {
    app.get('/', async (req, res) => {
        res.status(200).send({
            // send users
        })
    })

    app.get('/create', async (req, res) => {
        res.status(200).send({
            // create account
        })
    })
};

export default userRoutes;