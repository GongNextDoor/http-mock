import express from 'express'
import apis from './mock/index.js';

const app = express()

apis.forEach(api => {
  app[api.method](api.url, (req, res) => {
    res.send({
      code: api.success ? 200 : -1,
      success: api.success,
      msg: api.success ? 'ok' : 'error',
      data: api.success ? api.data : null
    })
  })
})

app.listen(8080, () => {
  console.log('running at http://127.0.0.1')
})

