import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import compression from 'compression'

import { queryHandler } from './serverUtils'
import { playerRouter } from './routes/players'
import { gameRouter } from './routes/game'

const app = express()

/* eslint-disable-next-line */
const PORT = process.NODE_ENV === 'production' ? 80 : 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())
/* eslint-disable-next-line */
app.use(express.static(path.join(__dirname, 'front')))

app.get('/api/weapons', (req, res) =>
  queryHandler(
    req,
    res,
    'SELECT weapon, COUNT(victim_guid) "kills" FROM player_kill GROUP BY weapon;'
  )
)

app.use('/api/raw/', (req, res) => queryHandler(req, res, req.query.query))
app.use('/api/players/', playerRouter)
app.use('/api/game/', gameRouter)

app.get('*', (req, res) => {
  /* eslint-disable-next-line */
  res.sendFile(path.join(__dirname, 'front/index.html'))
})

app.listen(PORT, () => console.log(`🚀  Absolutely EPIC on port ${PORT}!`))
