// ============================================
// HB Space TL - Professional JavaScript
// ============================================

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeNavbar();
    } catch (e) {
        console.error('Error initializing navbar:', e);
    }
    
    try {
        initializeParticles();
    } catch (e) {
        console.error('Error initializing particles:', e);
    }
    
    try {
        initializeTypingEffect();
    } catch (e) {
        console.error('Error initializing typing effect:', e);
    }
    
    try {
        initializeScrollAnimations();
    } catch (e) {
        console.error('Error initializing scroll animations:', e);
    }
    
    try {
        initializeScrollToTop();
    } catch (e) {
        console.error('Error initializing scroll to top:', e);
    }
    
    try {
        initializeFormHandling();
    } catch (e) {
        console.error('Error initializing form handling:', e);
    }
    
    try {
        initializeScrollIndicator();
    } catch (e) {
        console.error('Error initializing scroll indicator:', e);
    }
    
    try {
        initializeCounterAnimations();
    } catch (e) {
        console.error('Error initializing counter animations:', e);
    }
    
    try {
        initializeParallax();
    } catch (e) {
        console.error('Error initializing parallax:', e);
    }
    
    try {
        initializeMobileMenu();
    } catch (e) {
        console.error('Error initializing mobile menu:', e);
    }
    
    try {
        initializeFeatherIcons();
    } catch (e) {
        console.error('Error initializing feather icons:', e);
    }
    
    try {
        initializeOrderModal();
    } catch (e) {
        console.error('Error initializing order modal:', e);
    }
});

// ============================================
// Navbar Functionality
// ============================================
function initializeNavbar() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const menuToggle = document.getElementById('menuToggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (!nav) return;
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Handle nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Close mobile menu when clicking a link
            if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
            
            // Smooth scroll for anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement && nav) {
                    const navHeight = nav.offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            // Regular page links will navigate normally
        });
    });
}

// ============================================
// Mobile Menu
// ============================================
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const isActive = navLinks.classList.toggle('active');
            this.classList.toggle('active');
            this.setAttribute('aria-expanded', isActive);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
}

// ============================================
// Particles.js Initialization
// ============================================
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ============================================
// Typing Effect - Enhanced
// ============================================
function initializeTypingEffect() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;

    const texts = [
        'Apple Store Malawi',
        'Premium Products',
        'Genuine Apple',
        'Fast Delivery',
        'Expert Support'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;
    let pauseTime = 2000;
    let deleteSpeed = 40;
    let timeoutId = null;

    function type() {
        if (!typingText) return;
        
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Deleting text
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = deleteSpeed;
            
            if (charIndex < 0) {
                // Finished deleting, move to next text
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 600; // Pause before typing next
                typingText.textContent = '';
            }
        } else {
            // Typing text
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
            
            if (charIndex === currentText.length) {
                // Finished typing, pause then delete
                typingSpeed = pauseTime;
                isDeleting = true;
            }
        }

        timeoutId = setTimeout(type, typingSpeed);
    }

    // Start with empty text (cursor will show via CSS)
    typingText.textContent = '';
    
    // Start typing after a short delay
    setTimeout(() => {
        type();
    }, 800);
    
    // Cleanup function
    return function() {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    };
}

// ============================================
// Scroll Animations - Advanced
// ============================================
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Stagger animation for cards
                if (entry.target.classList.contains('service-card') || 
                    entry.target.classList.contains('team-card')) {
                    const cards = Array.from(entry.target.parentElement.children);
                    const index = cards.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(30px)';
                    
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe service cards with enhanced animations
    document.querySelectorAll('.service-card').forEach((card, index) => {
        observer.observe(card);
        card.style.opacity = '0';
    });

    // Observe team cards
    document.querySelectorAll('.team-card').forEach((card, index) => {
        observer.observe(card);
        card.style.opacity = '0';
    });

    // Observe partner cards
    document.querySelectorAll('.partner-card').forEach((card, index) => {
        observer.observe(card);
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
        }, index * 100);
    });
}

// ============================================
// Scroll to Top Button
// ============================================
function initializeScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (!scrollToTopBtn) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Form Handling - Formspree Integration
// ============================================
function initializeFormHandling() {
    const form = document.querySelector('form');
    if (!form) return;

    const formStatus = document.getElementById('form-status');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;
        formStatus.style.display = 'none';

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                formStatus.style.display = 'block';
                formStatus.style.background = 'rgba(24, 183, 106, 0.2)';
                formStatus.style.border = '1px solid rgba(24, 183, 106, 0.5)';
                formStatus.style.color = 'var(--secondary)';
                formStatus.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
                
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #18b76a, #0b4fd8)';
                
                // Reset form
                form.reset();
                
                // Reset button after 5 seconds
                setTimeout(function() {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    formStatus.style.display = 'none';
                }, 5000);
            } else {
                // Error from Formspree
                const data = await response.json();
                throw new Error(data.error || 'Failed to send message');
            }
        } catch (error) {
            // Show error message
            formStatus.style.display = 'block';
            formStatus.style.background = 'rgba(239, 68, 68, 0.2)';
            formStatus.style.border = '1px solid rgba(239, 68, 68, 0.5)';
            formStatus.style.color = '#ef4444';
            formStatus.textContent = '✗ ' + (error.message || 'Failed to send message. Please try again.');
            
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    // Add input animations
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}

// ============================================
// Scroll Indicator
// ============================================
function initializeScrollIndicator() {
    // Create scroll indicator if it doesn't exist
    let indicator = document.querySelector('.scroll-indicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        document.body.appendChild(indicator);
    }

    window.addEventListener('scroll', function() {
        if (!indicator) return;
        
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = Math.min((scrollTop / (documentHeight - windowHeight)) * 100, 100);
        indicator.style.width = scrollPercent + '%';
    });
}

// ============================================
// Counter Animations
// ============================================
function initializeCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    };

    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// ============================================
// Parallax Effect - Advanced
// ============================================
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = parseFloat(element.dataset.parallax) || 0.5;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    }
    
    // Throttled scroll for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Parallax for hero section
    const hero = document.getElementById('home');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
            }
        });
    }
}

// ============================================
// Smooth Reveal on Scroll - Enhanced
// ============================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    if (reveals.length === 0) return;
    
    reveals.forEach(element => {
        if (!element) return;
        
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 200;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
            element.classList.add('active');
        }
    });
}

// Throttled scroll for performance
let scrollTicking = false;
window.addEventListener('scroll', function() {
    if (!scrollTicking) {
        window.requestAnimationFrame(function() {
            revealOnScroll();
            scrollTicking = false;
        });
        scrollTicking = true;
    }
});

// Initial check
revealOnScroll();

// ============================================
// Initialize Feather Icons
// ============================================
function initializeFeatherIcons() {
    if (typeof feather !== 'undefined') {
        feather.replace();
        
        // Replace icons on dynamic content
        const iconObserver = new MutationObserver(function(mutations) {
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        });
        
        iconObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

// ============================================
// Utility Functions
// ============================================

// Debounce function
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

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js';
    document.head.appendChild(script);
}

// ============================================
// Order Modal Functionality
// ============================================
function initializeOrderModal() {
    const orderBtn = document.getElementById('orderBtn');
    const orderModal = document.getElementById('orderModal');
    const closeModal = document.getElementById('closeModal');
    const copyBtns = document.querySelectorAll('.copy-btn');

    // Open modal
    if (orderBtn && orderModal) {
        orderBtn.addEventListener('click', function() {
            orderModal.style.display = 'flex';
            // Force reflow
            orderModal.offsetHeight;
            setTimeout(() => {
                orderModal.classList.add('active');
            }, 10);
            document.body.style.overflow = 'hidden';
            
            // Reinitialize Feather icons for modal content
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        });
    }

    // Close modal
    function closeModalFunc() {
        if (orderModal) {
            orderModal.classList.remove('active');
            setTimeout(() => {
                if (!orderModal.classList.contains('active')) {
                    orderModal.style.display = 'none';
                }
            }, 300);
            document.body.style.overflow = '';
        }
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    // Close modal when clicking outside
    if (orderModal) {
        orderModal.addEventListener('click', function(e) {
            if (e.target === orderModal) {
                closeModalFunc();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && orderModal && orderModal.classList.contains('active')) {
            closeModalFunc();
        }
    });

    // Copy account number functionality
    copyBtns.forEach(btn => {
        btn.addEventListener('click', async function() {
            const accountNumber = this.getAttribute('data-copy');
            
            if (accountNumber) {
                try {
                    await navigator.clipboard.writeText(accountNumber);
                    
                    // Visual feedback
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i data-feather="check" style="width: 16px; height: 16px; margin-right: 0.5rem; vertical-align: middle;"></i>Copied!';
                    this.classList.add('copied');
                    
                    // Reinitialize Feather icons
                    if (typeof feather !== 'undefined') {
                        feather.replace();
                    }
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.classList.remove('copied');
                        if (typeof feather !== 'undefined') {
                            feather.replace();
                        }
                    }, 2000);
                } catch (err) {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = accountNumber;
                    textArea.style.position = 'fixed';
                    textArea.style.opacity = '0';
                    document.body.appendChild(textArea);
                    textArea.select();
                    
                    try {
                        document.execCommand('copy');
                        const originalText = this.innerHTML;
                        this.innerHTML = '<i data-feather="check" style="width: 16px; height: 16px; margin-right: 0.5rem; vertical-align: middle;"></i>Copied!';
                        this.classList.add('copied');
                        
                        if (typeof feather !== 'undefined') {
                            feather.replace();
                        }
                        
                        setTimeout(() => {
                            this.innerHTML = originalText;
                            this.classList.remove('copied');
                            if (typeof feather !== 'undefined') {
                                feather.replace();
                            }
                        }, 2000);
                    } catch (fallbackErr) {
                        alert('Failed to copy. Account number: ' + accountNumber);
                    }
                    
                    document.body.removeChild(textArea);
                }
            }
        });
    });
}

