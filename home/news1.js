// Optional efek saat scroll muncul
document.addEventListener("DOMContentLoaded", () => {
  const news = document.querySelector(".news-glass");
  news.style.opacity = "0";
  news.style.transform = "translateY(40px)";
  setTimeout(() => {
    news.style.transition = "all 0.7s ease";
    news.style.opacity = "1";
    news.style.transform = "translateY(0)";
  }, 100);
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }