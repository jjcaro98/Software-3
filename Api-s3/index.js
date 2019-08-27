import express from 'express';
import consign from 'consign'

const app = express();
var cors = require('cors')

app.use(cors())

consign()
    .include('libs/middelwares.js')
    .then('routes')
    .include('libs/boots.js')
    .into(app)

