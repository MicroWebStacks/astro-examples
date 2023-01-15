import express from 'express';

const port = 4000
const app = express();

app.get('/api', (req, res) => {
  console.log(`request from ${req.path}`)
  res.send(JSON.stringify({message: "hello"}))
})

app.listen(port,()=>{
  console.log(`test service listening on port ${port}`)
});
