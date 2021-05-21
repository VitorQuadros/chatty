import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    // Check if user exists
    // const userExists = await this.usersRepository.findOne({ email });
    const userExists = await this.findByEmail(email);

    // If exists, return user
    if (userExists) {
      return userExists;
    }

    // If don't, save in DB
    const user = this.usersRepository.create({
      email,
    });
    await this.usersRepository.save(user);
    return user;
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOne({ email });
  }
}

export { UsersService };
