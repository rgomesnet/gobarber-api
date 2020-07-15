import IUserRepository from "@models/users/repositories/IUserRepository";
import ICreateUserDTO from "@models/users/dtos/ICreateUserDTO";
import User from "../entities/User";
import { Repository, getRepository } from "typeorm";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async all(): Promise<User[]>{
    return await this.repository.find();
  }

  public async findById(id: string): Promise<User | undefined> {
    return await this.repository.findOne(id);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return await this.repository.findOne({
      where: { email }
    });
  }

  public async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password
    });

    return await this.save(user);
  }

  public async save(user: User): Promise<User> {
    return this.save(user);
  }
}

export default UserRepository;
