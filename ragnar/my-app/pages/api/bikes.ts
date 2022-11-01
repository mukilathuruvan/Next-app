import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";


export default async function bikes (req:NextApiRequest,res:NextApiResponse) {
    const prisma = new PrismaClient()
    if (req.method !== "POST") {
        return  res.status(405).json({message:"there is error"})
    }
    const current = JSON.parse(req.body)
    const alter = await prisma.bike.create({ data: current })
    console.log(alter)
    res.status(200).json(alter)
    
}