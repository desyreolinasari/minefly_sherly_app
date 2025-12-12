// Fungsi untuk toggle menu navigasi (buka/tutup)
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
    
    if (menuIcon) {
        menuIcon.classList.toggle('active');
    }
}

// Fungsi untuk menutup menu
function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (navLinks) {
        navLinks.classList.remove('active');
    }
    
    if (menuIcon) {
        menuIcon.classList.remove('active');
    }
}

// Event listener untuk tombol menu (hamburger)
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
    
    // Tutup menu saat link diklik (khusus untuk mobile)
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Cek jika link adalah link eksternal (Linktree)
            if (this.getAttribute('href').startsWith('http')) {
                // Biarkan link eksternal terbuka secara normal
                closeMenu();
            } else {
                // Untuk link internal, tutup menu
                closeMenu();
            }
        });
    });
    
    // Tutup menu saat klik di luar menu
    document.addEventListener('click', function(e) {
        const nav = document.querySelector('nav');
        const navLinksEl = document.getElementById('navLinks');
        
        if (nav && navLinksEl && !nav.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Highlight menu aktif berdasarkan halaman saat ini
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active-page');
        }
    });
});

// Fungsi smooth scroll (jika ada anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            closeMenu();
        }
    });
});