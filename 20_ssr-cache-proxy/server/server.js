import express from 'express';
import {cacheHandler} from './cacheRouter.js'

const port = 3000
const app = express();

app.use(express.static('dist/client/'))
app.use(cacheHandler);
app.use((req, res, next) => {
    console.log("cache> server.js 404")
    res.status(404).send("Sorry can't find that!")
  })

console.log(`cache proxy listening on port ${port}`)
app.listen(port);
