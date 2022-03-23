import express from 'express';
import './database';

import SomeModel from './models/SomeModel';

const app = express();

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.get('/', (req, res) => {
  SomeModel.find().sort({ a_date: -1 }).then((value: any) => {
    if (!value) {
      return res.status(400).json("No objects available");
    } else {
      return res.status(200).json(value);
    }
  });
})

app.get('/instance/:id', (req, res) => {
  SomeModel.findOne({ _id: req.params.id }, 'a_string', (err: any, obj: any) => {
    if (err) {
      res.status(400);
      res.json(err);
    } else {
      res.status(200);
      res.json(obj);
    }
  })
});

app.get('/create', (req, res) => {
  const awesome_instance = new SomeModel({ a_string: 'awesome', a_date: new Date() });
  awesome_instance.save((err: any, obj: any) => {
    if (err) {
      res.status(400);
      res.json(err);
    } else {
      res.status(201);
      res.json(obj);
    }
  });
})

app.listen(port, () => {
  console.log('Server listening on port', port)
});
