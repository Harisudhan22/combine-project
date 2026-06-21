import express from "express";

const app = express();
const port = 3000;

app.get('/favorite', (req, res) => {
  res.json({
    name : 'LEO',
    discription : 'harisudhan likes this movie very much'
  })
})

app.listen(port, () => {
  console.log(`SERVER LISTENINGV AT http://localhost:${port}`)
});

//dry Principle don't reuse anything
//kiss PRINCIPLE keep it so simple