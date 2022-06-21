import { Request, Response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";


const router = Router();
const createUserController = new CreateUserController();

router.get("/", (req: Request, res: Response) => {
    return res.json({ message: "Hello World" });
    }
)

router.post("/users", createUserController.handle);

export { router };