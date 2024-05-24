export const isMobile = () => {
  if (typeof window !== 'undefined') {
    return Math.min(window.screen.width, window.screen.height) < 768;
  }
  return false; // or any default value you prefer
};
