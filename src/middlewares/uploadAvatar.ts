
import multer,  { FileFilterCallback }  from 'multer';
import { Request, Response, NextFunction } from 'express';
import { IReq } from '@src/controllers/types/types';
import { IUser } from '@src/models/User';


const storage = multer.memoryStorage();
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    // 只允許jpeg和png文件
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG and PNG are allowed.'));
    }
  };
  
  const upload = multer({
    storage,
    limits: { fileSize: 1 * 1024 * 1024 }, // 限制文件大小為1MB
    fileFilter
  }).single('avatar');


const uploadAvatar = (req: IReq<IUser>, res: Response, next: NextFunction) => {
  upload(req, res, async(err: any) => {
    if (err) {
      return res.status(400).send('Error uploading file');
    }

    if (req.file) {
        const base64String = req.file.buffer.toString('base64');
        const mimeType = req.file.mimetype;
        req.body.avatar = `data:${mimeType};base64,${base64String}`;
    }

    next();
  });
};

export default uploadAvatar;
