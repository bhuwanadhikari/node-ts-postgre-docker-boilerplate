import { User } from "../models";

import { Get, Route, Tags, Post, Body, Path } from "tsoa";

import {
  getUsers,
  createUser,
  IUserPayload,
  getUser,
} from "../repositories/user.repository";

@Route("users")
@Tags("User")
export default class UserController {
  @Get("/")
  public async getUsers(): Promise<Array<User>> {
    return getUsers();
  }

  public async createUser(body: IUserPayload): Promise<User> {
    return createUser(body);
  }

  public async getUser(id: string): Promise<User | null> {
    return getUser(Number(id));
  }
}
