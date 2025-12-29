// Dark mode functionality
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme or default to light
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(themeIcon, currentTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeIcon, newTheme);
    });
}

function updateThemeIcon(icon, theme) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    // Handle navigation link clicks
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Update active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key to close any modals or return to top
        if (e.key === 'Escape') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('a, button, [tabindex]');
    interactiveElements.forEach(element => {
        if (!element.hasAttribute('tabindex') && element.tagName !== 'A' && element.tagName !== 'BUTTON') {
            element.setAttribute('tabindex', '0');
        }
    });

    // Expand/Collapse functionality for project cards
    const expandButtons = document.querySelectorAll('.btn-expand-collapse');
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.project-card-expandable');
            const shortDesc = card.querySelector('.project-description-short');
            const fullDesc = card.querySelector('.project-description-full');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                // Collapse
                shortDesc.style.display = 'block';
                fullDesc.style.display = 'none';
                this.textContent = 'Learn More';
                this.setAttribute('aria-expanded', 'false');
                card.classList.remove('expanded');
            } else {
                // Expand
                shortDesc.style.display = 'none';
                fullDesc.style.display = 'block';
                this.textContent = 'Collapse';
                this.setAttribute('aria-expanded', 'true');
                card.classList.add('expanded');
            }
        });
    });
});

