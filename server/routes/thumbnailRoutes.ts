import express from 'express'
import {deleteThumbnail, generateThumbnail} from '../controllers/ThumbnailController.js'

const ThubnailRouter = express.Router()

ThubnailRouter.post('/generate', generateThumbnail)
ThubnailRouter.post('/delete/:id', deleteThumbnail)

export default ThubnailRouter