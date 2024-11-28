const { resolveDNS } = require('./model');

describe('DNS Lookup', () => {
  test('Resolves a valid domain to its DNS records', async () => {
    const domain = 'example.com';
    const result = await resolveDNS(domain);

    expect(result).toHaveProperty('domain', domain);
    expect(result).toHaveProperty('address');
    expect(result).toHaveProperty('family');
    expect(result.family).toBeGreaterThan(0);
  });

  test('Throws error for an invalid domain', async () => {
    const domain = 'invalid.domain';
    await expect(resolveDNS(domain)).rejects.toThrow();
  });

  test('Throws error for undefined domain', async () => {
    await expect(resolveDNS()).rejects.toThrow('Domain is required');
  });
});