import { usersRepository } from "../repositories/UserRepository";
import { User } from "./../entities/User";

export class UsersService {
  async create(email: string): Promise<User> {
    const userExists = await usersRepository.findOne({
      where: { email },
    });

    if (userExists) {
      return userExists;
    }

    const createdUser = usersRepository.create({ email });

    await usersRepository.save(createdUser);

    return createdUser;
  }
}
