import fastify, { FastifyReply } from 'fastify'
import * as path from 'path'

const app = fastify({ logger: true })

app.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs'),
  },
  root: path.join(__dirname, 'view'),
  includeViewExtension: true,
  layout: 'layout',
})

const heroes = [
  { id: 1, name: 'Iron Man' },
  { id: 2, name: 'Thor' },
  { id: 3, name: 'Black Widow' },
  { id: 4, name: 'Hulk' },
]

app.get('/', async (req, reply: any) => {
  return reply.view('index')
})

app.get('/heroes', async (req, res) => {
  return heroes
})

app.get('/heroes/:id', async (req, res) => {
  const { id } = req.params as any
  return heroes.find((h) => h.id === Number(id))
})

exports.app = async (req: any, res: any) => {
  await app.ready()
  app.server.emit('request', req, res)
}
