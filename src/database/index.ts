import mongoose from "mongoose";

const connect = (): Promise<void> => mongoose.connect('url string')
  .catch(e => {
    throw console.log(e);
  })
  .then(() => {
    console.log('mongoDB server is connected');
  })

export { connect };