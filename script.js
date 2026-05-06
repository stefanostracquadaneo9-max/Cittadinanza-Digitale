// Determina la pagina attuale e attiva il nav-link corrispondente
document.addEventListener('DOMContentLoaded', function() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    
    // Mappa di file a data-section
    const fileToSection = {
        'index.html': 'home',
        'cieid.html': 'cieid',
        'spid.html': 'spid',
        'firma-digitale.html': 'firma-digitale',
        'pec.html': 'pec'
    };
    
    const currentSection = fileToSection[currentFile];
    
    // Rimuovi active da tutti i nav-link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Aggiungi active al nav-link corretto
    if (currentSection) {
        const activeLink = document.querySelector(`[data-section="${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // Aggiungi event listeners per la navigazione
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            
            // Mappa inversa: section a file
            const sectionToFile = {
                'home': 'index.html',
                'cieid': 'cieid.html',
                'spid': 'spid.html',
                'firma-digitale': 'firma-digitale.html',
                'pec': 'pec.html'
            };
            
            if (sectionToFile[section]) {
                window.location.href = sectionToFile[section];
            }
        });
    });
});
