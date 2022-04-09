// import { connectToDatabase } from "../../utils/db/mongodb";
import Orders from "../../models/Orders";
import db from "../../utils/db/mongoose";

export default async function handler(req, res) {

  if (req.method === "POST") {
    const update = req.body.update;
    const id = req.body.id;
    const userOrder = req.body.userOrder;

    try {
      await db.connect();

      if (update === "addneworder") {
        const newOrder = new Orders({
          user: userOrder.user,
          products: userOrder.products,
          description: userOrder.description,
          confirmed: userOrder.confirmed,
          sendToPost: userOrder.sendToPost,
          inPost: userOrder.inPost,
          deliverd: userOrder.deliverd,
          noteAccept: userOrder.noteAccept,
          factorFinalPrice: userOrder.factorFinalPrice,
        });
        await newOrder.save()
        res.status(201).json(newOrder);
      }

      if (update === "confirmed") {
        const order = await Orders.findByIdAndUpdate(id, {
          confirmed: Boolean(true),
        });
        res.status(201).json(order);
      }

      if (update === "sendToPost") {
        const order = await Orders.findByIdAndUpdate(id, {
          sendToPost: Boolean(true),
        });
        res.status(201).json(order);
      }

      if (update === "inPost") {
        const order = await Orders.findByIdAndUpdate(id, {
          inPost: Boolean(true),
        });
        res.status(201).json(order);
      }

      if (update === "deliverd") {
        const order = await Orders.findByIdAndUpdate(id, {
          deliverd: Boolean(true),
        });
        res.status(201).json(order);
      }

      if (update === "noteAccept") {
        const order = await Orders.findByIdAndUpdate(id, {
          noteAccept: Boolean(true),
        });
        res.status(201).json(order);
      }

      await db.disconnect();
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  }
}
