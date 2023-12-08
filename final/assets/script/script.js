document.addEventListener("DOMContentLoaded", function () {
    const sidebarCircles = document.querySelectorAll('.sidebarCircle');
    const sections = document.querySelectorAll('.sections');
  
    function activeSidebarCircle(index) {
        sidebarCircles.forEach((circle, i) => {
        if (i === index) {
          circle.classList.add('active');
        } else {
          circle.classList.remove('active');
        }
      });
    }
  
    function handleScroll() {
      const scrollPosition = window.scrollY;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSidebarCircle(index);
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  