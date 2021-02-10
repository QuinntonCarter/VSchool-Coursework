const express = require('express')
const app = express()

import {middleware} from './middleware.js'

app.use(express.json())

app.get('/')