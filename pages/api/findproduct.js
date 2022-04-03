/* eslint-disable import/no-anonymous-default-export */

import { connectToDatabase } from "../../utils/db/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();
    const id = req.body.uid

    try {
      const product = await db
        .collection("products")
        .find({_id: "6241ea610d22b5b064133fb2"}).toArray()
        

      res.status(201).json(product);
    } catch (error) {
      res.status(404).json(`Error: ${error.message}`);
    }
  }
};
