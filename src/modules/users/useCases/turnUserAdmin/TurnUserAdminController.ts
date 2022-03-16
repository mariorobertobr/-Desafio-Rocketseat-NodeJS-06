/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
     try {
      const turnAdmin = this.turnUserAdminUseCase.execute({ user_id: request.params.user_id });
      return response.status(200).json(turnAdmin);
     }
      
      catch (err) {
        return response.status(404).json({
          error: err.message
        });
      }

  }
}

export { TurnUserAdminController };
