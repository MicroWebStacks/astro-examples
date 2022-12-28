import express from 'express';
import { handler as ssrHandler } from '../dist/server/entry.mjs';
import {cacheHandler} from './cache.js'

const app = express();
app.use(express.static('dist/client/'))
app.use(express.static('dist/client/raw'))

app.use(cacheHandler);
app.use(ssrHandler);
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })


app.listen(3000);
