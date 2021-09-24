import { encrypt } from "./authentication/publish";
import { decrypt } from "./authentication/consume";
import { EncryptForm } from "./types/union";
import { secretKey } from './authentication/config';

const testObj: EncryptForm = {
  pubServerId: "123",
  targetServerId: "456",
  privateObj: {
    a: 1,
    b: 2,
  }
}
console.log(secretKey)
console.log(encrypt(testObj, "secret"));

console.log(decrypt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJTZXJ2ZXJJZCI6IjEyMyIsInRhcmdldFNlcnZlcklkIjoiNDU2IiwicHJpdmF0ZU9iaiI6eyJhIjoxLCJiIjoyfSwiaWF0IjoxNjMyNDUyNDAxfQ.QZg83Xz9GBBXg27LQMQxE3U3SQt761l5ZBak0AcNnpU', 'secret'))
console.log(decrypt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJTZXJ2ZXJJZCI6IjEyMyIsInRhcmdldFNlcnZlcklkIjoiNDU2IiwicHJpdmF0ZU9iaiI6eyJhIjoxLCJiIjoyfSwiaWF0IjoxNjMyNDUyNDAxfQ.QZg83Xz9GBBXg27LQMQxE3U3SQt761l5ZBak0AcNnpU', 'secret!'))