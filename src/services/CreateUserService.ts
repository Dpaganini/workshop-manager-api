import { getRepository } from "typeorm";
import User from "../entities/User";


interface IUser {
    name: string;
    email?: string;
}

class CreateUserService{
    async execute(user:IUser){
        const userCreated = await getRepository(User)
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([user])
            .execute();

        return userCreated;
    }

}

export { CreateUserService };