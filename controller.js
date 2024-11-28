const { resolveDNS } = require('./model');

const dnsLookup = async (req, res) => {
  try {
    const { input } = req.body;

    if (!input) {
      return res.status(400).json({ error: 'Input is required' });
    }

    const result = await resolveDNS(input);
    res.json({ output: result });
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
        address: "93.184.216.34",
        family: 4,
      },
    },
  };

  res.json(docs);
};

module.exports = { dnsLookup, getDocs };