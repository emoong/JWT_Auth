import exprss, { Request, Response, NextFunction, } from "express";
import jwt from "jsonwebtoken";
import { StringOrUndefined, ObjectOrNull } from "../types/union";
import { DecryptForm, EncryptForm, DecryptFormOrNull } from "../types/form"
import { CustomRequest } from "../types/express"
import { secretKey } from './config';


export const decrypt = (token: string, secretKey: string): DecryptForm => {
  let decoded: object = {};
  try {
    decoded = jwt.verify(token, secretKey) as DecryptForm;
  } catch (error) {
    console.log(error);
    decoded = { code: 403 } as DecryptForm;
  } finally {
    return decoded as DecryptForm;
  }
}

// middleware
// return type is not defined
export const authenticationToken = (req: CustomRequest, res: Response, next: NextFunction): any => {
  const authHeader: StringOrUndefined = req.headers['authorization'];
  const token: StringOrUndefined = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  const common: DecryptForm = decrypt(token as string, secretKey as string);
  switch (common.code) {
    case 200: {
      req.privateObject = common;
      next();
      break;
    }
    case 403: {
      return res.sendStatus(403);
    }
  }
}