const option = document.getElementById("option");
const card = document.getElementById("card");
const closeCard = document.getElementById("close");


option.addEventListener("click", (event) => {
    card.style.display = "flex";
});


closeCard.addEventListener("click", () => {
    card.style.display = "none";
});