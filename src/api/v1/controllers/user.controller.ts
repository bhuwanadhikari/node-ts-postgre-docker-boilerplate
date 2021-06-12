import { User } from "../models";

import {
  getUsers,
  createUser,
  IUserPayload,
  getUserById,
} from "../repositories/user.repository";

export default class UserController    {
  public async getUsers(): Promise<Array<User>> {
    return getUsers(); 
  }

  public async createUser(body: User): Promise<User> {
    return createUser(body);
  }

  public async getUser(id: string): Promise<User | null> {
    return getUserById(Number(id));
  }
}
