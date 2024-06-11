const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const port = 4000

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send({
    data: req.cookies.acessToken
  })
})

app.post('/login', (req, res) => {
  res.cookie('acessToken', '123', {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    path: '/'
  })
  res.send({
    message: 'Login success'
  })
})

app.listen(port, () => {
  console.log(`Server chạy http://localhost:${port}`)
})
