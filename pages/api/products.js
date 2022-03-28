/* eslint-disable import/no-anonymous-default-export */
import { connectToDatabase } from "../../utils/db/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    try {
      const product = await db
        .collection("products")
        .insertOne(req.body.newProduct);

      res.status(201).json(product);
    } catch (error) {
      res.status(404).json(`Error: ${error.message}`);
    }
  } else if (req.method === "GET") {
    const { db } = await connectToDatabase();

    try {
      const products = await db
        .collection("products")
        .find({})
        .sort({ metacritic: -1 })
        .toArray();

      res.status(200).json(products);
    } catch (error) {
      res.status(404).json(`Error: ${error.message}`);
    }
  }
};
