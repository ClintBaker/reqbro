import express from 'express'
import reqbro from './reqbro.js'

const app = express()

const PORT = process.env.PORT || 3002

const fourteenMin = 840000

// GOLF COURSE RANKER EVERY 14 MINUTES
reqbro('https://gcr-7rlp.onrender.com/', 840000)
// JLB COMPANIES
reqbro('https://www.jlbcompanies.com/', 840000)

app.get('/', (req, res, next) => {
  res.send('GO FOR REQBRO')
})

app.get('*', (req, res, next) => {
  res.send('GO FOR REQBRO')
})

app.listen(PORT, () => {
  console.log('GO FOR REQBRO')
  console.log(`app is listening on port ${PORT}`)
})
