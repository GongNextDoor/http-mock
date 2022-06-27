import express from 'express'
import apis from './mock/index.js';

const app = express()

apis.forEach(api => {
  app[api.method](api.url, (req, res) => {
    if (api.success)
      res.send({
        code: 200,
        success: true,
        msg: 'ok',
        data: api.data
      })
    else
      res.send({
        code: -1,
        success: false,
        msg: 'error',
        data: null
      })
  })
})

app.listen(8080, () => {
  console.log('running at http://127.0.0.1')
})

