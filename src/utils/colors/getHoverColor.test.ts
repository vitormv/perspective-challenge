import { getHoverColor } from './getHoverColor';

describe('getHoverColor', () => {
  it('darkens a light color', () => {
    expect(getHoverColor('#FFFFFF')).toBe('#e1e1e1');
  });

  it('lightens a dark color', () => {
    expect(getHoverColor('#000000')).toBe('#1e1e1e');
  });

  it('handles a mid-range color', () => {
    expect(getHoverColor('#808080')).toBe('#626262');
  });
});
