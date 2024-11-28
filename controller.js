const { encodeToBase64 } = require("./model");

const base64Encode = async (req, res) => {
  try {
    const { input } = req.body;
    if (!input) {
      return res.status(400).json({ error: "Input is required" });
    }
    const output = encodeToBase64(input);
    res.json({ output });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

const getDocs = async (req, res) => {
  const docs = {
    name: "base64EncodeCustom",
    description: "Custom function to encode anything to base64",
    input: {
      type: "string",
      description: "Input the data you'd like to encode to base64",
      example: "Hello, world",
    },
    output: {
      type: "string",
      description: "Base64 encoded string",
      example: "SGVsbG8sIHdvcmxk",
    },
  };
  res.json(docs);
};

module.exports = { base64Encode, getDocs };
