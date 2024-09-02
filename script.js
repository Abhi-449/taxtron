const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const body = document.body;

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-menu li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            }
});

