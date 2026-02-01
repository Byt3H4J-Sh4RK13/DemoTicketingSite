document.addEventListener('DOMContentLoaded', function () {
    // Load Bootstrap JS FIRST
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js';

    // Define loadNavbar function BEFORE using it
    function loadNavbar() {
        // Check if container exists
        const container = document.getElementById('navbar-container');
        if (!container) {
            console.error('Error: navbar-container element not found!');
            return;
        }


        // Load navbar Note that it is relative to where the html file using this js is!!! NOT the js file itself
        fetch('./components/navbar.html')
            .then(response => { //MODIFIED FOR LOCAL FILE
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.text();
            })
            .then(html => {
                container.innerHTML = html;
                highlightActivePage();
                initBootstrapNav()
            })
            .catch(error => {
                console.error('Failed to load navbar:', error);
                container.innerHTML = `
                <nav class="navbar bg-warning">
                    <div class="container-fluid">
                        <span class="navbar-text">
                            Error loading navigation (${error.message})
                        </span>
                    </div>
                </nav>
            `;
            });
    }


    script.onload = function () {
        loadNavbar();
    };

    document.body.appendChild(script);

    function highlightActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    function initBootstrapNav() {
        // Initialize Bootstrap's dropdown/toggle functionality
        const toggler = document.querySelector('[data-bs-toggle="collapse"]');
        if (toggler) {
            new bootstrap.Collapse(
                document.querySelector(toggler.dataset.bsTarget),
                { toggle: false }
            );
        }
    }
});