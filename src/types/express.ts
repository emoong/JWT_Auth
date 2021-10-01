import exprss, { Request, Response, NextFunction, } from "express";

export interface CustomRequest extends Request {
  privateObject: any
}