import { connectToDatabase } from "../../utils/db/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  if (req.method === "GET") {
    try {
      const orders = await db
        .collection("orders")
        .find({})
        .sort({ metacritic: -1 })
        .toArray();
      res.status(201).json(orders);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const order = await db.collection("orders").insertOne(req.body.userOrder);
      res.status(201).json(order);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  }
}
