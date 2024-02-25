export const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  const loadImages = imageUrls.map((url) => {
    return new Promise<void>((resolve, reject) => {
      let img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = url;
    });
  });

  return Promise.all(loadImages);
};
