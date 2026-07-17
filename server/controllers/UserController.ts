import {Request, Response} from 'express'
import Thumbnail from '../models/Thumnail.js'

// Controllers to get All User Thumbnails
export const getUserThubnails = async (req: Request, res: Response)=>{
    try {
        const {userId} = req.session
        const thumbnail = await Thumbnail.find({userId}).sort({createdAt: -1})
        res.json({thumbnail})
    } catch (error: any) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}