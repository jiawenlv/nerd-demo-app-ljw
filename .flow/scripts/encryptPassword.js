import crypto from 'crypto';

export default function main(inputs) {
  const md5Hash = crypto.createHash('md5');
  const encryptedPassword = md5Hash.update(inputs.originalPassword).digest('hex');
  return {
    encryptedPassword: encryptedPassword
  };
}