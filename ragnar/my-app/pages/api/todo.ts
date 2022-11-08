import { PrismaClient, Todo } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
export const prisma =new PrismaClient()
  export default async function todos(req: NextApiRequest, res: NextApiResponse)  {
    // if (req.method !== "POST") {
    //     return  res.status(405).json({message:"there is error"})
    //   }
      console.log(req.method)
      if (req.method==="GET") {
          const result = await prisma.todo.findMany()
           return res.status(200).json(result)
         
         
      }
      else {
          try {
        const task: Todo = JSON.parse(req.body)
        
        const updated = await prisma.todo.create({
            data:task
        })
        res.status(200).json(updated)
        console.log(updated)
    }
    catch {
        res.status(404)
    }
    finally {
        prisma.$disconnect()
    }
    }
    
}
