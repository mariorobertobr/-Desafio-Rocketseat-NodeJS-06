import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {

    try {
      
    if (!request.headers.user_id){
      return response.status(400).json({
        message: "Missing user_id in header"
      });
    }
   
    const listAllUsers = this.listAllUsersUseCase.execute({ user_id: String(request.headers.user_id) });

  
    return response.status(200).json(listAllUsers);
  }
  catch (err) {
    return response.status(400).json({
      error: err.message
    });
  }

  }
}

export { ListAllUsersController };
