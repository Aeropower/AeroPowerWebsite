// Fill in major, year, linkedin and photo (import an image from src/assets/images) for each member.
const member = (position, name) => ({
  position,
  name,
  major: "Major",
  year: "Year",
  linkedin: "",
  photo: null,
});

export const members = {
  electrical: [
    member("Captain", "Hector E Ramos-Rivera"),
    member("Co-Leader", "Diego J Orta Chevalier"),
    member("Co-Leader", "Martin J Aguilar Robles"),
    member("Member", "Carlos M. Sánchez Lebrón"),
    member("Member", "Joriel Ortiz Quiñones"),
    member("Member", "Jeremy J. Pagan Rosa"),
    member("Member", "Chedriel Luciano"),
    member("Member", "Camila Negron Reichard"),
    member("Member", "Kermit R. Aponte Aponte"),
    member("Member", "Kelvin A. García González"),
    member("Member", "Raul A. Olivo Montalvo"),
    member("Member", "Kevin Rivera Ramos"),
    member("Member", "Itzel Dawahra"),
    member("Member", "Jose Bengochea"),
    member("Member", "Francisco Cruz Ortiz"),
    member("Member", "Jose Ramírez"),
    member("Member", "Juamir López"),
    member("Member", "Esdras A. Vélez Miranda"),
  ],
  mechanical: [
    member("Co-Leader", "Ricardo Limardo"),
    member("Co-Leader", "José Santiago"),
    member("Member", "Dylan D. Colón Chaparro"),
    member("Member", "Gabriel G Batista"),
    member("Member", "Ignacio A Bautista Jacobs"),
    member("Member", "Carlos J Rodríguez Vargas"),
  ],
  software: [
    member("Captain", "Ulises L. Medina Hurtado"),
    member("Co-Leader", "Yahir J. Reyes Padilla"),
    member("Member", "Jeanpaul D. Ortiz Rodriguez"),
    member("Member", "Jorge A. Peralta García"),
    member("Member", "Daniel F. Muñoz Valenzuela"),
  ],
  business: [
    member("Captain", "Samuel A. García Rivera"),
    member("Co-Leader", "Alaina G. Rivera Santiago"),
    member("Member", "Ediel García Sonera"),
    member("Member", "Gustavo Alvarado Rivera"),
  ],
};
