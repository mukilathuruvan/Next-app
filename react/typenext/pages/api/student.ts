import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()
import { NextApiRequest,         NextApiResponse } from "next";
export default async (req:NextApiRequest,res:NextApiResponse )=> {
    const data = JSON.parse(req.body)
    const boom = await prisma.student.create({
    data
})
    res.status(201).json(boom)
    
}       