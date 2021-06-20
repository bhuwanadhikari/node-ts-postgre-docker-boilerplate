import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../../config";
import { IResponseSuccess } from "../interfaces/IResponse";

import { User } from "../models";
import { createUser, getUserByEmail } from "../repositories/user.repository";
import { IResponseError } from "../interfaces/IError";
import { validateSignin, validateSignUp } from "../validations/auth";
import { isEmpty } from "../validations/isEmpty";

interface IAuthPayload {
  token: string;
  name: string;
  email: string;
  id: string | number;
  board: string;
}

export interface ISigninBody {
  email: string;
  password: string;
}

type IResponse = IResponseSuccess<IAuthPayload> | IResponseError;

export default class AuthService {
  //signing up the user by email
  public async signup(body: User): Promise<IResponse> {
    try {
      //validate the inputs
      const { isValid, errors } = validateSignUp(body);
      if (!isValid) {
        return {
          success: false,
          errors: errors,
        };
      }

      console.log("hwere is the body", body);

      //check if email already in use
      const user = await getUserByEmail(body.email);
      console.log(user);
      if (!isEmpty(user)) {
        return {
          success: false,
          errors: {
            email: "Email already exists",
          },
        };
      }

      //proceed to save the user
      const saltRounds = 10;
      const hash = await bcrypt.hash(body.password, saltRounds);
      const newUser = await createUser({
        ...body,
        password: hash,
      });

      const jwtPayload = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      };

      const token = jwt.sign(jwtPayload, config.jwtSecret, {
        expiresIn: 3600 * 10 * 100,
      });
      return {
        success: true,
        payload: {
          token: `Bearer ${token}`,
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          board: "ioe",
        },
      };
    } catch (e) {
      console.log(e);
      return {
        success: false,
        errors: {
          sudden: e,
        },
      };
    }
  }

  //SIGNING IN THE USER
  public async signin(body: ISigninBody): Promise<IResponse> {
    try {
      //validate the sigin inputs
      const { isValid, errors } = validateSignin(body);
      if (!isValid) {
        return { success: false, errors };
      }

      //check password validity
      const user = await getUserByEmail(body.email);
      if (!user) {
        return {
          success: false,
          errors: { password: "Password is wrong" },
        };
      }

      const isMatch = await bcrypt.compare(body.password, user.password);
      if (!isMatch) {
        return {
          success: false,
          errors: { password: "Password is wrong" },
        };
      }
      const jwtPayload = { id: user.id, email: user.email, name: user.name };
      const token = jwt.sign(jwtPayload, config.jwtSecret, {
        expiresIn: 3600 * 10 * 100,
      });
      return {
        success: true,
        payload: {
          token: `Bearer ${token}`,
          id: user.id,
          name: user.name,
          email: user.email,
          board: "ioe",
        },
      };
    } catch (e) {
      console.log(e);
      return {
        success: false,
        errors: { sudden: e },
      };
    }
  }
}
