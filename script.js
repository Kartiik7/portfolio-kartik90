// Modern Portfolio JavaScript - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Navigation functionality
    initializeNavigation();
    
    // Smooth scrolling for navigation links
    initializeSmoothScrolling();
    
    // Contact form handling
    initializeContactForm();
    
    // Intersection Observer for animations
    initializeScrollAnimations();
    
    // Mobile navigation
    initializeMobileNavigation();
    
    // Project interactions
    initializeProjectInteractions();
});

// Navigation functionality
function initializeNavigation() {
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add/remove background based on scroll position
        if (currentScrollY > 50) {
            nav.style.background = 'hsl(var(--background) / 0.95)';
        } else {
            nav.style.background = 'hsl(var(--background) / 0.8)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Highlight active navigation link
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'hsl(var(--primary))';
            }
        });
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Hero button scroll to projects
    const viewWorkBtn = document.querySelector('.hero-buttons .btn-primary');
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                const offsetTop = projectsSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Contact form handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i data-lucide="loader-2" class="animate-spin"></i> <span>Sending...</span>';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData);
            
            try {
                // Simulate form submission (replace with your actual endpoint)
                await simulateFormSubmission(formValues);
                
                // Show success message
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                
            } catch (error) {
                // Show error message
                showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                // Restore button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Re-initialize icons
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        });
    }
}

// Simulate form submission
async function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random success/failure for demo
            if (Math.random() > 0.1) { // 90% success rate
                resolve(data);
            } else {
                reject(new Error('Simulation error'));
            }
        }, 2000);
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${type === 'success' ? 'hsl(120 60% 50%)' : 'hsl(0 60% 50%)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--glow-subtle);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    const autoRemove = setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        clearTimeout(autoRemove);
        removeNotification(notification);
    });
    
    // Close button styles
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 1rem;
        padding: 0;
        line-height: 1;
    `;
}

// Remove notification
function removeNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Intersection Observer for scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(`
        .skill-category,
        .project-card,
        .timeline-item,
        .education-item,
        .interest-item,
        .contact-method,
        .social-method
    `);
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Mobile navigation
function initializeMobileNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        // Create mobile menu
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.innerHTML = navLinks.innerHTML;
        document.body.appendChild(mobileMenu);
        
        // Style mobile menu
        mobileMenu.style.cssText = `
            position: fixed;
            top: 4rem;
            left: 0;
            right: 0;
            background: hsl(var(--background) / 0.95);
            backdrop-filter: blur(10px);
            border-top: 1px solid hsl(var(--border));
            border-bottom: 1px solid hsl(var(--border));
            padding: 2rem;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 999;
            display: none;
        `;
        
        // Mobile menu links styling
        const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
        mobileLinks.forEach(link => {
            link.style.cssText = `
                display: block;
                padding: 1rem 0;
                font-size: 1.125rem;
                border-bottom: 1px solid hsl(var(--border) / 0.3);
            `;
            
            // Close menu when link is clicked
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
        
        let isMenuOpen = false;
        
        navToggle.addEventListener('click', () => {
            if (isMenuOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
        
        function openMobileMenu() {
            mobileMenu.style.display = 'block';
            setTimeout(() => {
                mobileMenu.style.transform = 'translateY(0)';
                mobileMenu.style.opacity = '1';
            }, 10);
            isMenuOpen = true;
            document.body.style.overflow = 'hidden';
        }
        
        function closeMobileMenu() {
            mobileMenu.style.transform = 'translateY(-100%)';
            mobileMenu.style.opacity = '0';
            setTimeout(() => {
                mobileMenu.style.display = 'none';
            }, 300);
            isMenuOpen = false;
            document.body.style.overflow = '';
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !navToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMobileMenu();
            }
        });
    }
}

// Project interactions
function initializeProjectInteractions() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Project link interactions
    const projectLinks = document.querySelectorAll('.project-links .btn');
    
    projectLinks.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const isLiveDemo = btn.textContent.includes('Live') || btn.textContent.includes('Demo');
            const isCode = btn.textContent.includes('Code') || btn.textContent.includes('GitHub');
            
            if (isLiveDemo) {
                showNotification('This is a demo project. Live link would open the actual application.', 'info');
            } else if (isCode) {
                showNotification('This would open the GitHub repository for this project.', 'info');
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some interactive polish
function addInteractivePolish() {
    // Add loading states to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize interactive polish
addInteractivePolish();

// Performance optimization: Lazy load images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.3s ease';
                    
                    img.onload = () => {
                        img.style.opacity = '1';
                    };
                    
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
initializeLazyLoading();

// Console greeting
console.log('%c🚀 Welcome to my Portfolio!', 'color: #8B5CF6; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with ❤️ using HTML, CSS, and JavaScript', 'color: #06B6D4; font-size: 14px;');
console.log('%cInterested in the source code? Check out the repository!', 'color: #10B981; font-size: 12px;');