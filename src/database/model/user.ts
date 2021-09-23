import mongoose, { Document, Schema } from 'mongoose';

export interface UserInput {
  id: string;
  password: string;
  accessToken: string;
}

export interface UserDocument extends Document {
  id: string;
  password: string;
  refreshToken: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(inputPassword: string): Promise<boolean>;
}

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
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

userSchema.pre("save", async function (this: UserDocument, next: any) {

  if (!this.isModified("password")) return next();

  // if password is modified, save the password with encrypt..
  return next();
})

userSchema.methods.comparePassword = async function (inputPassword: string): Promise<boolean> {
  const user = this as UserDocument;
  const comparison = async () => {
    if (user.password === inputPassword) return true;
    else return false;
  }
  return comparison();
}

export default mongoose.model<UserDocument>("User", userSchema);