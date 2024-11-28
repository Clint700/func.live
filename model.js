const encodeToBase64 = (input) => {
    return Buffer.from(input).toString('base64');
  };
  
  module.exports = { encodeToBase64 };