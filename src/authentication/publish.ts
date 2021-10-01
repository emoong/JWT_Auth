import exprss, { Request, Response, NextFunction, } from "express";
import jwt from "jsonwebtoken";
import { StringOrUndefined } from "../types/union";
import { EncryptForm } from "../types/form"
import { secretKey, thisServerId } from './config';

// return type is not defined
export const jwtEncrypt = (req: Request, res: Response, next: NextFunction) => {
  const pubServerId: string = thisServerId;
  const targetServerId: string = req.body.targetServerId || "";
  const privateObj: object = req.body.privateObj || {};

  const encryptObject: EncryptForm = {
    pubServerId,
    targetServerId,
    privateObj,
  }

  // return token with { publishServer, targetServer and private object }
  return jwt.sign(encryptObject, secretKey, { expiresIn: "10m" })
}

export const encrypt = (encrypt: EncryptForm, secretKey: string) => {
  return jwt.sign(encrypt, secretKey)
}