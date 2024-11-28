const dns = require('dns');

const resolveDNS = (domain) => {
  return new Promise((resolve, reject) => {
    if (!domain) {
      reject(new Error('Domain is required'));
    }

    dns.lookup(domain, (err, address, family) => {
      if (err) {
        reject(err);
      } else {
        resolve({ domain, address, family });
      }
    });
  });
};

module.exports = { resolveDNS };