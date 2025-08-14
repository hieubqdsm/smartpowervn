// Main JavaScript for Smart Power Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Back to top button
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validation
            if (!data.firstName || !data.phone) {
                showNotification('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
                return;
            }
            
            // Phone number validation
            const phoneRegex = /^[0-9+\-\s()]+$/;
            if (!phoneRegex.test(data.phone)) {
                showNotification('Số điện thoại không hợp lệ!', 'error');
                return;
            }
            
            // Email validation (if provided)
            if (data.email && !isValidEmail(data.email)) {
                showNotification('Email không hợp lệ!', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="loading"></span> Đang gửi...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.project-card, .service-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });

    // Counter animation for statistics
    const statNumbers = document.querySelectorAll('.stat-number');
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statObserver.observe(stat);
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // Tooltip functionality
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip-text';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: #333;
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 12px;
                z-index: 1000;
                pointer-events: none;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
            
            this.tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.tooltip) {
                this.tooltip.remove();
                this.tooltip = null;
            }
        });
    });

    // Search functionality (if needed)
    const searchInput = document.querySelector('#search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const searchableElements = document.querySelectorAll('[data-search]');
            
            searchableElements.forEach(element => {
                const text = element.getAttribute('data-search').toLowerCase();
                if (text.includes(query)) {
                    element.style.display = '';
                } else {
                    element.style.display = 'none';
                }
            });
        });
    }

    // Cookie consent (if needed)
    if (!localStorage.getItem('cookieConsent')) {
        showCookieConsent();
    }
});

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const suffix = element.textContent.replace(/\d/g, '');
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 30);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#16a34a';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc2626';
            break;
        case 'warning':
            notification.style.backgroundColor = '#d97706';
            break;
        default:
            notification.style.backgroundColor = '#3b82f6';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

function showCookieConsent() {
    const consent = document.createElement('div');
    consent.className = 'cookie-consent';
    consent.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #1f2937;
        color: white;
        padding: 20px;
        text-align: center;
        z-index: 10000;
        transform: translateY(100%);
        transition: transform 0.3s ease;
    `;
    
    consent.innerHTML = `
        <p class="mb-4">Chúng tôi sử dụng cookie để cải thiện trải nghiệm của bạn. 
        <a href="#" class="text-green-400 underline">Tìm hiểu thêm</a></p>
        <div class="flex justify-center space-x-4">
            <button class="accept-cookies bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                Chấp nhận
            </button>
            <button class="decline-cookies bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">
                Từ chối
            </button>
        </div>
    `;
    
    document.body.appendChild(consent);
    
    // Animate in
    setTimeout(() => {
        consent.style.transform = 'translateY(0)';
    }, 100);
    
    // Event listeners
    consent.querySelector('.accept-cookies').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        consent.style.transform = 'translateY(100%)';
        setTimeout(() => consent.remove(), 300);
    });
    
    consent.querySelector('.decline-cookies').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        consent.style.transform = 'translateY(100%)';
        setTimeout(() => consent.remove(), 300);
    });
}

// Performance optimization: Debounce function
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

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Recalculate any dynamic layouts here
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
    }
}, 250));

// Handle page visibility change
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden, pause any animations or timers
        document.title = 'Smart Power Viet Nam - Quay lại với chúng tôi!';
    } else {
        // Page is visible again
        document.title = 'Smart Power Vietnam - Lắp đặt Hệ thống Điện Năng Lượng Mặt Trời';
    }
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
