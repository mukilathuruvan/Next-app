import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./todo";
export default async (req:NextApiRequest,res:NextApiResponse) => {
    if (req.method === "GET")
    {
        const data = await prisma.todo.findMany()
        res.json(data)
    }
}