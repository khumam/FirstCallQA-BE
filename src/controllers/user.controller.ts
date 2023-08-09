import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { triggerAsyncId } from "async_hooks";
const prisma = new PrismaClient();

export default class UserController {
  public static getAll = async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
      const response = {
        'status': 'Success',
        'data': users
      }
      return res.status(200).json(response);
    } catch (err) {
      const response = {
        'status': 'Failed',
        'message': err.message
      }
      return res.status(500).json(response);
    }
  }

  public static getById = async (req: Request, res: Response) => {
    try {
      const user = await prisma.user.findFirst({
        where: { id: req.params.id }
      });
      const response = {
        'status': 'Success',
        'data': user
      }
      return res.status(200).json(response);
    } catch (err) {
      const response = {
        'status': 'Failed',
        'message': err.message
      }
      return res.status(500).json(response);
    }
  }

  public static store = async (req: Request, res: Response) => {
    try {
      await prisma.user.create({
        data: {
          username: req.body.username,
          first_name: req.body.first_name,
          last_name: req.body.last_name
        }
      });
      const user = await prisma.user.findFirst({
        where: {
          username: req.body.username
        }
      });
      const response = {
        'status': 'Success',
        'data': user
      }
      return res.status(200).json(response);
    } catch (err: any) {
      console.log(req.body)
      const response = {
        'status': 'Failed',
        'message': err.message
      }
      return res.status(500).json(response);
    }
  }

  public static update = async (req: Request, res: Response) => {
    try {
      await prisma.user.update({
        where: { id: req.params.id },
        data: {
          first_name: req.body.first_name,
          last_name: req.body.last_name
        }
      });
      const user = await prisma.user.findFirst({
        where: {
          id: req.params.id
        }
      });
      const response = {
        'status': 'Success',
        'data': user
      }
      return res.status(200).json(response);
    } catch (err) {
      const response = {
        'status': 'Failed',
        'message': err.message
      }
      return res.status(500).json(response);
    }
  }

  public static delete = async (req: Request, res: Response) => {
    try {
      await prisma.user.delete({
        where: {
          id: req.params.id
        }
      });
      const response = {
        'status': 'Success',
        'message': 'User deleted successfuly'
      }
      return res.status(200).json(response);
    } catch (err) {
      const response = {
        'status': 'Failed',
        'message': err.message
      }
      return res.status(500).json(response);
    }
  }
}