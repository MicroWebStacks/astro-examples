import express from 'express';
import { handler as ssrHandler } from '../dist/server/entry.mjs';
import {cacheHandler} from './cacheRouter_middleware.js'

const port = 3000
const app = express();

app.use(express.static('dist/client/'))

app.get('/',cacheHandler);
app.use(ssrHandler);

app.use((req, res, next) => {
    console.log("cache> server.js 404")
    res.status(404).send("Sorry can't find that!")
  })

console.log(`cache proxy listening on port ${port}`)
app.listen(port);
