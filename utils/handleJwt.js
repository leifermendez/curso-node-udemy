const bcrypt = require("bcryptjs");

/**
 * Encrypt textplain
 * @param {*} textPlain 
 * @returns 
 */
const encrypt = async (textPlain) => {
  const hash = await bcrypt.hash(textPlain, 10);
  return hash;
};


/**
 * Comparte password with hash
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 * @returns 
 */
const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };
