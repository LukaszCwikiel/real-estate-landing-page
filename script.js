/**
 * Premium Estate - Corporate Luxury JavaScript Interaction System
 * Est. Build Value: $5000+ | Pure Modernism
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ==========================================================================
    // 1. Fixed Header Navigation UI Performance Scroll Effect
    // ==========================================================================
    const header = document.querySelector('.main-header');
    
    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();


    // ==========================================================================
    // 2. Adaptive Mobile Menu System (Smooth Drawer)
    // ==========================================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn');

    const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        
        // Prevent body background scroll when menu overlay is active
        document.body.style.overflow = !isExpanded ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });


    // ==========================================================================
    // 3. Ultra-Smooth Premium Real Estate Grid Filter
    // ==========================================================================
    const filterButtons = document.querySelectorAll('.btn-filter');
    const offerCards = document.querySelectorAll('.offer-card');
    const categoryLinks = document.querySelectorAll('.category-link');

    const filterOffers = (filterValue) => {
        // Active button visual state updates
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') === filterValue) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Grid Animation Sequence
        offerCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.display = 'block';
                // Micro-timeout ensures display:block is rendered before transition triggers
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px) scale(0.95)';
                
                const handleTransitionEnd = (e) => {
                    if (e.propertyName === 'transform' || e.propertyName === 'opacity') {
                        card.style.display = 'none';
                        card.removeEventListener('transitionend', handleTransitionEnd);
                    }
                };
                card.addEventListener('transitionend', handleTransitionEnd);
            }
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filterValue = e.target.getAttribute('data-filter');
            filterOffers(filterValue);
        });
    });

    // Intercept top Category Card internal navigation to connect directly to the engine
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const filterValue = link.getAttribute('data-filter');
            if (filterValue) {
                filterOffers(filterValue);
            }
        });
    });


    // ==========================================================================
    // 4. Premium FAQ Accordion Mechanics (Dynamic Max-Height Injection)
    // ==========================================================================
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            // Close all active sibling accordion panels to maintain visual balance
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add('active');
                // Calculate pristine precise content height dynamically
                answer.style.maxHeight = `${answer.scrollHeight}px`;
            }
        });
    });


    // ==========================================================================
    // 5. High-Converting Corporate Lead Capture Submission Form Engine
    // ==========================================================================
    const leadForm = document.getElementById('lead-form');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('form-name').value.trim();
            const phone = document.getElementById('form-phone').value.trim();
            
            const submitBtn = leadForm.querySelector('button[type="submit"]');
            
            submitBtn.disabled = true;
            submitBtn.innerText = 'Przetwarzanie danych...';

            // High-end professional latency animation loop simulating CRM synchronization
            setTimeout(() => {
                leadForm.style.opacity = '0';
                
                setTimeout(() => {
                    leadForm.innerHTML = `
                        <div class="form-success-message" style="padding: 60px 30px; text-align: center; background-color: #0B1B33; border: 1px solid #D4AF37; animation: fadeInSuccess 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;">
                            <span style="font-size: 3.5rem; display: block; margin-bottom: 24px; color: #D4AF37; font-family: var(--font-serif);">✓</span>
                            <h3 style="color: #FFFFFF; font-family: var(--font-serif); font-size: 1.8rem; font-weight: 400; margin-bottom: 16px;">Dziękujemy, ${name}!</h3>
                            <p style="color: #94A3B8; font-size: 1.05rem; line-height: 1.6; font-weight: 300;">Zgłoszenie inwestycyjne zostało przetworzone pomyślnie. Nasz dedykowany ekspert ds. rynku premium skontaktuje się z Tobą na numer <strong>${phone}</strong> w ciągu 15 minut.</p>
                        </div>
                    `;
                    leadForm.style.opacity = '1';
                }, 400);

            }, 1400);
        });
    }


    // ==========================================================================
    // 6. Premium Scroll Reveal (Dynamic Intersection Observer Infrastructure)
    // ==========================================================================
    const revealElements = document.querySelectorAll('.fade-in, .category-card, .offer-card, .step-card, .testimonial-card, .team-card');
    
    // Auto-inject structural animations tokens dynamically to guarantee layout styling
    revealElements.forEach(el => {
        if (!el.classList.contains('fade-in')) {
            el.classList.add('fade-in');
        }
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to trigger CSS cubic-bezier transition paths
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});