import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from '@prisma/client'
export default async function users(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({message:"method is not allowed"})
    }
    const prisma=new PrismaClient()
    const userData = JSON.parse(req.body)
    const current = await prisma.user.create({
        data: userData
    })
    res.status(200).json(current)
}   