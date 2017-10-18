import express from 'express'
import cors from 'cors'
import componentWatcher from './componentWatcher'

const app = express()
app.use(cors())

app.get('/', function (req, res) {
  res.send({
    components: componentWatcher.getComponents()
  })
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})