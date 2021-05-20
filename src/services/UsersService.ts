import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);
    // Check if user exists
    const userExists = await usersRepository.findOne({ email });

    // If exists, return user
    if (userExists) {
      return userExists;
    }

    // If don't, save in DB
    const user = usersRepository.create({
      email,
    });
    await usersRepository.save(user);
    return user;
  }
}

export { UsersService };
