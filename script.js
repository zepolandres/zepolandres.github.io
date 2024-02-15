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
