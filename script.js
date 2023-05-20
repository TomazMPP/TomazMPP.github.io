
  window.addEventListener("scroll", revealSections);

  function revealSections() {
    const sections = document.querySelectorAll("section");

    for (let i = 1; i < sections.length; i++) {
      const sectionTop = sections[i].getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        sections[i].classList.remove("hide");
      }
    }
  }
