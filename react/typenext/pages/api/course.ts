import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from '@prisma/client'
const prisma=new PrismaClient()
export default async function courses(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.json({err:"not allowed"})
    }
    const data = JSON.parse(req.body)
    const alter = await prisma.course.create({
     data   
    })
    console.log(alter)
     res.status(200).json(alter)
}