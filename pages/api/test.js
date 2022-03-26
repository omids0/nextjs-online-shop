export default function handler(req, res) {
  res.status(200).json({ name: "Mongo DB is connected!" });
}
