export const parseJsonSilent = (json: string) => {
  try {
    return JSON.parse(json);
  } catch (e) {
    // ¯\_(ツ)_/¯
  }
};
