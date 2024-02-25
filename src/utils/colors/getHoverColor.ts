/**
 * Since the colors come from the user, we need to make sure that the hover color of the buttons
 * follows the proper contrast ratio. It will lighten or darken the color based on the brightness.
 */
export const getHoverColor = (hexColor: string) => {
  // Convert the hex color to RGB values.
  const rgb =
    hexColor
      .match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
      ?.slice(1)
      .map((x) => parseInt(x, 16)) || [];

  // Calculate the average brightness of the color.
  const brightness = rgb.reduce((acc, value) => acc + value, 0) / 3;

  // Determine the direction to adjust the brightness (darken or lighten).
  const adjustDirection = brightness > 100 ? 'darken' : 'lighten';

  // Adjust the brightness based on the direction.
  const adjustedRgb = rgb.map((c) =>
    adjustDirection === 'darken' ? Math.max(0, c - 30) : Math.min(255, c + 30),
  );

  // Convert the new RGB values back to a hex color string.
  return `#${adjustedRgb.map((x) => x.toString(16).padStart(2, '0')).join('')}`;
};
