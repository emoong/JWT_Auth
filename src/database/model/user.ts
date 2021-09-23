import mongoose, { Document, Schema } from 'mongoose';

export interface TokenInput {
  id: string;
  accessToken: string;
}

export interface TokenDocument extends Document {
  id: string;
  refreshToken: string;
  createdAt: Date;
  updatedAt: Date;
}

const tokenSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
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

// tokenSchema.pre("save", async function (this: TokenDocument, next: any) {

//   if (!this.isModified("password")) return next();

//   // if password is modified, save the password with encrypt..
//   return next();
// })

// userSchema.methods.comparePassword = async function (inputPassword: string): Promise<boolean> {
//   const user = this as UserDocument;
//   const comparison = async () => {
//     if (user.password === inputPassword) return true;
//     else return false;
//   }
//   return comparison();
// }

export default mongoose.model<TokenDocument>("User", tokenSchema);