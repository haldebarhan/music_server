import { NextFunction, Request } from 'express'
import multer, { FileFilterCallback } from 'multer'
import crypto from "crypto"
import path from 'path'


type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, destination: string) => void


const uuid = crypto.randomUUID()
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/uploads"),
    filename: (req: Request, file: Express.Multer.File, callback: FileNameCallback) =>  {
        callback(null, uuid +  file.originalname.substring(file.originalname.lastIndexOf('.')))
    }
})

const fileFilter = (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
    const fileTypes = ["audio/mpeg", "audio/x-aiff", "audio/x-aiff", "audio/x-wav", "audio/mp4", "application/ogg"]
    if (fileTypes.some((fileType)=> fileType === file.mimetype)) {
        return callback(null, true)
    }
    callback(null, false)
    return callback(new Error('Seul les fichiers audio de type MP3 sont autorisés'))
}

const maxSize = 5 * 1024 * 1024


const upload = multer({
    storage,
    limits: {fileSize: maxSize},
    fileFilter
})

export default upload