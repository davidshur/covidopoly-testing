import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));

if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.send("Express + TypeScript Server!");
  });
}

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
