import { uuid } from 'uuidv4';

import IUserRepository from "@models/users/repositories/IUserRepository";
import ICreateUserDTO from "@models/users/dtos/ICreateUserDTO";

import User from "@models/users/infra/typeorm/entities/User";

class UserRepository implements IUserRepository {
  private users: User[] = [];

  public async all(): Promise<User[]> {
    return this.users;
  }

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id);
    return findUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);
    return findUser;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, { id: uuid() }, userData);
    this.users.push(user);
    return user;
  }

  public async save(user: User): Promise<User> {
    const index = this.users.findIndex(findUser => findUser.id == user.id);
    this.users[index] = user;
    return user;
  }
}

export default UserRepository;
