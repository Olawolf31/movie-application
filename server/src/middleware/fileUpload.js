import multer from "multer";


const FILE_SIZE = 1024 * 1024 * 2;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const type = file.fieldname;
    let folder = "";

    if (type === "avatar") {
      folder = "public/images/users";
    } else if (type === "poster") {
      folder = "public/images/movies";
    } else {
      return cb(new Error("Invalid file type"));
    }

    cb(null, folder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage, limits: { fileSize: FILE_SIZE } });

export default upload;
