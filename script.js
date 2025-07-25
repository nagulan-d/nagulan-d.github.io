// DOM Elements
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const navbar = document.querySelector(".navbar")
const contactForm = document.getElementById("contact-form")
const typingText = document.querySelector(".typing-text")
const subtitle = document.querySelector(".subtitle")

// Mobile Navigation Toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav")
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "#222"
  } else {
    nav.style.backgroundColor = "#333"
  }
})

// Typing Animation
const texts = ["Full Stack Developer", "DevOps Enthusiast", "Problem Solver", "Tech Innovator"]

let textIndex = 0
let charIndex = 0
let isDeleting = false
let typingSpeed = 100

function typeText() {
  const currentText = texts[textIndex]

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1)
    charIndex--
    typingSpeed = 50
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1)
    charIndex++
    typingSpeed = 100
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true
    typingSpeed = 2000 // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    textIndex = (textIndex + 1) % texts.length
    typingSpeed = 500 // Pause before next word
  }

  setTimeout(typeText, typingSpeed)
}

// Start typing animation
typeText()

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")

      // Animate skill bars
      if (entry.target.classList.contains("skills")) {
        animateSkillBars()
      }

      // Animate counters
      if (entry.target.classList.contains("about-stats")) {
        animateCounters()
      }
    }
  })
}, observerOptions)

// Observe sections for animations
document.querySelectorAll("section").forEach((section) => {
  section.classList.add("fade-in")
  observer.observe(section)
})

// Skill bars animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress")
  skillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width")
    setTimeout(() => {
      bar.style.width = width
    }, 500)
  })
}

// Counter animation
function animateCounters() {
  const counters = document.querySelectorAll(".stat h3")
  counters.forEach((counter) => {
    const target = Number.parseInt(counter.textContent.replace("+", ""))
    let current = 0
    const increment = target / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        counter.textContent = target + "+"
        clearInterval(timer)
      } else {
        counter.textContent = Math.floor(current) + "+"
      }
    }, 50)
  })
}

// Form validation and submission
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const name = formData.get("name").trim()
  const email = formData.get("email").trim()
  const subject = formData.get("subject").trim()
  const message = formData.get("message").trim()

  // Clear previous errors
  clearFormErrors()

  // Validate form
  let isValid = true

  if (!name) {
    showFormError("name", "Name is required")
    isValid = false
  }

  if (!email) {
    showFormError("email", "Email is required")
    isValid = false
  } else if (!isValidEmail(email)) {
    showFormError("email", "Please enter a valid email")
    isValid = false
  }

  if (!subject) {
    showFormError("subject", "Subject is required")
    isValid = false
  }

  if (!message) {
    showFormError("message", "Message is required")
    isValid = false
  } else if (message.length < 10) {
    showFormError("message", "Message must be at least 10 characters")
    isValid = false
  }

  if (!isValid) return

  // Show loading state
  const submitBtn = contactForm.querySelector(".btn")
  submitBtn.classList.add("loading")

  try {
    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Show success message
    showSuccessMessage("Thank you! Your message has been sent successfully.")
    contactForm.reset()
  } catch (error) {
    showErrorMessage("Sorry, there was an error sending your message. Please try again.")
  } finally {
    submitBtn.classList.remove("loading")
  }
})

// Form validation helpers
function clearFormErrors() {
  document.querySelectorAll(".form-error").forEach((error) => {
    error.textContent = ""
  })
  document.querySelectorAll(".form-group input, .form-group textarea").forEach((input) => {
    input.classList.remove("error", "success")
  })
}

function showFormError(fieldName, message) {
  const errorElement = document.getElementById(`${fieldName}-error`)
  const inputElement = document.getElementById(fieldName)

  if (errorElement) errorElement.textContent = message
  if (inputElement) inputElement.classList.add("error")
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function showSuccessMessage(message) {
  // Create and show success notification
  const notification = createNotification(message, "success")
  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 5000)
}

function showErrorMessage(message) {
  // Create and show error notification
  const notification = createNotification(message, "error")
  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 5000)
}

function createNotification(message, type) {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    `

  if (type === "success") {
    notification.style.background = "linear-gradient(135deg, #38a169, #48bb78)"
  } else {
    notification.style.background = "linear-gradient(135deg, #e53e3e, #fc8181)"
  }

  notification.textContent = message

  // Add close button
  const closeBtn = document.createElement("button")
  closeBtn.innerHTML = "×"
  closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 1rem;
        opacity: 0.8;
        transition: opacity 0.2s;
    `

  closeBtn.addEventListener("click", () => {
    notification.remove()
  })

  closeBtn.addEventListener("mouseenter", () => {
    closeBtn.style.opacity = "1"
  })

  closeBtn.addEventListener("mouseleave", () => {
    closeBtn.style.opacity = "0.8"
  })

  notification.appendChild(closeBtn)

  return notification
}

// Add CSS for notification animation
const style = document.createElement("style")
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`
document.head.appendChild(style)

// Parallax effect for floating elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".floating-element")

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Add hover effects to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = "#f0f0f0"
  })

  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "#f9f9f9"
  })
})

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target
      img.src = img.dataset.src
      img.classList.remove("lazy")
      observer.unobserve(img)
    }
  })
})

document.querySelectorAll("img[data-src]").forEach((img) => {
  imageObserver.observe(img)
})

// Add active navigation highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll("nav a[href^='#']")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.style.color = "white"
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "#4CAF50"
    }
  })
})

// Simple animation for stats when they come into view
function animateStats() {
  const statBoxes = document.querySelectorAll(".stat-box")

  statBoxes.forEach((box) => {
    const rect = box.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0

    if (isVisible) {
      box.style.transform = "scale(1.05)"
      setTimeout(() => {
        box.style.transform = "scale(1)"
      }, 200)
    }
  })
}

// Run animations on scroll
window.addEventListener("scroll", animateStats)

// Simple typing effect for subtitle (optional)
if (subtitle) {
  const text = subtitle.textContent
  subtitle.textContent = ""

  let i = 0
  function typeWriter() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }

  // Start typing effect after page loads
  setTimeout(typeWriter, 1000)
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add loading animation to page
  document.body.classList.add("loaded")

  // Initialize AOS (Animate On Scroll) alternative
  const elements = document.querySelectorAll(".fade-in")
  elements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`
  })
})

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
  // Scroll-dependent functions here
}, 16) // ~60fps

window.addEventListener("scroll", throttledScrollHandler)

console.log("Portfolio loaded! Made by Nagulan D 🚀")
