// Liste des équipes (images et noms)
const teams = [
  { name: "", image: "fringue.png" },
  { name: "Holy energie", image: "holy.png" },
  { name: "équipe", image: "krolay-team.png" },
  { name: "équipe", image: "team1.png" },
];

// Sélection des éléments HTML
const teamImage = document.getElementById("team-image");
const teamName = document.getElementById("team-name");

// Index actuel
let currentIndex = 0;

// Fonction pour changer d'équipe avec effet de fondu
function changeTeam() {
  // Masquer l'image actuelle
  teamImage.classList.remove("show");

  // Passer à l'équipe suivante
  currentIndex = (currentIndex + 1) % teams.length;

  // Mettre à jour l'image et le nom
  teamImage.src = teams[currentIndex].image;
  teamName.textContent = teams[currentIndex].name;

  // Ajouter un délai pour laisser le temps à l'image de disparaître
  setTimeout(() => {
    // Afficher la nouvelle image avec un fondu
    teamImage.classList.add("show");
  }, 500); // Délai de 500ms pour laisser l'image s'effacer avant l'apparition
}

// Changer d'équipe toutes les 3 secondes
setInterval(changeTeam, 30000);

// Charger la première équipe au démarrage
changeTeam();
