const smallImg = document.querySelectorAll(".gallery img");
const fullImg = document.querySelector(".full-image");
const modal = document.querySelector(".modal");

smallImg.forEach(img => {
    img.addEventListener("click", () => {
        const fullsize = img.getAttribute("alt");
        fullImg.src = `images/full/${fullsize}.jpg`;
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    });
});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }
});
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
});
