 
    const texts = ["Student", "Web Developer", "Tech Enthusiast"];
    let count = 0, index = 0, currentText = '', letter = '';

    function type() {
      if (count === texts.length) count = 0;
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      document.getElementById('typing').textContent = letter;
      if (letter.length === currentText.length) {
        setTimeout(() => {
          index = 0;
          count++;
          setTimeout(type, 500);
        }, 1000);
      } else {
        setTimeout(type, 150);
      }
    }
    type();

    // Scroll reveal logic
    const sections = document.querySelectorAll("section");
    const revealOnScroll = () => {
      const trigger = window.innerHeight * 0.85;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < trigger) {
          section.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);
  