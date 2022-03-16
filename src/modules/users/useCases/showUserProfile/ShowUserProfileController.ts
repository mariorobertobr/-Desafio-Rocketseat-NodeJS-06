import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    
   try{
      const showProfileUser = this.showUserProfileUseCase.execute({ user_id: request.params.user_id });
      return response.status(200).json(showProfileUser);
   }
    catch (err) {
      return response.status(404).json({
        error: err.message
      });
    }

  }
}

export { ShowUserProfileController };
