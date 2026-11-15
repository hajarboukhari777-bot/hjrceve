
const formulaire = document.getElementById("cv-form"); /*getelementbyid pour recuperer le formulaire*/

formulaire.addEventListener("submit", function(event) {

    event.preventDefault(); /*empêcher le formulaire de se soumettre et de recharger la page*/

    const nom = document.getElementById("nom").value; /*recuperer la valeur du nom*/
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;

    const profil = document.getElementById("profil").value;
    const formation = document.getElementById("formation").value;
    const experience = document.getElementById("experience").value;
    const competences = document.getElementById("competences").value;
    const langues = document.getElementById("langues").value;
const interets = document.getElementById("interets").value;
const certifications = document.getElementById("certifications").value;

    document.getElementById("preview-nom").textContent = nom; /*afficher le nom dans la section de prévisualisation*/
    document.getElementById("preview-email").textContent = email;
    document.getElementById("preview-telephone").textContent = telephone;

    document.getElementById("preview-profil").textContent = profil;
    document.getElementById("preview-formation").textContent = formation;
    document.getElementById("preview-experience").textContent = experience;
    document.getElementById("preview-competences").textContent = competences;
    document.getElementById("preview-langues").textContent = langues;
    document.getElementById("preview-interets").textContent = interets;
    document.getElementById("preview-certifications").textContent = certifications;

});


const boutonsModeles = document.querySelectorAll("[data-modele]");
const apercu = document.getElementById("apercu");

boutonsModeles.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        const modeleChoisi = bouton.dataset.modele;

        // Appliquer le design au CV
        apercu.classList.remove("classique", "moderne", "elegant");
        apercu.classList.add(modeleChoisi);

        // Retirer la sélection des autres modèles
        document.querySelectorAll(".modele").forEach(function(carte) {
            carte.classList.remove("selectionne");
        });

        // Mettre en évidence le modèle choisi
        bouton.closest(".modele").classList.add("selectionne");

    });

});
