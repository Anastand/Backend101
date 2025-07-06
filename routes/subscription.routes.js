import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => { res.send({ msg: "get all the subscription" }) })
subscriptionRouter.get("/:id", (req, res) => { res.send({ msg: "get the selected subscription" }) })
subscriptionRouter.post("/", (req, res) => { res.send({ msg: "create a subscription" }) })
subscriptionRouter.put("/:id", (req, res) => { res.send({ msg: "update a subscription" }) })
subscriptionRouter.delete("/:id", (req, res) => { res.send({ msg: "delete a subscription" }) })

subscriptionRouter.get("/user/:id", (req, res) => { res.send({ msg: "get a users subscription " }) })
subscriptionRouter.put("/:id/cancel", (req, res) => { res.send({ msg: "cancel a users subscription " }) })
subscriptionRouter.get("/upcoming-renewals", (req, res) => { res.send({ msg: "get upcomming renewal " }) })





export default subscriptionRouter;
