import mongoose, { Document, Schema } from 'mongoose';

export interface TokenInput {
  uid: string;
  password: string;
  targetServer: string;
  refreshToken: string;
}

export interface TokenDocument extends Document, TokenInput {
  createdAt: Date;
  updatedAt: Date;
}

const tokenSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  targetServer: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
  },
})

export default mongoose.model<TokenDocument>("User", tokenSchema);