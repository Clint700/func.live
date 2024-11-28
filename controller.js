const { resolveDNS } = require('./model');

const dnsLookup = async (req, res) => {
  try {
    const { domain } = req.body;

    if (!domain) {
      return res.status(400).json({ error: 'Domain is required' });
    }

    const result = await resolveDNS(domain);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to resolve DNS', details: error.message });
  }
};

const getDocs = async (req, res) => {
  const docs = {
    name: "dnsLookup",
    description: "Resolve DNS records for a given domain",
    input: {
      type: "string",
      description: "The domain you want to resolve",
      example: "example.com",
    },
    output: {
      type: "object",
      description: "The resolved DNS information",
      example: {
        domain: "example.com",
        address: "93.184.216.34",
        family: 4,
      },
    },
  };

  res.json(docs);
};

module.exports = { dnsLookup, getDocs };