// import { connectToDatabase } from "../../utils/db/mongodb";
import Orders from "../../models/Orders";
import db from "../../utils/db/mongoose";

export default async function handler(req, res) {
  //   const { db } = await connectToDatabase();

  if (req.method === "POST") {
    const update = req.body.update;
    const id = req.body.id;
    try {
      await db.connect();

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
