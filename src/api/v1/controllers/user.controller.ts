import {User} from '../models'
import {getUsers, createUser, IUserPayload, getUser} from '../repositories/user.repository'

export default class UserController {
  public async getUsers(): Promise<Array<User>> {
    return getUsers()
  }

  public async createUser( body: IUserPayload): Promise<User> {
    return createUser(body)
  }

  public async getUser( id: string): Promise<User | null> {
    return getUser(Number(id))
  }
}