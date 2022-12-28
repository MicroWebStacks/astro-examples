import express from 'express';
import {cacheHandler} from './cacheHandler.js'

const app = express();

app.use(express.static('../dist/client/'))
app.use(cacheHandler);
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })


app.listen(3000);
