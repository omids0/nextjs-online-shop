const multer = require("multer");
const path = require("path");
const DatauriParser = require("datauri/parser");
import nc from "next-connect";

const handler = nc();
const parser = new DatauriParser();

const ALLOW_FORMATS = ["image/png", "image/jpeg", "image/jpg"];

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (ALLOW_FORMATS.includes(file.mimetype)) {
      return cb(null, true);
    } else {
      return cb(new Error("Not supported file format!"), false);
    }
  },
});

const singleUpload = upload.single("image");

const singleUploadCtrl = (req, res, next) => {
  singleUpload(req, res, (error) => {
    if (error) {
      return res.status(422).send({ message: "image upload faild!" });
    }

    next();
  });
};

const formatBufferTo64 = (file) =>
  parser.format(path.extname(file.originalname).toString(), file.buffer);

// export default async function handler(req, res) {

//   if (req.method === "POST") {
//     try {
//       if (!req.file) {
//         throw new Error("image is not persisted!");
//       }
//       const file64 = formatBufferTo64(req.file);
//       console.log(file64);

//       return res.status(200).send({ message: "horaaaa" });
//     } catch (error) {
//       return res.status(422).json({ message: error.message });
//     }
//   }
// }

// export default handler;

handler.post((req, res) => {
  console.log(req.files);
  try {
    if (!req.file) {
      throw new Error("image is not persisted!");
    }
    // const file64 = formatBufferTo64(req.file);
    // console.log(file64);

    return res.status(200).json({ message: "horaaaa" });
  } catch (error) {
    return res.status(422).json({ message: error.message });
  }
});

export default handler;
