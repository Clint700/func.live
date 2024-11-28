const dns = require('dns');

const resolveDNS = (input) => {
  return new Promise((resolve, reject) => {
    if (!input) {
      reject(new Error('Input is required'));
    }

    dns.lookup(input, (err, address, family) => {
      if (err) {
        reject(err);
      } else {
        resolve({ address, family });
      }
    });
  });
};

module.exports = { resolveDNS };