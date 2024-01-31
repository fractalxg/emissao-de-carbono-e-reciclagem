export const scrollToSection = (section) => {
  const scrollSection = document.getElementById(section);
  if (scrollSection) {
    scrollSection.scrollIntoView({ behavior: "smooth" });
  }
};

export const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
