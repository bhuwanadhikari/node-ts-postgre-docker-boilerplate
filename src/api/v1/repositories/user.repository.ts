import { getConnection, getConnectionOptions, getRepository } from "typeorm";
import { User } from "../models";

export interface IUserPayload {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const getUsers = async (): Promise<Array<User>> => {
  const userRepository = getConnection().getRepository(User);
  return userRepository.find();
};

export const createUser = async (payload: User): Promise<User> => {
  const userRepository = getRepository(User);
  const user = new User();
  return userRepository.save({
    ...user,
    ...payload,
  });
};

export const getUserById = async (id: number): Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ id: id });
  if (!user) return null;
  return user;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ email: email });
  return user ? user : null;
};
