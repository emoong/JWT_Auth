import mongoose from "mongoose";

// config
import config from "./config";

const connect = (): Promise<void> => mongoose.connect(`mongodb+srv://${config.MONGO_ID}:${config.MONGO_PW}@cluster0.uy2y6.mongodb.net/${config.MONGO_COLLECTION}?retryWrites=true&w=majority`)
  .catch(e => {
    throw console.log(e);
  })
  .then(() => {
    console.log('mongoDB server is connected');
  })

export { connect };