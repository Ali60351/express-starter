import mongoose from 'mongoose';

const mongoDB = 'mongodb://127.0.0.1/test';
mongoose.connect(mongoDB);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
