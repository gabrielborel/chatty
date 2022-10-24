import { dataSource } from "../database";
import { User } from "../entities/User";

export const usersRepository = dataSource.getRepository(User);
