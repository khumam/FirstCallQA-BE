import { Request, Response } from "express";
import { CheckupResponse } from "../interfaces/health.interface";

export default class HealthController {
  public static checkup = (req: Request, res: Response) => {
    const response: CheckupResponse = {
      'status': 'Success',
      'data': null
    };
    return res.status(200).json(response)
  }
}