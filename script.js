document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.getElementById("main-content");
  const sectionButtons = document.querySelectorAll(".section-button");

  function loadContent(sectionName) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", sectionName + ".html", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          fadeContent(xhr.responseText, sectionName);
        } else {
          console.error("Failed to fetch page: ", xhr.status);
          mainContent.innerHTML = `<p>Error loading content!</p>`;
        }
      }
    };
    xhr.send();
  }

  function fadeContent(newContent, sectionName) {
    mainContent.style.opacity = 0;
    setTimeout(() => {
      mainContent.innerHTML = newContent;
      fadeInContent();
      if (sectionName === 'portfolio') {
        initializeCarousel();
      }
    }, 500);
  }

  function fadeInContent() {
    let opacity = 0;
    const fadeIn = setInterval(() => {
      opacity += 0.05;
      if (opacity >= 1) {
        opacity = 1;
        clearInterval(fadeIn);
      }
      mainContent.style.opacity = opacity;
    }, 25);
  }

  sectionButtons.forEach(button => {
    button.addEventListener("click", function () {
      sectionButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      loadContent(this.getAttribute("data-section"));
    });
  });

  document.getElementById('home-button').classList.add('active');
  loadContent('home');

  /* === Fixed Carousel === */
  function initializeCarousel() {
    const carousel = document.getElementById('carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const btnLeft = document.getElementById('scrollLeft');
    const btnRight = document.getElementById('scrollRight');

    if (!carousel || !slides.length) return;

    let index = 0;

    const snapTo = (i) => {
      index = Math.max(0, Math.min(i, slides.length - 1));
      const offset = slides[0].getBoundingClientRect().width * index;
      carousel.scrollTo({ left: offset, behavior: 'smooth' });
    };

    btnLeft.onclick = () => snapTo(index - 1);
    btnRight.onclick = () => snapTo(index + 1);

    window.addEventListener('resize', () => snapTo(index));
  }
});
