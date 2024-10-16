import appendToEachArrayValue from './10-loops.js';

describe('appendToEachArrayValue', () => {
  it('returns the correct array', () => {
    expect.assertions(1);
    expect(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-')).toStrictEqual(['correctly-appended', 'correctly-fixed', 'correctly-displayed']);
  });
});
