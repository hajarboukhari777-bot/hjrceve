
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

    document.getElementById("preview-nom").textContent = nom; /*afficher le nom dans la section de prévisualisation*/
    document.getElementById("preview-email").textContent = email;
    document.getElementById("preview-telephone").textContent = telephone;

    document.getElementById("preview-profil").textContent = profil;
    document.getElementById("preview-formation").textContent = formation;
    document.getElementById("preview-experience").textContent = experience;
    document.getElementById("preview-competences").textContent = competences;

});
