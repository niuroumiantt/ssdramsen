// Main JavaScript for Solidigm Website

// Initialize Splide carousels
document.addEventListener('DOMContentLoaded', function() {
    // Products carousel
    const productsCarousel = document.getElementById('products-carousel');
    if (productsCarousel) {
        var splide = new Splide('#products-carousel', {
            type: 'loop',
            perPage: 4,
            perMove: 1,
            gap: '2rem',
            pagination: false,
            breakpoints: {
                1024: {
                    perPage: 3,
                },
                768: {
                    perPage: 2,
                },
                480: {
                    perPage: 1,
                }
            }
        });
        splide.mount();
    }
    
    // Hero carousel (if exists)
    const heroCarousel = document.getElementById('hero-carousel');
    if (heroCarousel) {
        var heroSplide = new Splide('#hero-carousel', {
            type: 'loop',
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            pagination: false,
        });
        heroSplide.mount();
    }
    
    // Lazy loading images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.cmp-navigation__toggle-button');
    const menuMid = document.querySelector('.cmp-navigation__menu-mid');
    
    if (menuToggle && menuMid) {
        menuToggle.addEventListener('click', function() {
            menuMid.classList.toggle('mobile-menu-open');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

