function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

// navbar

  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }

// darkmodebutton
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }

// skills
  function animateSkills() {
    const skillBars = document.querySelectorAll('.progress-bar');
    skillBars.forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      const progress = bar.querySelector('.progress');
      progress.style.width = percent;
    });
  }

// Trigger saat section masuk ke layar (pakai IntersectionObserver)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
        observer.disconnect(); // jalankan sekali saja
      }
    });
  });

  const skillsSection = document.getElementById('skills');
  observer.observe(skillsSection);

// experience
// Optional: efek muncul saat scroll
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".glass-box");

  const revealOnScroll = () => {
    boxes.forEach((box) => {
      const top = box.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        box.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
