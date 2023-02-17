import { NextFunction, Request } from 'express'
import multer, { FileFilterCallback } from 'multer'
import crypto from "crypto"
import path from 'path'

type FileNameCallback = (error: Error | null, destination: string) => void

const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images"),
    filename: (req: Request, file: Express.Multer.File, callback: FileNameCallback) => {
        callback(null, uniqueSuffix + '-' + file.originalname)
    }
})

const fileFilter = (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
    const fileTypes = ["image/jpeg", "image/png", "image/webp"]
    if (fileTypes.some((fileType) => fileType === file.mimetype)) {
        return callback(null, true)
    }
    callback(null, false)
    return callback(new Error('Seul les fichiers audio de type Image sont autorisés'))
}

const maxSize = 5 * 1024 * 1024

const ImageUpload = multer({
    storage,
    limits: { fileSize: maxSize },
    fileFilter
})

export default ImageUpload