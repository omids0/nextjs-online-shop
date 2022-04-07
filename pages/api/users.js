import { connectToDatabase } from "../../utils/db/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const users = await db
    .collection("users")
    .find({})
    .sort({ metacritic: -1 })
    .toArray();

  res.status(200).json(users);
}
