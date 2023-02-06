import jwt from 'jsonwebtoken';
import { LoginUserInput, LoginUserResponse } from '../types/userType';

function getToken(user: LoginUserInput): string {

  const token = jwt.sign({ _id: user.userName },
    process.env.JWT_SECRET_KEY as string,
    {
      expiresIn: '1h',
    }
  );
  return token;
}

function validateCredentials(user: LoginUserInput) {
  return (user.userName === process.env.ADMIN_LOGIN &&
    user.password === process.env.ADMIN_PASSWORD);
}

export function validateLogin(
  userCredentials: LoginUserInput
): LoginUserResponse {

  if (!validateCredentials) {
    return {
      success: false,
      status: 401,
      message: 'Unauthorized',
      userName: userCredentials.userName,
      token: ''
    };
  }

  const token = getToken(userCredentials);

  return {
    success: true,
    status: 200,
    message: 'User is auth.',
    userName: userCredentials.userName,
    token: token
  };

}