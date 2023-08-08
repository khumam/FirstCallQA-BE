import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class UserController {
  public static getAll = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    const response = {
      'status': 'Success',
      'data': users
    }
    return res.status(200).json(response);
  }

  public static getById = async (req: Request, res: Response) => {
    console.log(req.params.id);
    const user = await prisma.user.findFirst({
      where: { id: req.params.id }
    });
    const response = {
      'status': 'Success'
      'data': user
    }
    return res.status(200).json(response);
  }
}