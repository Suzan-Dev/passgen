const charaters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_+-=';

const getRandomPassword = (length, pass) => {
  let password = '';
  for (i = 0; i < length; i++) {
    password += pass.charAt(Math.floor(Math.random() * pass.length));
  }

  return password;
};

const generatePassword = (length, hasNumbers, hasSymbols) => {
  let pass = charaters;
  hasNumbers ? (pass += numbers) : '';
  hasSymbols ? (pass += symbols) : '';
  return getRandomPassword(length, pass);
};

module.exports = generatePassword;
