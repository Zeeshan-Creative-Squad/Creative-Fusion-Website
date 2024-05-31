import express from "express";
import multer from "multer";
import path from "path";
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png|webp/;
  console.log("file info ==>",file);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    console.log("picture verified")
    return cb(null, true);
  } else {
    console.log("not  recieved");
    cb("Images Only");
  }
}

const upload = multer({
  storage:storage,
  fileFilter: function (req, file, cb) {
    const data = req.body;
  console.log("req.body",data);
    checkFileType(file, cb);
  },
})


router.post("/", upload.single("image"), (req, res) => {
  const data = req.body;
  console.log("req.body",data);
  
  console.log("file recieved",req.file.path);
  res.send(`/${req.file.path}`);
})

export default router
