import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => { res.send({ msg: "get all users" }) });
userRouter.get("/:id", (req, res) => { res.send({ msg: "get requested user" }) });
// adding ':id' allows you to send req with a user id and fetch it => localhost:5500/{route handler}/some uerid(:id)
userRouter.post("/", (req, res) => { res.send({ msg: "create a new user" }) });
userRouter.put("/:id", (req, res) => { res.send({ msg: "update a user" }) });
userRouter.delete("/:id", (req, res) => { res.send({ msg: "delete requested user" }) });

export default userRouter;
