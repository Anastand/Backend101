import express from 'express'
import { PORT } from './config/env.js';
const app = express();


app.get("/", (req, res) => {
  res.send("welcome to subscription copy");
});


app.listen(PORT, () => {
  console.log(`subscription copy is listening on port 3000 -> http://localhost:${PORT}`)
});

export default app;