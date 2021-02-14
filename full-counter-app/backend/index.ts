import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { Collection, MongoClient, MongoError } from 'mongodb';

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
  }

  const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
  const db = client.db('counter-db');

  db.collection('Count', (err: MongoError, collection: Collection) => {
    collection.insertOne({ id: 0, name: 'count', count: 0 })
  });

  const app = express();

  app.get('/api/v0/increment', (req: Request, res: Response) => {
    db.collection('Count', async (err: MongoError, collection: Collection) => {
      if (err) throw err;
      const updatedCountEntry = await collection.findOneAndUpdate(
        { id: 0 }, 
        { $inc: { count: 1 }}, 
        { returnOriginal: false });
      res.send(updatedCountEntry);
    });
  });

  app.get('/api/v0/decrement', (req: Request, res: Response) => {
    db.collection('Count', async (err: MongoError, collection: Collection) => {
      if (err) throw err;
      const updatedCountEntry = await collection.findOneAndUpdate({ id: 0 }, { $inc: { count: -1 } }, { returnOriginal: false });
      res.send(updatedCountEntry);
    });
  });

  app.get('/api/v0/reset', (req: Request, res: Response) => {
    db.collection('Count', async (err: MongoError, collection: Collection) => {
      if (err) throw err;
      const updatedCountEntry = await collection.findOneAndUpdate({ id: 0 }, { $set: { count: 0 }}, { returnOriginal: false });
      res.send(updatedCountEntry);
    });
  });

  app.get('*', (req, res) => {
    res.send(`
      <h1>Counter App API Server</h1>
      <h3>Routes</h3>
      <ul>
        <li>GET: /api/v0/increment</li>
        <li>GET: /api/v0/decrement</li>
        <li>GET: /api/v0/reset</li>
      </ul>
    `);
  });

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  });
}

startServer();
