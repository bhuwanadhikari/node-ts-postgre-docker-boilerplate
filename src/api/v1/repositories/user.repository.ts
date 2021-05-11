import { getConnection, getConnectionOptions, getRepository } from "typeorm";
import { User } from "../models";

export interface IUserPayload {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const getUsers = async (): Promise<Array<User>> => {
  try {
    console.log("getting the repository");
    const userRepository = getConnection().getRepository(User);
    return userRepository.find();
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
  const userRepository = getRepository(User);
  const user = new User();
  return userRepository.save({
    ...user,
    ...payload,
  });
};

export const getUser = async (id: number): Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ id: id });
  if (!user) return null;
  return user;
};
