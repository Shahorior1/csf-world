// Theme switcher
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
  
  // Apply saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Mobile menu
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Animation on scroll (simple version)
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animate-fade-in');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load
});

// Portfolio filtering
const setupPortfolioFilters = () => {
  const filterButtons = document.querySelectorAll('.portfolio-filter');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('btn-active'));
        
        // Add active class to clicked button
        button.classList.add('btn-active');
        
        const filter = button.getAttribute('data-filter');
        
        // Show/hide portfolio items based on filter
        portfolioItems.forEach(item => {
          if (filter === 'all') {
            item.style.display = 'block';
          } else {
            const categories = item.getAttribute('data-categories').split(' ');
            if (categories.includes(filter)) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          }
        });
      });
    });
  }
};

// Form validation
const setupContactForm = () => {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      let valid = true;
      const requiredFields = contactForm.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.classList.add('input-error');
        } else {
          field.classList.remove('input-error');
        }
      });
      
      if (valid) {
        // Show success message (in a real app, you'd send data to a server here)
        const successMsg = document.getElementById('form-success');
        if (successMsg) {
          successMsg.classList.remove('hidden');
          contactForm.reset();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            successMsg.classList.add('hidden');
          }, 5000);
        }
      }
    });
  }
};

// Run setup functions when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  setupPortfolioFilters();
  setupContactForm();
}); 