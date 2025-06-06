AOS.init({
            duration: 1000,
            once: true
        });

        // Initialize featured work carousel
        document.addEventListener('DOMContentLoaded', function() {
            new bootstrap.Carousel(document.getElementById('featuredWorkCarousel'), {
                interval: 5000,     // Time between slides in milliseconds
                touch: true,        // Enable touch swiping
                pause: 'hover',     // Pause on mouse hover
                ride: 'carousel',   // Start cycling automatically
                wrap: true          // Enable continuous loop
            });
        });


        // case study 
//         document.querySelectorAll('.nav-item input[type="radio"]').forEach(radio => {
//     radio.addEventListener('change', (e) => {
//         const targetId = e.target.id.replace('nav-', '');
//         const targetSection = document.getElementById(targetId);
//         targetSection.scrollIntoView({ behavior: 'smooth' });
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');
    const radioButtons = document.querySelectorAll('.nav-item input[type="radio"]');

    // Handle radio button clicks
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const targetId = e.target.id.replace('nav-', '');
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Handle scroll events
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Add some offset to account for fixed header and better UX
            if (pageYOffset >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });

        // Update radio button states
        radioButtons.forEach(radio => {
            const correspondingSection = radio.id.replace('nav-', '');
            if (correspondingSection === currentSection) {
                radio.checked = true;
            }
        });
    }, { passive: true });

    // Add active class to radio labels for visual feedback
    const labels = document.querySelectorAll('.nav-item label');
    labels.forEach(label => {
        label.addEventListener('click', () => {
            labels.forEach(l => l.classList.remove('active'));
            label.classList.add('active');
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    // Handle hash in URL when page loads
    if (window.location.hash) {
        // Wait a moment for page to load
        setTimeout(function() {
            const targetId = window.location.hash;
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offset = 60;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }

    // Handle click navigation
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            const offset = 60;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update URL without triggering scroll
            history.pushState(null, null, targetId);
        });
    });
});