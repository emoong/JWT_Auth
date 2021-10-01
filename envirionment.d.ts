declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_ID: string!;
      MONGO_PW: string!;
      MONGO_COLLECTION: string!;
      SECRET_KEY: string!;
      SERVER_ID: string!;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }