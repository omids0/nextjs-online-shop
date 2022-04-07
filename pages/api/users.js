import { connectToDatabase } from "../../utils/db/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  if (req.method === "GET") {
    try {
      const users = await db
        .collection("users")
        .find({})
        .sort({ metacritic: -1 })
        .toArray();

      res.status(201).json(users);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const user = await db.collection("users").insertOne(req.body.user);
      res.status(201).json(user);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  }
}
