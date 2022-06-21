import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import {v4 as uuid} from "uuid";
import User from "../entities/User";

class CreateUserController {
    handle(req: Request, res: Response) {

        const createUserService = new CreateUserService();

        const newUser : User = new User();
        newUser.id = uuid();
        newUser.name = req.body.name;
        newUser.email = req.body.email;

        if(newUser.name.length === 0){
            return res.status(400).json({message: "Nome inválido"});
        };

        const user = createUserService.execute(newUser);

        return res.status(201).json({
          message: "Usuário criado com sucesso",
          userCreated: user,
        });
        
    };
}

export { CreateUserController };