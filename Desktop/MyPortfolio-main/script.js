// Improved script.js
document.addEventListener('DOMContentLoaded', function() {
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");
  let header = document.querySelector("header");
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  // Menu toggle
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  // Scroll event handling - improved for performance
  let scrollThrottleTimer;
  window.addEventListener('scroll', function() {
    if (!scrollThrottleTimer) {
      scrollThrottleTimer = setTimeout(function() {
        handleScroll();
        scrollThrottleTimer = null;
      }, 100);
    }
  });

  function handleScroll() {
    // Update header style on scroll
    header.classList.toggle("sticky", window.scrollY > 100);
    
    // Close mobile menu on scroll
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
    
    // Set active nav link based on current section
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        document.querySelector(`header nav a[href*="${id}"]`)?.classList.add("active");
      }
    });
  }

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close mobile menu
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
      
      // Scroll to section
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Initialize ScrollReveal
  const sr = ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
    reset: false
  });

  sr.reveal(".home-content, .heading", { origin: "top" });
  sr.reveal(".home-img, .services-container, .portfolio-box, .contact form", { 
    origin: "bottom",
    interval: 200
  });
  sr.reveal(".home-content h1, .about-img", { origin: "left" });
  sr.reveal(".home-content p, .about-content", { origin: "right" });
  sr.reveal(".skill-card", {
    origin: "bottom",
    interval: 100
  });

  // Initialize Typed.js
  const typed = new Typed(".multiple-text", {
    strings: [
      "Frontend Developer", 
      "Software Engineer", 
      "Web Designer", 
      "Java Developer"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });


  function copyPhoneNumber() {
    const phone = "+91 7684972630";
    navigator.clipboard.writeText(phone).then(() => {
      alert("Phone number copied to clipboard!");
    });
  }

  function openEmail() {
    const email = "routjig09@gmail.com";
    window.location.href = `mailto:${email}`;
  }

  // Form submission enhancement
  const contactForm = document.querySelector('.contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // You can add form validation here
      const nameInput = document.querySelector('input[name="name"]');
      const emailInput = document.querySelector('input[name="email"]');
      const messageInput = document.querySelector('textarea[name="message"]');
      
      // Simple validation example
      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        e.preventDefault();
        alert('Please fill all required fields');
      }
    });
  }
});