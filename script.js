document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();
  
    // 2. Intersection Observer for Reveal Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });
  
    // 3. Navbar Sticky and Scroll State
    const navbar = document.getElementById('navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 20;
        if (scrolled) {
          navbar.style.height = '64px';
          navbar.style.background = 'rgba(255, 255, 255, 0.75)';
          navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.04)';
        } else {
          navbar.style.height = '72px';
          navbar.style.background = 'rgba(255, 255, 255, 0.35)';
          navbar.style.boxShadow = 'none';
        }
      });
    }
  
    // 4. Set Current Bengali Year in Footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
      const bnYear = new Date().getFullYear().toLocaleString('bn-BD', { useGrouping: false });
      yearSpan.textContent = bnYear;
    }
  });
  
