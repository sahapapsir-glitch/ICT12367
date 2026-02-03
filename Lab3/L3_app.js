const count = document.querySelector(".count")
const input = document.querySelector("input")

input.addEventListener("keyup", () => {
    count.innerHTML = input.value.length
    count.style.transform = "scale(1.2)"
    setTimeout(() => {
        count.style.transform = "scale(1)"
    }, 150)
})
