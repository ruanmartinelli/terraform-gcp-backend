import { FastifyReply, FastifyRequest } from 'fastify'

const fastify = require('fastify')
const app = fastify({ logger: true })

const heroes = [
  { id: 1, name: 'Iron Man' },
  { id: 2, name: 'Thor' },
  { id: 3, name: 'Black Widow' },
  { id: 4, name: 'Hulk' },
]

app.get('/', async (req: FastifyRequest, res: FastifyReply) => {
  return { works: true }
})

app.get('/heroes', async (req: FastifyRequest, res: FastifyReply) => {
  return heroes
})

app.get('/heroes/:id', async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = req.params as any
  return heroes.find((h) => h.id === Number(id))
})

exports.app = async (req: FastifyRequest, res: FastifyReply) => {
  await app.ready()
  app.server.emit('request', req, res)
}
