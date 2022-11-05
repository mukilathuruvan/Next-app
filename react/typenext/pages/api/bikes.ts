import { NextApiRequest, NextApiResponse } from "next";

export default async function bike(req:NextApiRequest,res:NextApiResponse) {
    
     res.json({name:"manfree"})
}