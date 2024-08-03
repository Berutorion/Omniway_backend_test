import mongoose from "mongoose";
import EnvVars from "@src/common/EnvVars";
import logger from 'jet-logger';


export const connectDB = async () => {
    try {
      await mongoose.connect(EnvVars.DatabaseURL);
      logger.info('MongoDB connected')
    } catch (err) {
      logger.err(err.message);
      process.exit(1);
    }
  };