import express from 'express'
import cookieParser from 'cookie-parser';
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './Database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })) //Parses incoming requests with form data (like from HTML forms).|| i dont know why this is here
app.use(cookieParser()); //This middleware reads cookies sent by the client and adds them to req.cookies. || i dont know why this is here

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);
app.use(errorMiddleware);


app.get("/", (req, res) => {
  res.send("welcome to subscription copy");
});


app.listen(PORT, async() => {
  console.log(`subscription copy is listening on port 3000 -> http://localhost:${PORT}`)
  await connectToDatabase();
});

export default app;