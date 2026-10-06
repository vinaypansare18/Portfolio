/* --------------------------------- Portfolio JavaScript --------------------------- */

/* ------------------------------ Theme Toggle ----------------------------- */

// Theme Toggle Elements
const themeToggle = document.getElementById("themeToggle");
// Set Dark Mode as Default
document.body.classList.add("dark-mode");

// Theme Toggle Function

if (themeToggle) 
  {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    // Update Theme Icon
    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) 
      {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } 
    else 
    {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
}

/* ------------------------------------ Mobile Navigation ----------------------------- */

// Mobile Navigation Elements

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
// Open / Close Mobile Menu
if (menuToggle && navMenu) 
  {
   menuToggle.addEventListener("click", () => 
    {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");

    // Change Menu Icon

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) 
    {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } 
    else 
    {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
}

/* ---------------------------- Navigation Links ----------------------------- */

// Navigation Links

const navLinks = document.querySelectorAll(".nav-link");

// Close Mobile Menu After Clicking Link

navLinks.forEach((link) => 
{
  link.addEventListener("click", () => 
  {
    if (navMenu) 
    {
      navMenu.classList.remove("active");
    }

    if (menuToggle) 
    {
      menuToggle.classList.remove("active");
      const icon = menuToggle.querySelector("i");
      if (icon) 
      {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    }
  });
});

/* ---------------------------- Active Navigation Link ----------------------------- */

// Sections
const sections = document.querySelectorAll("section[id]");
// Detect Active Section While Scrolling
window.addEventListener("scroll", () => 
{
  let currentSection = "";
  sections.forEach((section) => 
  {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if ( window.scrollY >= sectionTop &&  window.scrollY < sectionTop + sectionHeight) 
    {
      currentSection = section.getAttribute("id");
    }
  });

  // Update Active Navigation Link

  navLinks.forEach((link) => 
  {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) 
    {
      link.classList.add("active");
    }
  });
});

/* ---------------------------- Back To Top ----------------------------- */

// Back To Top Button
const backToTop = document.getElementById("backToTop");
// Show / Hide Back To Top Button

window.addEventListener("scroll", () => 
{
  if (!backToTop) 
  {
    return;
  }

  if (window.scrollY > 500) 
  {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Scroll To Top

if (backToTop) {
  backToTop.addEventListener("click", () =>
  {
    window.scrollTo({top: 0, behavior: "smooth", });
  });
}

/* ----------------------------- Current Year --------------------------- */

// Set Current Year Automatically

const currentYear = document.getElementById("currentYear");

if (currentYear) 
{
  currentYear.textContent = new Date().getFullYear();
}

/* -----------------------------Contact Form ----------------------------- */

// Contact Form Elements

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Contact Form Submit

if (contactForm) 
{
  contactForm.addEventListener("submit", (event) => 
  {
    event.preventDefault();

    // Get Form Values

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic Validation

    if (!name || !email || !subject || !message) 
    {
      if (formMessage) 
      {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.classList.add("error");
      }

      return;
    }

    // Email Validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) 
    {
      if (formMessage) 
      {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.classList.add("error");
      }

      return;
    }

    // Success Message

    if (formMessage) 
    {
      formMessage.textContent = "Thank you! Your message has been submitted.";
      formMessage.classList.remove("error");
      formMessage.classList.add("success");
    }

    // Reset Form

    contactForm.reset();
  });
}

/* ----------------------------- Scroll Animations ----------------------------- */

// Elements To Animate

const animatedElements = document.querySelectorAll(
    ".section-title, .about-card, .skill-category, " +
    ".timeline-content, .project-card, .education-card, " +
    ".coding-card, .certification-card"
);


// Intersection Observer

const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px",};

// Create Observer

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) 
    {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe Elements

animatedElements.forEach((element) => {
  observer.observe(element);
});

/* ----------------------------- Smooth Scroll ----------------------------- */

// Smooth Scroll For Internal Links

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (targetId === "#" || !targetId)
    {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (targetElement) 
    {
      event.preventDefault();
      targetElement.scrollIntoView({  behavior: "smooth",  block: "start", });
    }
  });
});

/* ----------------------------- Page Load ----------------------------- */

// Add Loaded Class After Page Loads
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


/* ---------------------- End of Portfolio JavaScript ----------------------- */

