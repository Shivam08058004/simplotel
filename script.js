// Menu Icon Toggle
const menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('click', function() {
    this.classList.toggle('active');
    
    // Toggle menu animation
    const spans = this.querySelectorAll('span');
    if (this.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Navigation between pages
const ctaButton = document.querySelector('.cta-button');
const infoLink = document.querySelector('.info-link');

ctaButton.addEventListener('click', function(e) {
    e.preventDefault();
    switchPage('page2');
});

infoLink.addEventListener('click', function(e) {
    e.preventDefault();
    switchPage('page1');
});

function switchPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the href and determine action
        const href = this.textContent.toLowerCase();
        
        // Add your navigation logic here
        console.log('Navigating to:', href);
    });
});

// Add animation on scroll for page 2 gallery items
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe gallery items when page 2 is active
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
});

// Button hover effect
const buttons = document.querySelectorAll('.cta-button, .info-link');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});
