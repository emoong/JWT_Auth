import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

// constant
const port = 4000;

// middleware
app.use(express.json());

// router

// run server
app.listen(port, (): void => {
  console.log(`server is running on port ${port}`);
})