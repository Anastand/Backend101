import express from 'express'
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './Database/mongodb.js';

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);



app.get("/", (req, res) => {
  res.send("welcome to subscription copy");
});


app.listen(PORT, async() => {
  console.log(`subscription copy is listening on port 3000 -> http://localhost:${PORT}`)
  await connectToDatabase();
});

export default app;