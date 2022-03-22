import express from 'express';

const app = express();

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.get('/', (req, res) => {
  res.json({ message: "Server is ready!" });
})

app.listen(port, () => {
  console.log('Server listening on port', port)
});