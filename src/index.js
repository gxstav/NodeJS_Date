let express = require('express')
let parse = require('./parse.js')
let app = express()
let port = 3333
let result = {
  'language': '',
  'day': '',
  'month': '',
  'year': '',
  'full': ''
}
app.get('/', (req, res) => {
  res.send("Servidor rodando.")
})
app.get('/en/:date', (req, res) => {
  result['language'] = 'en'
  let info = req.params['date'].split('-')
  result['month'] = info[0]
  result['day'] = info[1]
  result['year'] = info[2]
  result['full'] = parse.en(result)
  res.json(result)
})
app.get('/pt/:date', (req, res) => {
  result['language'] = 'pt'
  let info = req.params['date'].split('-')
  result['day'] = info[0]
  result['month'] = info[1]
  result['year'] = info[2]
  result['full'] = parse.pt(result)
  res.json(result)
})
app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`)
})