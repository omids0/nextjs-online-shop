import nc from "next-connect";
import Product from "../../../models/Products.js";
import db from "../../../utils/db/mongoose";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
});

handler.post(async (req, res) => {
  const product = req.body.newProduct;
  try {
    await db.connect();
    const products = await Product.insertOne({ product });
    await db.disconnect();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(404).json({ message: `upload failed: ${error.message}` });
  }
});

export default handler;
