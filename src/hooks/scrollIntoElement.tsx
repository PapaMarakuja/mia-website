export const scrollIntoElement = (id: string) => {
  const topNavbarHeight = 75;
  setTimeout(() => {
    const y = document.getElementById(id);
    if (y) {
      const t = y.getBoundingClientRect().top + window.scrollY - topNavbarHeight;
      window.scroll({ top: t, behavior: 'smooth' });
    }
  }, 10);
};
