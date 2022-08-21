import mongoose, { Schema } from 'mongoose';
import bcrtpt from 'bcrtpt';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});
// 인스턴스 메소드
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrtpt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrtpt.compare(password, this.hashedPassword);
  return result;
};

// static 메소드
UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username: username });
};

const User = mongoose.model('User', UserSchema);

export default User;
