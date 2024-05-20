document.addEventListener("DOMContentLoaded", function() {
    const aboutMeSection = document.getElementById("aboutMe");
    const portfolioSection = document.getElementById("portafolio");
    const skillsSection = document.getElementById("skills");

    const btnAbout = document.getElementById("btnAbout");
    const btnPortfolio = document.getElementById("btnPortafolio");
    const btnSkills = document.getElementById("btnSkills");

    btnAbout.addEventListener("click", function() {
        showSection(aboutMeSection);
    });

    btnPortfolio.addEventListener("click", function() {
        showSection(portfolioSection);
    });

    btnSkills.addEventListener("click", function() {
        showSection(skillsSection);
    });

    function showSection(section) {
        // Oculta todas las secciones
        const sections = document.querySelectorAll("main section");
        sections.forEach(function(sec) {
            sec.classList.remove("show");
        });

        // Muestra la sección deseada
        section.classList.add("show");
    }
});

window.onload = function() {
    Particles.init({
      selector: '.background',
      color: ['#DA0463', '#404B69', '#DBEDF3'],
      connectParticles:true,
      minDistance:calculateMinDistance(), // calcular el valor inicial de la distancia
      enable:true
      
    });

    // Escuchando el evento resize
    window.addEventListener('resize', function() {
        particles.options.minDistance = calculateMinDistance();
        particles.fn.particlesRefresh();
    });

// Función para calcular minDistance basado en el ancho de la ventana
function calculateMinDistance() {

    // Ancho de la ventana
    var windowWidth = window.innerWidth;
    // Ajustar minDistance según el ancho de la ventana
    if (windowWidth <= 768) { // Si el ancho de la ventana es menor o igual a 768px (puedes ajustar este valor según tus necesidades)
        return 45; // Reducir a la mitad la distancia mínima cuando la ventana sea angosta
    } else {
        return 120; // Mantener el valor predeterminado de minDistance en otras situaciones
    }
}

  };