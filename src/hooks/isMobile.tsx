function getScreenWidth() {
  const width = window.screen.width;
  return width;
}

export const isMobile = () => getScreenWidth() < 890;
