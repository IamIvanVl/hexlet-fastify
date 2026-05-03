import fastify from 'fastify'

const app = fastify()
const port = 3000

app.get('/', (req, res) => {
  res.type('text/html')
  res.send('<h1>Hello Hexlet</h1>')
})

app.get('/users', (req, res) => {
  res.send('GET /users')
})

app.post('/users', (req, res) => {
  res.send('POST /users')
})

app.get('/hello', (req, res) => {
  const name = req.query.name
  if (!name) {
    res.send('Hello, World!')
  }
  res.send(`Hello, ${name}`)
})

app.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`)
})