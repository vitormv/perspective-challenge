import { hexToRgb } from './hexToRgb';

describe('hexToRgb', () => {
  it('converts hex color to RGB', () => {
    expect(hexToRgb('#0033FF')).toEqual({ r: 0, g: 51, b: 255 });
    expect(hexToRgb('#03F')).toEqual({ r: 0, g: 51, b: 255 });
  });

  it('returns null for invalid hex color', () => {
    expect(hexToRgb('#ZZZ')).toBeNull();
  });

  it('works without a leading hash', () => {
    expect(hexToRgb('0033FF')).toEqual({ r: 0, g: 51, b: 255 });
  });
});
