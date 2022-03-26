/* eslint-disable import/no-anonymous-default-export */
import { connectToDatabase } from "../../utils/db/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const newProduct = req.body.newProduct;
    const { db } = await connectToDatabase();

    try {
      const product = await db
        .collection("products")
        .insertOne(req.body.newProduct);

      res.status(201).json(product);
    } catch (error) {
      res.status(404).json(`Error: ${error.message}`);
    }
  }
};
