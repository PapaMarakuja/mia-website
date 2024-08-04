export const scrollIntoElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 75;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
