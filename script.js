// Preloader functionality
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
});

// Tab navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.nav-tabs a');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(targetId) {
        // Remove active class from all tabs and contents
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        const activeLink = document.querySelector(`.nav-tabs a[href="#${targetId}"]`);
        const activeContent = document.getElementById(targetId);

        if (activeLink && activeContent) {
            activeLink.classList.add('active');
            activeContent.classList.add('active');
        }
    }

    // Add click event listeners to tab links
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            switchTab(targetId);
        });
    });

    // Set default active tab (Home)
    switchTab('home');

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Save theme preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Expandable content functionality
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const expandBtn = item.querySelector('.expand-btn');
        const collapsibleContent = item.querySelector('.collapsible-content');

        if (expandBtn && collapsibleContent) {
            expandBtn.addEventListener('click', () => {
                collapsibleContent.classList.toggle('expanded');
                if (collapsibleContent.classList.contains('expanded')) {
                    expandBtn.textContent = 'Read Less';
                } else {
                    expandBtn.textContent = 'Read More';
                }
            });
        }
    });
});

